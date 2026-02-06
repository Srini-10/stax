import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { X, Plus, Minus, ShoppingBag, Gift } from 'lucide-react';
import { selectCartItems, selectCartTotal, removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { useCartProgress } from '../../hooks/useCartProgress';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const { progress, message, status } = useCartProgress();

    const handleUpdateQuantity = (id, currentQty, delta) => {
        const newQty = currentQty + delta;
        if (newQty > 0) {
            dispatch(updateQuantity({ id, quantity: newQty }));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div className="overlay" onClick={onClose} />

            {/* Drawer */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-white shadow-2xl z-50 flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                        <ShoppingBag className="w-6 h-6" />
                        Your Cart ({cartItems.length})
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close cart"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Progress Bar */}
                {cartTotal > 0 && (
                    <div className="px-6 py-4 bg-gray-50 border-b">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span className="font-medium">{message}</span>
                            {status === 'premium' && <Gift className="w-5 h-5 text-accent-gold" />}
                            {status === 'gift' && <Gift className="w-5 h-5 text-accent-pink" />}
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-accent-pink to-accent-cyan h-full transition-all duration-500 rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                            <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
                            <button onClick={onClose} className="btn-primary">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 pb-4 border-b">
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-32 object-cover rounded-button flex-shrink-0"
                                    />

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {item.color} / {item.size}
                                        </p>
                                        <p className="font-bold text-lg mb-3">
                                            {formatPrice(item.price * item.quantity)}
                                        </p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 bg-gray-100 rounded-button">
                                                <button
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                                                    className="p-2 hover:bg-gray-200 rounded-l-button transition-colors"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="px-3 font-semibold">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                                                    className="p-2 hover:bg-gray-200 rounded-r-button transition-colors"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="text-sm text-error hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold">Subtotal</span>
                            <span className="text-2xl font-bold">{formatPrice(cartTotal)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Shipping and taxes calculated at checkout
                        </p>
                        <Link to="/checkout" onClick={onClose} className="btn-primary w-full block text-center mb-2">
                            Checkout
                        </Link>
                        <button onClick={onClose} className="btn-outline w-full">
                            Continue Shopping
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default CartDrawer;
