import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Example from '../components/Example';

const API = 'http://localhost:4000/examples/'

const [example, setExample] = useState([])

const fetchExamples = async () => {
    try {
       const res = await axios.get(API);
       const data = await res.json();
       setExample(data);
        console.log(example)
    } catch (error) {
        console.log('Error: ', error)
       }
}

export default fetchExamples;


// try {
//     const response = await axios.get(`http://localhost:8082/api/books`);
//     let AllBooks = await response.data;
//     let featuredBooks = [];

//     await AllBooks.forEach((book) => {
//       if (book.feature) {
//         featuredBooks = [...featuredBooks, book];
//       }
//     });
//     return setState(featuredBooks);
//   } catch (err) {
//     console.log(err);
//   }