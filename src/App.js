import React from 'react'
import { ApolloProvider } from '@apollo/client';
import client from './ApolloServer/apolloServer'
import ProductList from './queries/ProductList';
import Navbar from './Components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddProduct from './Components/addProduct/AddProduct';
import AddCategory from './Components/addCategory/AddCategory';

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
   
      <Navbar />
      <Switch>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/addCategory">
            <AddCategory />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
    </div>
  </ApolloProvider>
  );
}

export default App;
