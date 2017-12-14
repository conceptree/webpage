const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const connection = (closure)=>{
    return MongoClient.connect('mongodb://localhost:27017/conceptree',(err,db)=>{
        if(err){
            return console.log(err);
        }
        closure(db);
    });
};

const sendError = (err, res)=>{
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response = {
    status:200,
    data:[],
    message:null
}

router.get('/users', (req, res)=>{
    connection((db)=>{
        db.collection('users')
        .find()
        .toArray()
        .then((users)=>{
            response.data = users;
            res.json(response);
            console.log(res);
        })
        .catch((err)=>{
            sendError(err, res);
        })
    });
});

router.post('/users', (req, res)=>{
    connection((db)=>{
        db.collection('users')
        .find()
        .toArray()
        .then((users)=>{
            response.data = users;
            res.json(response);
            console.log(res);
        })
        .catch((err)=>{
            sendError(err, res);
        })
    });
});

router.put('/users/:id', (req, res)=>{
    connection((db)=>{
        db.collection('users')
        .find()
        .toArray()
        .then((users)=>{
            response.data = users;
            res.json(response);
            console.log(res);
        })
        .catch((err)=>{
            sendError(err, res);
        })
    });
});

router.delete('/users/:id', (req, res)=>{
    connection((db)=>{
        db.collection('users')
        .find()
        .toArray()
        .then((users)=>{
            response.data = users;
            res.json(response);
            console.log(res);
        })
        .catch((err)=>{
            sendError(err, res);
        })
    });
});

module.exports = router;