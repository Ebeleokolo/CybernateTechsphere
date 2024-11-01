import React, { useState } from "react";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import messagesent from "../../assets/images/sentimage.svg";
import cyberccimg from "../../assets/images/cybercccimg.svg";
import wwwebimage from "../../assets/images/wwwebimage.svg";
import cybernateimage from "../../assets/images/cybernateimage.svg";
import time from "../../assets/images/time.svg";
import phonelogo from "../../assets/images/phonelogo.svg";
import emailLogo from "../../assets/images/emaillogo.svg";
import location from "../../assets/images/location.svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter an email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#22346E1A]">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src={cybernateimage} 
              alt="Cybernate Logo" 
              className="h-12"
            />
            <p className="text-gray-600 leading-relaxed">
              Elevate your possibilities with Cybernate Techsphere. At the
              forefront of innovation, we blend expertise and passion to deliver
              cutting-edge solutions tailored to your needs. Explore the essence
              of success and partnership with us- where excellence meets
              ingenuity, shaping a future of endless possibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Solutions:</h3>
            <ul className="space-y-3">
              {[
                "IT Consulting",
                "IT Project Management",
                "Mobile App and Software Development",
                "IT Training and Support",
                "Cybersecurity and Networking Solutions",
                "Managed IT Services",
                "Data Analytics and Business Intelligence",
                "Artificial Intelligence (AI) and Machine Learning (ML)",
              ].map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <span className="text-blue-600">&gt;</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <img src={time} alt="Hours" className="w-5 h-5" />
                <span className="text-gray-600">Opening Hours: 9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src={phonelogo} alt="Phone" className="w-5 h-5" />
                <span className="text-gray-600">Phone: +234 (0) 706 252 5790</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src={emailLogo} alt="Email" className="w-5 h-5" />
                <span className="text-gray-600">Email: hello@cybernatetechsphere.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src={location} alt="Location" className="w-5 h-5" />
                <span className="text-gray-600">Consultation Space: Uyo, Akwa Ibom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 mt-2">
              Join our subscriber list for the latest in technology-related news and updates.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="space-y-4 max-w-md">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#22346E] text-white px-6 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-[#1a2854] transition-colors disabled:opacity-50"
            >
              <span>{isSubmitting ? "Subscribing..." : "Subscribe Now"}</span>
              <img src={messagesent} alt="" className="h-5 w-5" />
            </button>
            {message && (
              <p className={`text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        {/* First Separator Line */}
        <div className="w-full border-t border-gray-300 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={wwwebimage} alt="Web" className="h-6" />
            <div className="text-sm text-gray-600 space-x-4">
              <span>English (Nigeria)</span>
              <span>Privacy Policy</span>
              <span>Cookie policy</span>
              <span>Terms of Use</span>
            </div>
          </div>
          <img src={cyberccimg} alt="Copyright" className="h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;