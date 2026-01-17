import React from "react";

import Home from './pages/home'
import About from './pages/about'
import Rooms from './pages/rooms'
import Survices from './pages/Survices'
import Gallery from './pages/gallery'
import Contact from './pages/contact'

export default function Pages(){
    return (
        <div>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="rooms"><Rooms /></div>
            <div id="survices"><Survices /></div>
            <div id="gallery"><Gallery /></div>
            <div id="contact"><Contact /></div>
            
        </div>
    )
}