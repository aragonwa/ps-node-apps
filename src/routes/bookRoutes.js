const express = require('express');
const debug = require('debug')('app:bookRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.use((req, res, next)=>{
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  });
  bookRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected to db');
          const db = client.db(dbName);
          const col = await db.collection('books');
          const books = await col.find().toArray();

          res.render('books', { title: 'My Library', nav, books });
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected to db');
          const db = client.db(dbName);
          const col = await db.collection('books');
          let book = await col.findOne({ _id: new ObjectID(id) });
          if (book === null) (book = await col.findOne({ _id: id }));
          debug(book);
          res.render('book', {
            nav,
            title: 'Library',
            book
          });
        } catch (err) {
          debug(err.stack);
        }
      }());
    });

  return bookRouter;
}

module.exports = router;
