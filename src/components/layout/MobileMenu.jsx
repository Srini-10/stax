import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose }) => {
    const menuItems = [
        { label: 'Women', path: '/shop/women' },
        { label: 'Men', path: '/shop/men' },
        { label: 'Fabrics', path: '/fabric/nandex' },
        { label: 'Loyalty', path: '/loyalty' },
        { label: 'VIP Access', path: '/vip-access', highlight: true },
        { label: 'Size Guide', path: '/size-guide' },
        { label: 'Wishlist', path: '/wishlist' },
        { label: 'Account', path: '/account' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                        onClick={onClose}
                    />

                    {/* Menu Drawer */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-50 lg:hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-heading font-black">Menu</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-button transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="p-6 space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={onClose}
                                    className={`block py-3 px-4 rounded-button font-medium text-lg transition-colors ${item.highlight
                                            ? 'bg-gradient-to-r from-accent-gold to-accent-cyan text-white hover:opacity-90'
                                            : 'hover:bg-gray-100 hover:text-accent-pink'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
                            <p className="text-sm text-gray-600 mb-2">Premium activewear for every body</p>
                            <p className="text-xs text-gray-500">XXS to 4XL sizing available</p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
