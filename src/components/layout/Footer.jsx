import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import toast from 'react-hot-toast';
import { isValidEmail } from '../../utils/helpers';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleVIPSignup = (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            toast.error('Please enter a valid email address');
            return;
        }
        toast.success('Welcome to VIP! Check your email for exclusive benefits 🎉');
        setEmail('');
    };

    return (
        <footer className="bg-black text-white mt-16">
            {/* Size Inclusivity Banner */}
            <div className="bg-gradient-to-r from-accent-pink to-accent-cyan py-8">
                <div className="container-custom text-center">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                        XXS to 4XL - Every Body Belongs Here
                    </h3>
                    <p className="text-white text-lg">
                        Inclusive sizing designed for real athletes, real bodies
                    </p>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h4 className="font-heading font-bold text-xl mb-4">About STAX</h4>
                        <p className="text-gray-300 mb-4">
                            Premium activewear engineered for performance and designed for inclusivity. Every body deserves to feel unstoppable.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent-pink transition-colors" aria-label="Instagram">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-accent-cyan transition-colors" aria-label="Facebook">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-accent-pink transition-colors" aria-label="Twitter">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-accent-cyan transition-colors" aria-label="YouTube">
                                <Youtube className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-heading font-bold text-xl mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><Link to="/shop/women" className="text-gray-300 hover:text-white transition-colors">Women</Link></li>
                            <li><Link to="/shop/men" className="text-gray-300 hover:text-white transition-colors">Men</Link></li>
                            <li><Link to="/collections/best-sellers" className="text-gray-300 hover:text-white transition-colors">Best Sellers</Link></li>
                            <li><Link to="/collections/new" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link to="/collections/sale" className="text-gray-300 hover:text-white transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="font-heading font-bold text-xl mb-4">Help</h4>
                        <ul className="space-y-2">
                            <li><Link to="/size-guide" className="text-gray-300 hover:text-white transition-colors">Size Guide</Link></li>
                            <li><Link to="/fabric" className="text-gray-300 hover:text-white transition-colors">Fabric Technology</Link></li>
                            <li><Link to="/loyalty" className="text-gray-300 hover:text-white transition-colors">Loyalty Program</Link></li>
                            <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* VIP Signup */}
                    <div>
                        <h4 className="font-heading font-bold text-xl mb-4 text-accent-gold">VIP Access</h4>
                        <p className="text-gray-300 mb-4">
                            Get early access to sales, exclusive products, and special offers
                        </p>
                        <form onSubmit={handleVIPSignup}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-button bg-white text-black mb-2 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                            />
                            <button type="submit" className="w-full btn-secondary">
                                Join VIP
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2026 STAX Activewear. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                            <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
