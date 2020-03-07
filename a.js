const { MongoClient } = require('mongodb');

const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
// app.listen(3000, () => console.log('servser started'))

const url = 'mongodb://localhost:27017/mydb';

client = new MongoClient(url, { useUnifiedTopology: true })



client.connect((err, db) => {
    app.listen(3000, () => console.log('servser started'))
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("customers").findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });

});