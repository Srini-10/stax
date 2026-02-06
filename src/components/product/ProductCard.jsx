import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Heart, Star, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { addToCart } from '../../store/slices/cartSlice';
import { addToWishlist } from '../../store/slices/wishlistSlice';
import { formatPrice, calculateDiscount, getStarRating } from '../../utils/helpers';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
    const [hoveredColor, setHoveredColor] = useState(null);
    const [showSizeSelector, setShowSizeSelector] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const dispatch = useDispatch();

    const displayPrice = product.salePrice || product.price;
    const discount = calculateDiscount(product.price, product.salePrice);
    const stars = getStarRating(product.rating);

    const handleQuickAdd = (size) => {
        const color = product.colors.find(c => c.inStock);
        dispatch(addToCart({
            productId: product.id,
            name: product.name,
            price: displayPrice,
            size,
            color: color.name,
            image: product.images[0]
        }));
        toast.success(`Added ${product.name} to cart!`);
        setShowSizeSelector(false);
        setSelectedSize(null);
    };

    const handleWishlist = () => {
        dispatch(addToWishlist(product));
        toast.success('Added to wishlist ❤️');
    };

    return (
        <motion.div
            className="group relative card hover-lift"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image */}
            <Link to={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-900">
                <img
                    src={hoveredColor || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/800x1000/000000/FFFFFF?text=${encodeURIComponent(product.name)}`;
                    }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.bestSeller && (
                        <span className="badge badge-bestseller">Best Seller</span>
                    )}
                    {product.new && (
                        <span className="badge badge-new">New</span>
                    )}
                    {discount > 0 && (
                        <span className="badge badge-sale">-{discount}%</span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleWishlist();
                    }}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-pink hover:text-white"
                    aria-label="Add to wishlist"
                >
                    <Heart className="w-5 h-5" />
                </button>

                {/* Quick Add Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setShowSizeSelector(true);
                    }}
                    className="absolute bottom-3 left-3 right-3 btn-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Quick Add
                </button>
            </Link>

            {/* Size Selector Overlay */}
            {showSizeSelector && (
                <div className="absolute inset-0 bg-white bg-opacity-95 p-4 flex flex-col justify-center items-center z-10 animate-fade-in">
                    <p className="font-semibold mb-3">Select Size</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {product.sizes.slice(0, 9).map((size) => {
                            const isAvailable = product.sizeAvailability[size];
                            return (
                                <button
                                    key={size}
                                    onClick={() => {
                                        if (isAvailable) {
                                            handleQuickAdd(size);
                                        }
                                    }}
                                    className={`size-block text-sm ${!isAvailable ? 'size-block-disabled' : ''
                                        }`}
                                    disabled={!isAvailable}
                                >
                                    {size}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        onClick={() => setShowSizeSelector(false)}
                        className="text-sm text-gray-600 hover:text-black"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Product Info */}
            <div className="p-4">
                <Link to={`/product/${product.slug}`}>
                    <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2 hover:text-accent-pink transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Color Swatches */}
                <div className="flex gap-2 mb-3">
                    {product.colors.slice(0, 5).map((color) => (
                        <button
                            key={color.name}
                            onMouseEnter={() => setHoveredColor(product.images[0])}
                            onMouseLeave={() => setHoveredColor(null)}
                            className="w-6 h-6 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            aria-label={`${color.name} color`}
                        />
                    ))}
                    {product.colors.length > 5 && (
                        <span className="text-xs text-gray-600 self-center">+{product.colors.length - 5}</span>
                    )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                        {[...Array(stars.full)].map((_, i) => (
                            <Star key={`full-${i}`} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                        ))}
                        {stars.half === 1 && (
                            <Star className="w-4 h-4 fill-accent-gold text-accent-gold opacity-50" />
                        )}
                        {[...Array(stars.empty)].map((_, i) => (
                            <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{formatPrice(displayPrice)}</span>
                    {product.salePrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
                    )}
                </div>

                {/* Fabric Badge */}
                <div className="mt-2">
                    <span className="text-xs font-semibold text-accent-cyan">{product.fabric}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
