import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, User, Search, Menu, Heart } from 'lucide-react';
import { selectCartItemCount } from '../../store/slices/cartSlice';
import { selectWishlistItems } from '../../store/slices/wishlistSlice';
import { promotionBanners } from '../../data/promotions';

const StickyHeader = ({ onCartOpen, onMenuToggle }) => {
    const [scrolled, setScrolled] = useState(false);
    const [currentBanner, setCurrentBanner] = useState(0);
    const [searchOpen, setSearchOpen] = useState(false);
    const cartItemCount = useSelector(selectCartItemCount);
    const wishlistItems = useSelector(selectWishlistItems);
    const navigate = useNavigate();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-rotate promotion banners
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % promotionBanners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const banner = promotionBanners[currentBanner];

    return (
        <header className="sticky top-0 z-50">
            {/* Promotion Banner */}
            <div
                className="text-center py-2 px-4 text-sm font-medium transition-colors duration-300"
                style={{ backgroundColor: banner.backgroundColor, color: banner.textColor }}
            >
                {banner.text}
            </div>

            {/* Main Header */}
            <div
                className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between py-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={onMenuToggle}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-button"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tight">
                                STAX
                            </h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link to="/shop/women" className="font-medium hover:text-accent-pink transition-colors">
                                Women
                            </Link>
                            <Link to="/shop/men" className="font-medium hover:text-accent-pink transition-colors">
                                Men
                            </Link>
                            <Link to="/fabric/nandex" className="font-medium hover:text-accent-pink transition-colors">
                                Fabrics
                            </Link>
                            <Link to="/loyalty" className="font-medium hover:text-accent-pink transition-colors">
                                Loyalty
                            </Link>
                            <Link to="/vip-access" className="font-medium hover:text-accent-pink transition-colors text-accent-gold">
                                VIP Access
                            </Link>
                        </nav>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <button
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="p-2 hover:bg-gray-100 rounded-button transition-colors"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Wishlist */}
                            <Link
                                to="/wishlist"
                                className="relative p-2 hover:bg-gray-100 rounded-button transition-colors"
                                aria-label="Wishlist"
                            >
                                <Heart className="w-5 h-5" />
                                {wishlistItems.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {wishlistItems.length}
                                    </span>
                                )}
                            </Link>

                            {/* Account */}
                            <Link
                                to="/account"
                                className="hidden md:block p-2 hover:bg-gray-100 rounded-button transition-colors"
                                aria-label="Account"
                            >
                                <User className="w-5 h-5" />
                            </Link>

                            {/* Cart */}
                            <button
                                onClick={onCartOpen}
                                className="relative p-2 hover:bg-gray-100 rounded-button transition-colors"
                                aria-label="Shopping cart"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-subtle">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Search Bar (Expanded) */}
                    {searchOpen && (
                        <div className="pb-4 animate-fade-in">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="input-field"
                                autoFocus
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default StickyHeader;
