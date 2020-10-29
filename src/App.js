import React from 'react'
import './App.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import About from "./components/about/about"
import Home from "./components/home/home"
import Appointment from "./components/appointment/appointment"
import Gallery from "./components/gallery/gallery"
import Location from "./components/location/location"
import Banner from "./components/banner/banner"

export default function App() {

    return (
        <Router>
            <div class="main-wrapper"> {/* 65% width */}

                <div className="banner-wrapper">
                    <Banner />
                </div>

                <nav class="navbar-wrapper">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/location">Map &amp; Direction</Link>
                        </li>
                        <li>
                            <Link to="/appointment">Appointment</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Photo Gallery</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/location">
                        <Location />
                    </Route>
                    <Route path="/appointment">
                        <Appointment />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}

