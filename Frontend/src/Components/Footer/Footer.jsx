import React from "react";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import messagesent from "../../assets/images/sentimage.svg";
import cyberccimg from "../../assets/images/cybercccimg.svg";
import wwwebimage from "../../assets/images/wwwebimage.svg";

import cybernateimage from "../../assets/images/cybernateimage.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col gap-4 w-[90%]  mt-10">
        <div className="flex gap-4 ">
          <div className="w-[30%] mt-3 gap-3 flex flex-col">
            <div className="flex justify-center">
              <img src={cybernateimage} className="h-auto w-auto" />
            </div>
            <span>
              Elevate your possibilities with Cybernate Techsphere. At the
              forefront of innovation, we blend expertise and passion to deliver
              cutting-edge solutions tailored to your needs. Explore the essence
              of success and partnership with us- where excellence meets
              ingenuity, shaping a future of endless possibilities.
            </span>

            <div className="flex">
              <img src={linkedin} className="linkedin" />
              <img src={twitter} className="twitter" />
            </div>
          </div>

          <div className=" flex flex-col w-[30%] mt-10">
            <div className="font-bold text-xl">Solutions:</div>
            <div className="space-y-2">
              <div> {">"} IT Consulting</div>
              <div> {">"} IT Project Management</div>
              <div> {">"} Mobile App and Software Development</div>
              <div> {">"} IT Training and Support</div>
              <div> {">"} Cybersecurity and Networking Solutions</div>
              <div> {">"} Managed IT Services</div>
              <div> {">"} Data Analytics and Business Intelligence</div>
              <div>
                {" "}
                {">"} Artificial Intelligence (AI) and Machine Learning (ML)
              </div>
            </div>
          </div>

          <div className="flex flex-col  mt-10 w-[30%]">
            <div className="font-bold text-xl">Contact Info</div>
            <div className="space-y-2">
              <div>Opening Hours: 9:00 AM - 4:00 PM</div>
              <div>Phone: +234 (0) 706 252 5790</div>
              <div>Email: hello@cybernatetechsphere.com</div>
              <div>Consultation Space: Uyo, Akwa Ibom</div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg">
          <div className="text-start mb-4">
            <h2 className="text-2xl font-bold mb-2">
              Subscribe to our Newsletter
            </h2>
            <p>
              Join our subscriber list for the latest in technology-related news
              and updates.
            </p>
          </div>
          <div className="flex justify-start mb-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 w-80 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-start">
            <button className=" text-white px-4 py-2 flex gap-3 rounded-md bg-navyblue w-80">
              <span>Subscribe Now</span>
              <img src={messagesent} />
            </button>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300" />

        <div className="flex items-start justify-around">
          <div className=" flex justify-around g-5 items-start">
            <img src={wwwebimage} />
            <span>
              English (Nigeria) Privacy Policy Cookie policy Terms of Use
            </span>
          </div>
          <img src={cyberccimg} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
