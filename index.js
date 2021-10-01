const fs = require('fs')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const bcrypt = require('bcrypt');
const saltRounds = 10;

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const serveStatic = require('serve-static')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/citizens?retryWrites=true&w=majority`;

var options = {
    root: path.join(__dirname, 'views'),
}   

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const CitizenSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    password: String
}, { collection : 'mycitizens' });

const CitizenModel = mongoose.model('CitizenModel', CitizenSchema);

app.get('/citizens/get',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    

    return res.json({ "status": "OK" })
})

app.get('/citizens/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = CitizenModel.find({})
    query.exec((err, allCitizens) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        var citizenExists = false;

        allCitizens.forEach(citizen => {
            if(citizen.phone.includes(req.query.phone)){
                citizenExists = true
            }
        });
        if(citizenExists){
            return res.json({ "status": "Error" })

        } else {
            let encodedPassword = "#"
            const salt = bcrypt.genSalt(saltRounds)
            encodedPassword = bcrypt.hashSync(req.query.password, saltRounds)
            const citizen = new CitizenModel({ phone: req.query.phone, password: encodedPassword, name: req.query.name, age: Number(req.query.age) });
            citizen.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK" })
            })
        }
    });
})

app.get('/citizens/check', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = CitizenModel.find({ phone: { $in: req.query.phone }  })
    queryBefore.exec((err, allCitizens) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allCitizens.length >= 1){
            let query =  CitizenModel.findOne({'phone': req.query.phone}, function(err, citizen){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.password, citizen.password) && req.query.password !== ''
                    if(citizen != null && citizen != undefined && passwordCheck){
                        return res.json({ "status": "OK", "sender": citizen.phone })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allCitizens.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})

app.get('**', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

// const port = process.env.PORT || 8080
const port = 4000  
app.listen(port)