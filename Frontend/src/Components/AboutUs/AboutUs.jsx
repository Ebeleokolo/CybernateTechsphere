import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import BlueGuy from "../../assets/images/BlueGuy.svg";
import Hshake from "../../assets/images/Hshake.svg";
import Gshake from "../../assets/images/Gshake.svg";
import RoundTable from "../../assets/images/RoundTable.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Vector from "../../assets/vec/Vector.svg";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProfile, setExpandedProfile] = useState(false);
  const [expandedAboutUs, setExpandedAboutUs] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMoreProfile = () => {
    setExpandedProfile(!expandedProfile);
  };

  const toggleReadMoreAboutUs = () => {
    setExpandedAboutUs(!expandedAboutUs);
  };

  const teamMembers = [
    { name: "Nate", title: "Founder & CEO, Project Manager", img: Vector },
    {
      name: "Nzekwe, Emmanuel",
      title: "Software Development Consultant",
      img: Vector,
    },
    {
      name: "Chikadibia Blessing, Nwachukwu",
      title: "Business Intelligence & Data Analyst",
      img: Vector,
    },
    {
      name: "Ebele Lynda, Okolo",
      title: "Software Engineer & Client Assistance",
      img: Vector,
    },
    { name: "Max Kenneth, Layefa", title: "Software Engineer", img: Vector },
    { name: "Awele Tonia, Uzu", title: "Executive Marketer", img: Vector },
    {
      name: "Akinsanmi-Akinnuwesi, Martins",
      title: "Lead UI & UX Designer",
      img: Vector,
    },
    {
      name: "Benjamin Chibundu, Nwokoye-Obiajulu",
      title: "Monitoring & Evaluation",
      img: Vector,
    },
    {
      name: "Desmond Isama, ",
      title: "Software Engineer",
      img: Vector,
    },
  ];

  return (
    <div className="flex flex-col  min-h-screen  ">
      <div className=" w-[800px]  self-center">
        <h2 className="title">CYBERNATE TECHSPHERE PROFILE</h2>
        <p className={`ctcontent ${expandedProfile ? "expanded" : ""}`}>
          Welcome to Cybernate Techsphere, the pinnacle of innovation where
          technology converges with brilliance. We take pride in transcending
          the traditional role of a technology company, boasting dynamic teams
          of experts across diverse domains. Our visionary architects of
          progress and creators of cutting-edge solutions collaborate
          seamlessly, infusing each project with unparalleled expertise and
          passion.
          <br />
          <br />
          At Cybernate Techsphere, our commitment to excellence knows no bounds.
          We navigate the ever-evolving technology landscape, consistently
          pushing boundaries. We stand as partners in your digital journey,
          offering breakthrough solutions that surpass traditional expectations.
          Our multifaceted teams, equipped with major certifications such as
          Google Project Management, IT consulting, IT Management, Google Data
          Analyst, Certified Developers, Database Administration, Marketing
          Executive, DevOps, Networking, and Cyber Security, bring years of
          experience across various domains. With proven track records of
          success, we possess a profound understanding of diverse fields,
          ensuring a sophisticated and well-rounded approach to every challenge.
          <br />
          <br />
          With a forward-thinking mindset, we elevate businesses by implementing
          transformative technologies that effortlessly bridge the gap between
          visions and realities. Discover the essence of innovation,
          collaboration, and success at Cybernate Techsphere, where our
          certified experts redefine industry standards, propelling your
          business towards a future of unparalleled achievements. Unleash the
          power of possibilities with us - where sophistication meets ingenuity,
          and the future unfolds with every endeavor.
        </p>
        {isMobile && (
          <button className="read-more-btn" onClick={toggleReadMoreProfile}>
            {expandedProfile ? "Read Less..." : "Read More..."}
          </button>
        )}
      </div>
      {/* AboutUs Section */}
      <div className="about-us flex flex-col mt-5 border-4 w-100% rounded bg-gray-slategrey">
        <h2 className="title">WHY CHOOSE CYBERNATE TECHSPHERE?</h2>
        <blockquote className="quote flex self-center w-[50%]">
          “Our aim is to deliver top-notch technology solutions to our
          customers, ensuring their utmost satisfaction, and building trusted
          partnerships.”
        </blockquote>
        <img
          src={RoundTable}
          alt="Round Table Meeting"
          className="round-table-img"
        />
        <p className="w-[800px] self-center">
          Because we thrive on challenges and excel in turning them into
          opportunities. Our team of dynamic experts possesses a relentless
          passion for innovation, coupled with unrivaled technical prowess,
          ensuring that every project we undertake is met with excellence and
          ingenuity.
          <br />
          <br />
          At Cybernate Techsphere, we are driven by a singular mission: to
          empower businesses with transformative technology solutions that
          propel them towards success in an ever-evolving digital landscape. Our
          commitment to innovation is not just a buzzword - it's ingrained in
          our DNA, fueling our drive to push boundaries and pioneer
          groundbreaking solutions. But our dedication doesn’t stop at
          delivering exceptional solutions. We understand that true success lies
          in building genuine partnerships with our clients. That's why we take
          the time to truly understand their unique needs and aspirations,
          tailoring bespoke solutions that exceed expectations and drive
          tangible results.
          <br />
          <br />
          With a client-centric approach and a relentless focus on long-term
          success, we strive to be more than just a technology vendor - we aim
          to be your trusted strategic partner every step of the way. Our values
          of integrity, transparency, and accountability guide everything we do,
          ensuring that our partnerships are built on a foundation of trust and
          mutual respect.
          <br />
          <br />
          Discover the difference with Cybernate Techsphere - where creativity
          meets expertise, and where your vision becomes reality. Join us on a
          journey of innovation and growth, and let's shape the future together.
        </p>
        {isMobile && (
          <button className="read-more-btn" onClick={toggleReadMoreAboutUs}>
            {expandedAboutUs ? "Read Less..." : "Read More..."}
          </button>
        )}

        <div className="services-section mt-5 flex space-x-4 p-4">
          <div className="sev-item relative flex-1">
            <img src={BlueGuy} alt="IT Services" className="w-full h-auto" />
            <button className="absolute bottom-0 right-0 m-2 bg-white p-2 rounded text-blue-500">
              IT Services →
            </button>
          </div>
          <div className="sev-item relative flex-1">
            <img src={Hshake} alt="IT Consultancy" className="w-full h-auto" />
            <button className="absolute bottom-0 right-0 m-2 bg-white p-2 rounded text-blue-500">
              IT Consultancy →
            </button>
          </div>
          <div className="sev-item relative flex-1 ">
            <img
              src={Gshake}
              alt="Project Management"
              className="w-full h-auto"
            />
            <button className="absolute bottom-0 right-0 m-2 bg-white p-2 rounded text-blue-500">
              Project Management →
            </button>
          </div>
        </div>
      </div>
      {/* Services Section */}
      {/* Team Section */}
      <div className="team-section flex flex-col">
        <h2 className="team-title flex self-center mt-5 text-mainblue font-poppins font-700 text-31px tracking-[0.01em]">
          CYBERNATE TECHSPHERE TEAM
        </h2>
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4   p-4">
          {teamMembers.map((member, index) => (
            <div
              className="team-member flex flex-col items-center text-center bg-gray-greyish border border-gray-300 rounded-lg p-4 relative h-[180px]"
              key={index}
            >
              <img
                src={member.img}
                alt={member.name}
                className="team-img mb-4"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <div className="team-icons flex justify-center items-center space-x-2 mt-2  absolute  bottom-2 left-2 p-2  rounded">
                <img src={linkedin} />
                <img src={twitter} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
