import React from "react";
import Gallery from "../gallery";
import Footer from "../../component/footer";

export default function DetailDoubleRoom(){
    const images = [
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908493/bath_rgjxgn.png",title:"Bath"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908473/food_mm27dc.png",title:"Food"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908431/freezer_lv2vhz.png",title:"Fridge"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908416/sofa_etuz3m.png",title:"Sofa"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908410/table_yxhprg.png",title:"Table"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908362/television_jdsyfs.png",title:"Digital TV"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908352/wifi_vpqvzd.png",title:"Wifi"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908467/key_fmniqt.png",title:"Look Room"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908460/light-table_mzpiqg.png",title:"Soft drink"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908457/luggage_owsmdq.png",title:"Toilet"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908351/toilet_1_rz75cf.png",title:"Luggage"},
        {src:"https://res.cloudinary.com/djw0srhou/image/upload/v1764908371/soft-drink_idu2zb.png",title:"Table light"},
    ]
    return(
        <div className="flex flex-col">
            <div
            className="w-full h-70 flex justify-center items-center flex-col text-white pt-5 mb-8"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://res.cloudinary.com/djw0srhou/image/upload/v1764915071/d1_oc4gmo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            > 
                <h1 data-aos="zoom-in" data-aos-once="false" className="text-4xl font1">Double Room</h1>
                <p data-aos="zoom-in" data-aos-once="false" className="text-lx">Safe & Convenient</p>
            </div>

            <div className="md:px-30 px-10">

                <div className="flex flex-col md:flex-row  justify-between items-center py-4">
                    <div data-aos="fade-right" data-aos-once="false" className="pl-2 border-l-5 border-amber-300">
                        <h1 className="text-3xl font1">Standard Double Room</h1>
                    </div>
                    <div data-aos="fade-left" data-aos-once="false" className=" flex gap-5">
                        <div className="flex items-center gap-1.5">
                            <img className="w-7 h-7" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908471/gusts_vjfsh4.png" />
                            <p className="text-lg text-gray-600 roboto">2 Gusts</p>
                        </div>

                        <div className="flex items-center gap-1">
                            <img className="w-12 h-12" src="https://res.cloudinary.com/djw0srhou/image/upload/v1764908454/money_dzyri7.png" />
                            <p className="text-lg text-gray-600 roboto">1500 birr</p>
                        </div>
                        
                    </div>
                </div>

                <div className=" flex flex-col gap-5 w-full py-8">
                    <h1 data-aos="fade-up" data-aos-once="false" className="font1 text-3xl text-center">Description</h1>
                    <p data-aos="zoom-in" data-aos-once="false" className="w-full text-center">
                    Welcome to Jimma Hotel, where comfort, convenience, 
                    and warm Ethiopian hospitality meet. Located in the 
                    heart of Jimma, our hotel offers modern rooms, exquisite 
                    dining, and a peaceful atmosphere for both business and 
                    leisure travelers. Call us today to reserve your stay 
                    and experience a home-away-from-home like no other.
                    Welcome to Jimma Hotel, where comfort, convenience, 
                    and warm Ethiopian hospitality meet. Located in the 
                    heart of Jimma, our hotel offers modern rooms, exquisite 
                    dining, and a peaceful atmosphere for both business and 
                    leisure travelers. Call us today to reserve your stay 
                    and experience a home-away-from-home like no other.
                    </p>
                </div>
                
                <div className="flex flex-col gap-5 py-8">
                    <h1 className="font1 text-3xl text-center">Room Features</h1>
                    <div className="flex flex-wrap gap-10 justify-center roboto">
                    {
                        images.map((img,index)=>(
                            <div className="w-30 h-30 bg-gray-200 flex gap-3 justify-center items-center hover:bg-amber-100 flex-col">
                                <img className="text-amber-500 w-10 h-10" key={index} src={img.src} />
                                <p>{img.title}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <Gallery />
        </div>
    );
}