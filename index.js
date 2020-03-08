const { MongoClient } = require('mongodb');

const express = require('express');

let arrWords = [];

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



//mongoweb
client.connect()
    .then(db => {
        var dbo = db.db("mydb");
        app.listen(3000, () => console.log('servser started'))
        const words = dbo.collection('customers');
        return words.find().toArray();
    })
    .then(result => arrWords = result)
    .catch(err => console.log(err.message))