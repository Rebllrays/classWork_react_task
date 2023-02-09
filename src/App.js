import React, {useState} from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

function App() {
 
  let users = [
    {
      name: "Mark",
      lastName: "re",
      age:23,
      id: Date.now()
    },
    {
      name: "Hosse",
      lastName: "re",
      age:25,
      id: Date.now()
    },
    {
      name: "John",
      lastName: "re",
      age:32,
      id: Date.now()
    },
    {
      name: "Tom",
      lastName: "re",
      age:23,
      id: Date.now()
    },
    {
      name: "Ari",
      lastName: "re",
      age:12,
      id: Date.now()
    }
  ]; 
  return (
    <>
    <Header />
    <Section users={users} />
    <Footer />
    </>
  );
}

export default App;