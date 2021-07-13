import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
