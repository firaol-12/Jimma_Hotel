import React from "react";
import "./home.css"
export default function Home(){
    const scrollToSection = (id)=>{
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:"smooth"});
    }
    return(
        <div className="h-screen w-full flex justify-center md:justify-start items-center md:px-30 text-white"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://res.cloudinary.com/djw0srhou/image/upload/v1764910099/hotel-bg-img_npzvne.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
            }}
        >
            <div className="flex flex-col px-7 md:px-0 md:w-2/4 gap-5">
                <h1 data-aos="fade-down" data-aos-once="false" className="text-6xl font-bold font1 md:text-start text-center mb-4 md:mb-0">Welcome to <span className="text-amber-300"
                >Jimma Hotel</span></h1>
                <p  data-aos="zoom-in" data-aos-once="false" className="text-xl mb-10 md:text-start text-center md:mb--5">Comfort, convenience, and class—right at the heart of 
                Jimma. Enjoy a restful stay, delicious dining, and genuine 
                hospitality that feels like home.
                </p>
                <div  data-aos="fade-up" data-aos-once="false" className="flex gap-4 justify-center md:justify-start">
                    <button className="w-40 px-3 py-2 bg-amber-300 border-2 border-amber-300 cursor-pointer hover:text-amber-300 hover:bg-white"><a href="tel:+251932453742">Call Now to Book</a></button>
                    <button className="w-40 px-3 py-2 border-amber-300 border-2 cursor-pointer hover:text-amber-300 hover:bg-white" onClick={()=>{scrollToSection("rooms")}}>Explore Rooms</button>
                </div>
            </div>
        </div>
    );
}