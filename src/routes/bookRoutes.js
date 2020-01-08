const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [{
    read: true, _id: '5a91cb944a58f51e5851e281', title: 'Non enim adipisicing anim ex deserunt aliqua amet veniam sunt.', author: 'Lester Merrill', genre: 'biography', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e281' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e283', title: 'Nulla qui ut dolore et id sunt ipsum exercitation.', author: 'Alvarado Mcgee', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e283' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e284', title: 'In ex consectetur occaecat eu amet exercitation ut enim elit elit laboris.', author: 'Leanne Morse', genre: 'biography', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e284' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e285', title: 'Id reprehenderit amet ullamco eiusmod cillum sint do deserunt cupidatat ex eiusmod et esse.', author: 'Marilyn Burns', genre: 'biography', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e285' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e286', title: 'Tempor excepteur dolore laborum adipisicing pariatur labore dolore dolor dolor deserunt pariatur.', author: 'Janette Bridges', genre: 'suspense', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e286' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e287', title: 'Culpa cupidatat esse magna fugiat nisi occaecat dolore magna.', author: 'Ophelia David', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e287' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e288', title: 'Est velit Lorem duis laborum aliqua non laborum tempor cillum.', author: 'Deleon Gross', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e288' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e289', title: 'Dolore aliquip sit minim nisi ea excepteur id ex nulla sit velit reprehenderit.', author: 'Russo Copeland', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e289' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e28a', title: 'Eu dolore tempor Lorem occaecat Lorem elit labore voluptate.', author: 'Hollie Haley', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e28a' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e28b', title: 'Lorem veniam ea aliquip aute incididunt incididunt duis deserunt sint anim.', author: 'Saundra Baldwin', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e28b' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e28c', title: 'Dolore do aliquip reprehenderit qui sit tempor elit ad qui fugiat voluptate cupidatat.', author: 'Pacheco Savage', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e28c' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e28d', title: 'Ut consectetur nostrud occaecat nulla tempor qui.', author: 'Gross Jefferson', genre: 'comedy', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e28d' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e28e', title: 'Labore labore eu consectetur deserunt consequat consectetur duis aliquip adipisicing culpa culpa elit.', author: 'Hilary Reynolds', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e28e' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e28f', title: 'In labore reprehenderit exercitation dolore deserunt aliqua culpa officia.', author: 'Mann Branch', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e28f' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e290', title: 'Occaecat eiusmod ex occaecat Lorem culpa ex ipsum.', author: 'Yang Stephenson', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e290' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e291', title: 'Reprehenderit elit cupidatat culpa aliqua pariatur non cupidatat.', author: 'Vaughn Simon', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e291' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e292', title: 'Excepteur cillum laborum cupidatat exercitation eiusmod minim proident nulla ad.', author: 'Calhoun Kim', genre: 'comedy', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e292' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e293', title: 'Aute Lorem tempor anim do laboris consequat.', author: 'Pace Morin', genre: 'comedy', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e293' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e294', title: 'Nostrud ex irure ea pariatur aliqua.', author: 'Selena Torres', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e294' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e295', title: 'Nisi anim laborum consectetur consectetur consectetur elit enim officia culpa Lorem.', author: 'Navarro English', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e295' }
  }, {
    read: false, _id: '5a91cb944a58f51e5851e296', title: 'Quis ea minim veniam id consectetur nulla et sit.', author: 'Pamela Reyes', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cb944a58f51e5851e296' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca2', title: 'Tempor sit incididunt anim ullamco eu commodo officia sint duis excepteur excepteur occaecat cillum dolor.', author: 'Duncan Daniel', genre: 'suspense', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca2' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca3', title: 'Non enim adipisicing anim ex deserunt aliqua amet veniam sunt.', author: 'Lester Merrill', genre: 'biography', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca3' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca4', title: 'Ipsum magna incididunt est enim eiusmod anim aute laborum labore incididunt commodo velit fugiat.', author: 'Lesa Sargent', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca4' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca5', title: 'Nulla qui ut dolore et id sunt ipsum exercitation.', author: 'Alvarado Mcgee', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca5' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca6', title: 'In ex consectetur occaecat eu amet exercitation ut enim elit elit laboris.', author: 'Leanne Morse', genre: 'biography', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca6' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca7', title: 'Id reprehenderit amet ullamco eiusmod cillum sint do deserunt cupidatat ex eiusmod et esse.', author: 'Marilyn Burns', genre: 'biography', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca7' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca8', title: 'Tempor excepteur dolore laborum adipisicing pariatur labore dolore dolor dolor deserunt pariatur.', author: 'Janette Bridges', genre: 'suspense', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca8' }
  }, {
    read: false, _id: '5a91cba47541391e9da28ca9', title: 'Culpa cupidatat esse magna fugiat nisi occaecat dolore magna.', author: 'Ophelia David', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28ca9' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68ab', title: 'War and Peace', genre: 'Historical Fiction', author: 'Lev Nikolayevich Tolstoy', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68ab' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68ae', title: 'A Journey into the Center of the Earth', genre: 'Science Fiction', author: 'Jules Verne', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68ae' }
  }, {
    read: false, _id: '5a91cba47541391e9da28caa', title: 'Est velit Lorem duis laborum aliqua non laborum tempor cillum.', author: 'Deleon Gross', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28caa' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cab', title: 'Dolore aliquip sit minim nisi ea excepteur id ex nulla sit velit reprehenderit.', author: 'Russo Copeland', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cab' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cac', title: 'Eu dolore tempor Lorem occaecat Lorem elit labore voluptate.', author: 'Hollie Haley', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cac' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cad', title: 'Lorem veniam ea aliquip aute incididunt incididunt duis deserunt sint anim.', author: 'Saundra Baldwin', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cad' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cae', title: 'Dolore do aliquip reprehenderit qui sit tempor elit ad qui fugiat voluptate cupidatat.', author: 'Pacheco Savage', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cae' }
  }, {
    read: false, _id: '5a91cba47541391e9da28caf', title: 'Ut consectetur nostrud occaecat nulla tempor qui.', author: 'Gross Jefferson', genre: 'comedy', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28caf' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb0', title: 'Labore labore eu consectetur deserunt consequat consectetur duis aliquip adipisicing culpa culpa elit.', author: 'Hilary Reynolds', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb0' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb1', title: 'In labore reprehenderit exercitation dolore deserunt aliqua culpa officia.', author: 'Mann Branch', genre: 'mystery', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb1' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb2', title: 'Occaecat eiusmod ex occaecat Lorem culpa ex ipsum.', author: 'Yang Stephenson', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb2' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb3', title: 'Reprehenderit elit cupidatat culpa aliqua pariatur non cupidatat.', author: 'Vaughn Simon', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb3' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb4', title: 'Excepteur cillum laborum cupidatat exercitation eiusmod minim proident nulla ad.', author: 'Calhoun Kim', genre: 'comedy', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb4' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb5', title: 'Aute Lorem tempor anim do laboris consequat.', author: 'Pace Morin', genre: 'comedy', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb5' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb6', title: 'Nostrud ex irure ea pariatur aliqua.', author: 'Selena Torres', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb6' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb7', title: 'Nisi anim laborum consectetur consectetur consectetur elit enim officia culpa Lorem.', author: 'Navarro English', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb7' }
  }, {
    read: false, _id: '5a91cba47541391e9da28cb8', title: 'Quis ea minim veniam id consectetur nulla et sit.', author: 'Pamela Reyes', genre: 'horror', links: { self: 'http://localhost:4000/api/books/5a91cba47541391e9da28cb8' }
  }, {
    read: false, _id: '5a9300d72dc20bc9ddb1b5fd', title: 'x', author: 'x', genre: 'x', __v: 0, links: { self: 'http://localhost:4000/api/books/5a9300d72dc20bc9ddb1b5fd' }
  }, {
    read: false, _id: '5a9300e32dc20bc9ddb1b5fe', title: 'hi', author: 'no', genre: 'suspense', __v: 0, links: { self: 'http://localhost:4000/api/books/5a9300e32dc20bc9ddb1b5fe' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc29', title: 'War and Peace', genre: 'Historical Fiction', author: 'Lev Nikolayevich Tolstoy', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc29' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc2a', title: 'Les Misérables', genre: 'Historical Fiction', author: 'Victor Hugo', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc2a' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc2b', title: 'The Time Machine', genre: 'Science Fiction', author: 'H. G. Wells', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc2b' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc2c', title: 'A Journey into the Center of the Earth', genre: 'Science Fiction', author: 'Jules Verne', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc2c' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc2d', title: 'The Dark World', genre: 'Fantasy', author: 'Henry Kuttner', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc2d' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc2e', title: 'The Wind in the Willows', genre: 'Fantasy', author: 'Kenneth Grahame', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc2e' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc2f', title: 'Life On The Mississippi', genre: 'History', author: 'Mark Twain', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc2f' }
  }, {
    read: false, _id: '5e0b7cd21bbffdee6fa7cc30', title: 'Childhood', genre: 'Biography', author: 'Lev Nikolayevich Tolstoy', links: { self: 'http://localhost:4000/api/books/5e0b7cd21bbffdee6fa7cc30' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68ac', title: 'Les Misérables', genre: 'Historical Fiction', author: 'Victor Hugo', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68ac' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68ad', title: 'The Time Machine', genre: 'Science Fiction', author: 'H. G. Wells', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68ad' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68af', title: 'The Dark World', genre: 'Fantasy', author: 'Henry Kuttner', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68af' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68b0', title: 'The Wind in the Willows', genre: 'Fantasy', author: 'Kenneth Grahame', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68b0' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68b1', title: 'Life On The Mississippi', genre: 'History', author: 'Mark Twain', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68b1' }
  }, {
    read: false, _id: '5e0bc71370095660d65c68b2', title: 'Childhood', genre: 'Biography', author: 'Lev Nikolayevich Tolstoy', links: { self: 'http://localhost:4000/api/books/5e0bc71370095660d65c68b2' }
  }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render('books', { title: 'My Library', nav, books });
    });
  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('book', { title: 'My Library', nav, book: books[id] });
    });
  return bookRouter;
}
module.exports = router;
