import React,{useState} from "react";
import {Link, useLocation} from "react-router-dom"

export default function Navbar(){
    const location = useLocation();
    const isLandingPage = location.pathname==="/";
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) =>{
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    }
    return(
        <div className="opacity-[0.9] bg-white w-full h-14 fixed top-0 left-0 flex justify-between px-5 md:px-30 items-center text-lg z-100">
            <div className="font1 text-2xl text-amber-300"> Jimma Hotel</div>
            <div className="roboto md:flex gap-5 hidden">
            {isLandingPage ? (
                <>
                    <button onClick={()=> scrollToSection("home")} className="cursor-pointer hover:text-amber-300">Home</button>
                    <button onClick={()=> scrollToSection("about")} className="cursor-pointer hover:text-amber-300">About</button>
                    <button onClick={()=> scrollToSection("survices")} className="cursor-pointer hover:text-amber-300">Services</button>
                    <button onClick={()=> scrollToSection("rooms")} className="cursor-pointer hover:text-amber-300">Rooms</button>
                    <button onClick={()=> scrollToSection("gallery")} className="cursor-pointer hover:text-amber-300">Gallery</button>
                </>)
                :(<Link className="cursor-pointer roboto hover:text-amber-300" to="/">Home</Link>)
            }
            </div>
            
            <div>
                <button className="hidden md:flex bg-amber-300 border-2 border-amber-300 text-white w-30 px-3 py-1 cursor-pointer hover:bg-white hover:text-amber-300 roboto"onClick={()=> scrollToSection("contact")}>Contact Us</button>
            </div>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    {/* Hamburger Icon */}
                    <div className="space-y-1 cursor-pointer">
                    <span className="block w-6 h-0.5 text-black bg-black"></span>
                    <span className="block w-6 h-0.5 text-black bg-black"></span>
                    <span className="block w-6 h-0.5 text-black bg-black"></span>
                    </div>
                </button>
                {menuOpen && (
                    <div className="md:hidden bg-white opacity-[0.9] w-full text-center py-4 absolute top-16 left-0 z-10">
                        {isLandingPage? (
                            <div className="flex flex-col justify-center items-center gap-3">
                                <button onClick={()=> scrollToSection("home")} className="cursor-pointer hover:text-amber-300">Home</button>
                                <button onClick={()=> scrollToSection("about")} className="cursor-pointer hover:text-amber-300">About</button>
                                <button onClick={()=> scrollToSection("survices")} className="cursor-pointer hover:text-amber-300">Services</button>
                                <button onClick={()=> scrollToSection("rooms")} className="cursor-pointer hover:text-amber-300">Rooms</button>
                                <button onClick={()=> scrollToSection("gallery")} className="cursor-pointer hover:text-amber-300">Gallery</button>
                                <button className="bg-amber-300 border-2 border-amber-300 text-white w-30 px-3 py-1 cursor-pointer hover:bg-white hover:text-amber-300 roboto"onClick={()=> scrollToSection("contact")}>Contact Us</button>
                            </div>)
                            :(<Link className="cursor-pointer roboto" to="/">Home</Link>)
                        }
                    </div>
                )
                }
            </div>
        </div>
    );
}