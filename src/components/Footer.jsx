import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-top-2 text-white px-8 py-10">
      <div className="max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-y py-4 px-8 border-gray-700 pb-8">
        {/* Consumer Policy */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-4">CONSUMER POLICY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Cancellation and Returns</a></li>
            <li><a href="#" className="hover:underline">Terms of use</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Payments</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-4">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Icons */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-4">NEWSLETTER</h3>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 mb-4 bg-gray-700 border border-gray-700 text-sm text-white focus:outline-none"
          />
          <h4 className="text-gray-400 font-semibold mb-2">KEEP IN TOUCH</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-600 hover:bg-gray-700 rounded"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-600 hover:bg-gray-700 rounded"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-600 hover:bg-gray-700 rounded"><FaYoutube /></a>
            <a href="#" className="p-2 bg-gray-600 hover:bg-gray-700 rounded"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025 CustomFurnish.com | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
