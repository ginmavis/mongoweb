const { MongoClient } = require('mongodb');

const express = require('express');

let arrWords = [{ en: 'A', vn: 'b' }, { en: 'C', vn: 'D' }];

// let wordsCollection;

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home', { arrWords }));

// app.get('/', (req, res) => {
//     wordsCollection.find().toArray
//         .then(result => res.render('home', { arrWords: result }))
//         .catch(err => res.send(err.message))
// });

const url = 'mongodb://localhost:27017/mydb';

client = new MongoClient(url, { useUnifiedTopology: true })


//mongo w3 school
// client.connect((err, db) => {
//      app.listen(3000, () => console.log('servser started'))
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     dbo.collection("customers").find({}).toArray((err, result) => {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });

// });

//mongoweb
client.connect()
    .then(db => {
        var dbo = db.db("mydb");
        app.listen(3000, () => console.log('servser started'))
        const words = dbo.collection('customers');
        return words.find().toArray();
    })
    .then(result => console.log(result))
    .catch(err => console.log(err.message))