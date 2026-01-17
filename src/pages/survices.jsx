import React from "react";

export default function Survices(){
    const images = [
        { src: "https://res.cloudinary.com/djw0srhou/image/upload/v1764908512/pool_d7wdbk.jpg", title: "Pool", subtitle: "Swim in Comfort" },
        { src: "https://res.cloudinary.com/djw0srhou/image/upload/v1764908522/kids_q4r5lj.jpg", title: "Kids Park", subtitle: "Fun for Little Ones" },
        { src: "https://res.cloudinary.com/djw0srhou/image/upload/v1764908538/wedding_hbw0r5.jpg", title: "Hall", subtitle: "Celebrate in Style" },
        { src: "https://res.cloudinary.com/djw0srhou/image/upload/v1764908506/parking_lidpg6.jpg", title: "Parking", subtitle: "Safe & Convenient" },
        { src: "https://res.cloudinary.com/djw0srhou/image/upload/v1764908502/gym_s0nnyx.jpg", title: "Gym", subtitle: "Stay Fit Anytime" },
    ];

    return(
        <div className="flex w-full  flex-col px-10 md:px-30 mt-7">
            <h1 data-aos="fade-down" data-aos-once="false" className="font1 text-4xl text-amber-300 pb-2 w-50 border-b-2 border-amber-300">Services</h1>
            <div data-aos="zoom-out" data-aos-once="false" className="flex flex-wrap justify-center items-center gap-5.5 py-12">
                {
                    images.map((img,index)=>(
                        <div className="h-55 md:h-90 w-31 md:w-51 overflow-hidden relative ">
                            <img className="object-cover " key={index} src={img.src} />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h2 className="text-lg md:text-xl font1 text-amber-300 font-bold">{img.title}</h2>
                                <p className="text-[10px] md:text-sm subtitle1">{img.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}