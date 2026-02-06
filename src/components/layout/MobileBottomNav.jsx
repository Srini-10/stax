import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../store/slices/cartSlice';

const MobileBottomNav = ({ onCartOpen }) => {
    const location = useLocation();
    const cartItemCount = useSelector(selectCartItemCount);

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: ShoppingBag, label: 'Shop', path: '/shop/women' },
        { icon: ShoppingCart, label: 'Cart', action: 'cart' },
        { icon: User, label: 'Account', path: '/account' }
    ];

    const handleClick = (item) => {
        if (item.action === 'cart') {
            onCartOpen();
        }
    };

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 no-print">
            <div className="flex items-center justify-around py-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = item.path && isActive(item.path);

                    if (item.action === 'cart') {
                        return (
                            <button
                                key={item.label}
                                onClick={() => handleClick(item)}
                                className="flex flex-col items-center py-2 px-4 relative"
                            >
                                <Icon
                                    className={`w-6 h-6 ${active ? 'text-accent-pink' : 'text-gray-600'}`}
                                />
                                <span className={`text-xs mt-1 ${active ? 'text-accent-pink font-semibold' : 'text-gray-600'}`}>
                                    {item.label}
                                </span>
                                {cartItemCount > 0 && (
                                    <span className="absolute top-0 right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="flex flex-col items-center py-2 px-4"
                        >
                            <Icon
                                className={`w-6 h-6 transition-colors ${active ? 'text-accent-pink' : 'text-gray-600'}`}
                            />
                            <span className={`text-xs mt-1 transition-colors ${active ? 'text-accent-pink font-semibold' : 'text-gray-600'}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileBottomNav;
