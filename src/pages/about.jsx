import React from "react";

export default function About(){
    return(
        <div className="w-full md:px-30 flex flex-col md:flex-row justify-between items-start gap-8 my-20">
            <div className="flex flex-col md:w-1/2 px-10 md:px-0">
                <h1 data-aos="fade-down" data-aos-once="false" className="font1 text-4xl text-amber-300 pb-2 w-50 border-b-2 border-amber-300">About Us</h1>
                <p data-aos="zoom-in" data-aos-once="false" className="mt-5 text-lg text-justify text-gray-700">
                    Welcome to Jimma Hotel, where comfort, convenience, 
                    and warm Ethiopian hospitality meet. Located in the 
                    heart of Jimma, our hotel offers modern rooms, exquisite 
                    dining, and a peaceful atmosphere for both business and 
                    leisure travelers. Call us today to reserve your stay 
                    and experience a home-away-from-home like no other.
                </p>
                
                <button data-aos="fade-up" data-aos-once="false" className="w-40 px-3 py-1 bg-amber-300 border-2 border-amber-300 cursor-pointer mt-12 text-white hover:bg-white hover:text-amber-300">Call Now to Book</button>

            </div>
            <div data-aos="fade-left" data-aos-once="false" className="relative flex w-[300px]  md:px-0 md:w-1/3 h-40 md:h-0">
                <img className="md:w-100 ml-22 w-70 object-cover md:ml-0 border-8 border-white h-40 md:h-60 absolute " src="https://res.cloudinary.com/djw0srhou/image/upload/v1764910099/hotel-bg-img_npzvne.jpg" />
                <img className=" w-30 md:w-50 object-cover border-8 border-white h-20 md:h-40 top-32 left-32 md:top-42 absolute md:left-15 z-80" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908498/about2_d6nnay.jpg" />
                <img className="h-30 md:h-50 w-40 md:w-60 object-cover border-8 border-white top-20 absolute left-8 md:-left-20 " src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908487/about3_ecxw9w.jpg" />
            </div>
        </div>
    );
}