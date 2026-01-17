import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from "sweetalert";

export default function Contact(){
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_5jjw59f', 'template_egu178q', form.current, {
      publicKey: 'OvTJYe6mrwOs-mr0Z',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        swal({
          title: "Message Sent",
          text: "Message received by Bashaashaa. We’ll reply soon.",
          icon: "success",
          button: "OK",
        });
        form.current.reset(); // clear form after success
      },
      (error) => {
        console.log('FAILED...', error.text);
        swal({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          button: "Close",
        });
      },
    );
};

    return(
        <div className="flex flex-col py-12">
            <h1 data-aos="fade-down" data-aos-once="false" className="font1 text-4xl text-amber-300 pb-2 w-50 border-b-2 border-amber-300 mx-30">Contact Us</h1>
            <div data-aos="zoom-in" data-aos-once="false" className="w-full h-50 my-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d710.5073778501094!2d36.834136699999995!3d7.6693838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17adb987f9bef50d%3A0x2a436dd6080a0f45!2sBashaashaa%20Studio!5e1!3m2!1sen!2set!4v1757842724085!5m2!1sen!2set" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    data-aos="zoom-in"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Awetu Grand Hotel" 
                    className="w-full"
                ></iframe>
            </div>
            <div className="px-10 md:px-30  flex justify-center items-center">
                <form data-aos="zoom-in" data-aos-once="false" ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 pborder-2 flex flex-col gap-5 justify-center items-center">
                    <input
                        className="w-full border-2 px-4 py-2 border-gray-500 hover:border-amber-300"
                        type="text"
                        name="user_name"
                        placeholder="Username"
                    />

                    <input
                        className="w-full border-2 px-4 py-2 border-gray-500 hover:border-amber-300"
                        type="email"
                        name="user_email"
                        placeholder="Email"
                    />

                    <textarea 
                        className="w-full border-2 h-40 px-4 py-2 border-gray-500 hover:border-amber-300"
                        name="message"
                        placeholder="Message"
                    />

                    <button data-aos="fade-up" data-aos-once="false" className="bg-amber-300 border-2 border-amber-300 text-white w-30 px-3 py-1 cursor-pointer hover:bg-white hover:text-amber-300" type="submit" value="Send">Submit</button>
                </form>
            </div>
        </div>
    )
}