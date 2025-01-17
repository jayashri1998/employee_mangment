import React from 'react';

const Footer = () => {
  return (
    <footer className=" w-screen bg-[#F3F4F6] text-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm text-black">
              Employee Management System is designed to streamline HR and
              employee-related processes efficiently.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm text-black hover:text-white transition"
                >
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm text-black hover:text-white transition"
                >
                  Employees
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="text-sm text-black">
              <li>Email: support@company.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Employee Management System. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
