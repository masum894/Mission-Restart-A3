import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-gray-300 py-12 mt-auto border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-3xl font-black text-[#7C3AED] tracking-tight">
                            HERO IO
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Empowering your digital lifestyle with the most innovative and essential web applications. Your one-stop destination for quality apps.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="hover:text-[#7C3AED] transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/apps" className="hover:text-[#7C3AED] transition-colors duration-300">All Apps</Link>
                            </li>
                            <li>
                                <Link to="/installation" className="hover:text-[#7C3AED] transition-colors duration-300">My Installations</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Contact Section */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Stay Connected</h3>
                        <div className="flex justify-center md:justify-start gap-5 mb-6">
                            <a href="https://github.com" target="_blank" rel="noreferrer" 
                               className="p-3 bg-[#262626] rounded-full hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
                               className="p-3 bg-[#262626] rounded-full hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" 
                               className="p-3 bg-[#262626] rounded-full hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" 
                               className="p-3 bg-[#262626] rounded-full hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg">
                                <FaFacebookF size={18} />
                            </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
                            <FaEnvelope className="text-[#7C3AED]" />
                            <span>support@heroio.com</span>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>Copyright © 2026 - All right reserved by <span className="text-[#7C3AED] font-bold">HERO IO</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;