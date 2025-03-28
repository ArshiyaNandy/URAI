import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* App Info */}
        <div className="text-center md:text-left">
          <span className="text-white text-3xl font-bold">
            <span className="text-blue-500">UR</span>
            <span className="text-gray-400">AI</span>
          </span>
          <p className="text-sm mt-2">Your ultimate AI-powered assistant for all your needs.</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-400" />
            <span>Contact:(+91)9903259957</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-400" />
            <span>email:arshiyanandy1731@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-400" />
            <span> Thank You!</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Contributors Section */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <h4 className="text-sm font-semibold">Developed by:</h4>
        <div className="flex justify-center space-x-2">
          <span className="text-sm">Arshiya Nandy</span>
          <span className="text-sm">& Team</span>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-sm border-t border-gray-700 pt-4">
        © 2025 UR AI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
