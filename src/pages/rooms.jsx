import React from "react";
import { useNavigate } from "react-router-dom";


export default function Rooms(){
    const navigate = useNavigate();
    return(
        <div className="flex w-full flex-col md:px-30 px-10 py-5 mt-7">
            <h1 data-aos="fade-down" data-aos-once="false" className="font1 text-4xl text-amber-300 pb-2 w-50 border-b-2 border-amber-300">Rooms</h1>
            <div className="flex flex-wrap gap-12 justify-center items-center py-12">

                <div data-aos="fade-up" data-aos-once="false" className="w-60 h-90 flex flex-col gap-3">
                    <div className="w-full">
                        <img className="w-full object-cover h-35" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908515/room1_zacog8.jpg" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font1 text-xl">Simgle Room</h1>
                        <p className="text-justify text-gray-700">
                            Cozy and comfortable, our Single Room offers 
                            all the essentials for a relaxing stay.
                        </p>
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col justify-center items-center text-gray-700">
                                <h1 className="font1 text-lg mb-0 pb-0">$135</h1>
                                <p className="text-sm">Per Night</p>
                            </div>
                            <button onClick={() => navigate("/singleroom")} className="w-25 px-3 py-1 bg-amber-300 border-2 border-amber-300 cursor-pointer text-white hover:text-amber-300 hover:bg-white">Details</button>
                        </div>
                    </div>
                    
                </div>

                <div data-aos="fade-up" data-aos-once="false" className="w-60 h-90 flex-col gap-3">
                    <div className="w-full">
                        <img className="w-full object-cover h-35" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908518/room2_w7tjjb.jpg" />
                    </div>
                    <div className="flex flex-col gap-3 py-2">
                        <h1 className="font1 text-xl">Double Room</h1>
                        <p className="text-justify text-gray-700">
                            Cozy and comfortable, our Single Room offers 
                            all the essentials for a relaxing stay.
                        </p>
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col justify-center items-center text-gray-700">
                                <h1 className="font1 text-lg mb-0 pb-0">$135</h1>
                                <p className="text-sm">Per Night</p>
                            </div>
                            <button onClick={() => navigate("/doubleroom")} className="w-25 px-3 py-1 bg-amber-300 border-2 border-amber-300 cursor-pointer text-white hover:text-amber-300 hover:bg-white">Details</button>
                        </div>
                    </div>
                    
                </div>

                <div data-aos="fade-up" data-aos-once="false" className="w-60 h-90 flex-col gap-3">
                    <div className="w-full">
                        <img className="w-full object-cover h-35" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908525/room3_am1rwq.jpg" />
                    </div>
                    <div className="flex flex-col gap-3 py-2">
                        <h1 className="font1 text-xl">Twin Room</h1>
                        <p className="text-justify text-gray-700">
                            Cozy and comfortable, our Single Room offers 
                            all the essentials for a relaxing stay.
                        </p>
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col justify-center items-center text-gray-700">
                                <h1 className="font1 text-lg mb-0 pb-0">$135</h1>
                                <p className="text-sm">Per Night</p>
                            </div>
                            <button onClick={() => navigate("/twinroom")} className="w-25 px-3 py-1 bg-amber-300 border-2 border-amber-300 cursor-pointer text-white hover:text-amber-300 hover:bg-white">Details</button>
                        </div>
                    </div>
                    
                </div>

                <div data-aos="fade-up" data-aos-once="false" className="w-60 h-90 flex-col gap-3">
                    <div className="w-full">
                        <img className="w-full object-cover h-35" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908528/room4_v8x64d.jpg" />
                    </div>
                    <div className="flex flex-col gap-3 py-2">
                        <h1 className="font1 text-xl">Family Room</h1>
                        <p className="text-justify text-gray-700">
                            Cozy and comfortable, our Single Room offers 
                            all the essentials for a relaxing stay.
                        </p>
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col justify-center items-center text-gray-700">
                                <h1 className="font1 text-lg mb-0 pb-0">$135</h1>
                                <p className="text-sm">Per Night</p>
                            </div>
                            <button onClick={() => navigate("/familyroom")} className="w-25 px-3 py-1 bg-amber-300 border-2 border-amber-300 cursor-pointer text-white hover:text-amber-300 hover:bg-white">Details</button>
                        </div>
                    </div>
                    
                </div>

                
            </div>
        </div>
    )
}