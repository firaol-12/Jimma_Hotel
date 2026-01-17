import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer(){
    const location = useLocation();
    const isLandingPage = location.pathname==="/";

    const scrollToSection = (id)=>{
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:"smooth"});
    }

    return(
        <div 
            className="w-full bg-gradient-to-r from-amber-100 to-amber-300 md:h-80 flex flex-col md:flex-row justify-between py-10 px-5 md:px-30"
        >
            <div className="flex justify-between md:w-1/2">
            <div className="flex flex-col gap-3">
                <div className="text-xl font-bold">Address</div>
                <div className="flex flex-col gap-2 pl-3 roboto">
                    <div className="flex items-center mb-1 gap-2.5">
                        <img className="h-7 w-7" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908400/location_zun392.png" />
                        <a href="#">Jimma,Ethiopia</a>
                    </div>
                    <div className="flex items-center mb-1 gap-2.5">
                        <img className="h-7 w-7" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908382/phone_vwdeam.png" />
                        <a href="tel:+251942090003">+251942090003</a>
                    </div>
                    <div className="flex items-center mb-1 gap-2.5">
                        <img className="h-7 w-7" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908445/email_2_xpsl85.png" />
                        <a href="mailto:bashaashaastudio@gmail.com">bashaashaastudio@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="text-xl font-bold">Navigation</div>
                <div>
                    {isLandingPage?
                        (<div className="flex flex-col gap-2 pl-3 roboto">
                            <button className="cursor-pointer roboto" onClick={()=>{scrollToSection("home")}}>Home</button>
                            <button className="cursor-pointer roboto" onClick={()=>{scrollToSection("about")}}>About</button>
                            <button className="cursor-pointer roboto" onClick={()=>{scrollToSection("survices")}}>Services</button>
                            <button className="cursor-pointer roboto" onClick={()=>{scrollToSection("rooms")}}>Rooms</button>
                            <button className="cursor-pointer roboto" onClick={()=>{scrollToSection("gallery")}}>Gallery</button>
                        </div>):
                        <Link className="cursore-pointer roboto md:pl-8" to="/">Home</Link>
                    }
                </div>
            </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="w-75 ">
                    <h3  className="text-xl font-bold">About Us</h3>
                    <p className="text-justify my-3 roboto">
                        Welcome to Jimma Hotel, where comfort, convenience, 
                        and warm Ethiopian hospitality meet. Located in the 
                        heart of Jimma, our hotel offers modern rooms, exquisite 
                    </p>
                </div>
                <div className="flex gap-2 mt-5">
                    <button className="w-9 h-9 cursor-pointer">
                        <img src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908489/facebook_3_mjfocx.png"></img>
                    </button>
                    <button className="w-9 h-9 cursor-pointer">
                        <img src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908423/instagram_1_i9w73b.png"></img>
                    </button>
                    <button className="w-9 h-9 cursor-pointer">
                        <img src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908403/telegram_1_wtleaq.png" />
                    </button>
                    <button className="w-9 h-9 cursor-pointer">
                        <img src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908386/tiktok_lenmq6.png"></img>
                    </button>
                    <button className="w-9 h-9 cursor-pointer">
                        <img src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908343/whatsapp_dz0psz.png"></img>
                    </button>
                    <button className="w-9 h-9 cursor-pointer">
                        <img src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908335/youtube_1_ll1khf.png"></img>
                    </button>
                </div>
            </div>
        </div>
    );
}