import Image from "next/image";
import React from "react";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";

const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col justify-between lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-0"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image
              src={phone}
              alt="phone"
              className="h-[100px] w-[100px] mr-6"
            />
            <p className="text-xl">0907532754</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[100px] w-[100px] mr-6" />
            <p className="text-xl">quidev2505@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4 ">
          Let's connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and let's schedule a call
        </p>
        <form
          className="space-y-4"
          action="https://getform.io/f/bvregzqb"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 "
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 "
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 "
              placeholder="Email"
              required
            />
            <input
              type="phone"
              name="phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 "
              placeholder="Phone"
              required
            />
          </div>
          <textarea
            name="message"
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="bg-orange-700 hover:bg-orange-500 text-white px-6 pv-2 w-full font-semibold text-xl rounded-lg h-[40px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
