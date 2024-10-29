import React, { useState } from "react";
import faqimg from "../../assets/images/faqimage.svg";
import angledropdown from "../../assets/images/angledropdown.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Cybernate provide?",
      answer:
        "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.",
    },
    {
      question: "In which industries does Cybernate specialize?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "What is Cybernate's approach to project management?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question:
        "Can Cybernate Techsphere handle both small and large-scale projects?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "Are Cybernate's services scalable for growing businesses?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "How does Cybernate handle client feedback and concerns?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "What sets our cloud computing services apart?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "Do you provide training for your solutions?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "What is your response time for IT support issues?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
    {
      question: "How can I contact the support team?",
      answer:
        "Shipping times vary depending on your location, but you can expect your order within 5-10 business days.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container flex items-center justify-center h-screen">
      <div className="flex w-[80%] h-[80%] items-center justify-center">
        <div className="faq-questions w-[50%] h-full flex flex-col justify-between">
          <div className="text-mainblue font-700 text-[32px] ">FAQ</div>
          <div className="font-500 text-[24px]">Questions frequently asked</div>
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <div
                className="faq-question flex justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <button className="toggle-button">
                  <img src={angledropdown} className="w-[25px] h-[15px " />
                </button>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
              <hr />
            </div>
          ))}
        </div>
        <div className="faq-image w-[50%] h-full">
          <div className="h-full w-full flex items-center justify-center">
            <img src={faqimg} className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
