import React from "react";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import messagesent from "../../assets/images/sentimage.svg";
import cyberccimg from "../../assets/images/cybercccimg.svg";
import wwwebimage from "../../assets/images/wwwebimage.svg";
import cybernateimage from "../../assets/images/cybernateimage.svg";
import time from "../../assets/images/time.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center bg-[#22346E1A]">
      <div className="flex flex-col w-[90%] mt-10 space-y-8">
        <div className="flex justify-between">
          {/* Company Info Section */}
          <div className="w-[30%] flex flex-col space-y-4">
            <div className="flex justify-start">
              <img src={cybernateimage} alt="Cybernate Logo" className="h-10" />
            </div>
            <p className="text-sm leading-relaxed">
              Elevate your possibilities with Cybernate Techsphere. At the
              forefront of innovation, we blend expertise and passion to deliver
              cutting-edge solutions tailored to your needs. Explore the essence
              of success and partnership with us- where excellence meets
              ingenuity, shaping a future of endless possibilities.
            </p>
            <div className="flex space-x-4">
              <img src={linkedin} className="h-6 w-6" alt="LinkedIn" />
              <img src={twitter} className="h-6 w-6" alt="Twitter" />
            </div>
          </div>

          {/* Solutions Section */}
          <div className="w-[30%] flex flex-col">
            <h3 className="font-bold text-xl mb-4">Solutions:</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>IT Consulting</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>IT Project Management</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>Mobile App and Software Development</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>IT Training and Support</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>Cybersecurity and Networking Solutions</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>Managed IT Services</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>Data Analytics and Business Intelligence</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{">"}</span>
                <span>Artificial Intelligence (AI) and Machine Learning (ML)</span>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="w-[30%] flex flex-col">
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span>Opening Hours: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center">
                <span>Phone: +234 (0) 706 252 5790</span>
              </div>
              <div className="flex items-center">
                <span>Email: hello@cybernatetechsphere.com</span>
              </div>
              <div className="flex items-center">
                <span>Consultation Space: Uyo, Akwa Ibom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p>Join our subscriber list for the latest in technology-related news and updates.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 w-80 border border-gray-300 rounded-md"
            />
            <button className="bg-[#22346E] text-white px-4 py-2 flex items-center space-x-2 rounded-md w-80">
              <span>Subscribe Now</span>
              <img src={messagesent} alt="Send" className="h-5" />
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex justify-between items-center pb-6">
          <div className="flex items-center space-x-4">
            <img src={wwwebimage} alt="Web" className="h-6" />
            <span className="text-sm">
              English (Nigeria) Privacy Policy Cookie policy Terms of Use
            </span>
          </div>
          <img src={cyberccimg} alt="Copyright" className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default Footer;