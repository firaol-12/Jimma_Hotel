import React,{useState} from "react";
import {Images} from "./images.jsx";

export default function Gallery(){
    const images = Images.gallery;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTouch = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <div className="px-10 md:px-30 flex flex-col mt-7">
            <h1 data-aos="fade-down" data-aos-once="false" className="font1 text-4xl text-amber-300 pb-2 w-50 border-b-2 border-amber-300">Gallery</h1>
            <div className="flex flex-wrap justify-center items-center gap-5 py-12">
                {images.map((src, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="relative overflow-hidden mb-6 break-inside-avoid group"
                    onTouchStart={() => handleTouch(index)}
                >
                    {/* Image */}
                    <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-51 h-80 object-cover transform transition-transform duration-500 
                        ${activeIndex === index ? "scale-110" : "scale-100"}
                        group-hover:scale-110`}
                    />

                    {/* Dark overlay */}
                    <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center 
                        transition-opacity duration-500 
                        ${activeIndex === index ? "opacity-100" : "opacity-0"} 
                        group-hover:opacity-100`}
                    >
                    {/* <Eye className="text-white w-10 h-10" /> */}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}