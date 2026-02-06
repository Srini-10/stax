import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ChevronLeft, Heart, Truck, RotateCcw, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductBySlug } from '../data/products';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist } from '../store/slices/wishlistSlice';
import { formatPrice, getStarRating } from '../utils/helpers';
import toast from 'react-hot-toast';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = getProductBySlug(slug);

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        if (product && product.colors.length > 0) {
            const inStockColor = product.colors.find(c => c.inStock);
            setSelectedColor(inStockColor || product.colors[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-heading font-bold mb-4">Product not found</h2>
                    <button onClick={() => navigate('/shop/women')} className="btn-primary">
                        Back to Shop
                    </button>
                </div>
            </div>
        );
    }

    const stars = getStarRating(product.rating);
    const displayPrice = product.salePrice || product.price;

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error('Please select a size');
            return;
        }
        if (!product.sizeAvailability[selectedSize]) {
            toast.error('Selected size is out of stock');
            return;
        }

        dispatch(addToCart({
            productId: product.id,
            name: product.name,
            price: displayPrice,
            size: selectedSize,
            color: selectedColor.name,
            image: product.images[0]
        }));
        toast.success('Added to cart! 🎉');
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product));
        toast.success('Added to wishlist ❤️');
    };

    return (
        <div className="min-h-screen py-8">
            <div className="container-custom">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div>
                        {/* Main Image */}
                        <div className="aspect-[3/4] rounded-card overflow-hidden mb-4">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((image, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`aspect-square rounded-button overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-primary' : 'border-gray-200'
                                            }`}
                                    >
                                        <img src={image} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div>
                        {/* Badges */}
                        <div className="flex gap-2 mb-4">
                            {product.bestSeller && <span className="badge badge-bestseller">Best Seller</span>}
                            {product.new && <span className="badge badge-new">New</span>}
                        </div>

                        <h1 className="text-4xl font-heading font-black mb-4">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex">
                                {[...Array(stars.full)].map((_, i) => (
                                    <Star key={`full-${i}`} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                                ))}
                                {stars.half === 1 && (
                                    <Star className="w-5 h-5 fill-accent-gold text-accent-gold opacity-50" />
                                )}
                                {[...Array(stars.empty)].map((_, i) => (
                                    <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
                                ))}
                            </div>
                            <span className="text-gray-600">
                                {product.rating} ({product.reviewCount} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-4xl font-bold">{formatPrice(displayPrice)}</span>
                            {product.salePrice && (
                                <span className="text-xl text-gray-500 line-through">{formatPrice(product.price)}</span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-700 mb-8">{product.description}</p>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <p className="font-semibold mb-3">
                                Color: <span className="text-gray-600">{selectedColor?.name}</span>
                            </p>
                            <div className="flex gap-3">
                                {product.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor?.name === color.name
                                                ? 'border-primary ring-2 ring-primary ring-offset-2'
                                                : 'border-gray-300 hover:scale-110'
                                            } ${!color.inStock ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        style={{ backgroundColor: color.hex }}
                                        disabled={!color.inStock}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <p className="font-semibold">
                                    Size: {selectedSize && <span className="text-gray-600">{selectedSize}</span>}
                                </p>
                                <button className="text-sm text-accent-pink hover:underline">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {product.sizes.map((size) => {
                                    const isAvailable = product.sizeAvailability[size];
                                    const isSelected = selectedSize === size;
                                    return (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`size-block ${isSelected ? 'size-block-selected' : ''
                                                } ${!isAvailable ? 'size-block-disabled' : ''}`}
                                            disabled={!isAvailable}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Add to Cart & Wishlist */}
                        <div className="flex gap-4 mb-8">
                            <button onClick={handleAddToCart} className="btn-primary flex-1">
                                Add to Cart
                            </button>
                            <button
                                onClick={handleAddToWishlist}
                                className="p-4 border-2 border-gray-300 rounded-button hover:border-accent-pink hover:text-accent-pink transition-colors"
                                aria-label="Add to wishlist"
                            >
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Truck className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">Free Shipping</p>
                                    <p className="text-sm text-gray-600">On orders over $110</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <RotateCcw className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">30-Day Returns</p>
                                    <p className="text-sm text-gray-600">Easy returns and exchanges</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">Quality Guarantee</p>
                                    <p className="text-sm text-gray-600">Built to last through every workout</p>
                                </div>
                            </div>
                        </div>

                        {/* Fabric Info */}
                        <div className="bg-gray-50 rounded-card p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl">{product.fabric === 'NANDEX™' ? '💪' : '🌬️'}</span>
                                <h3 className="font-heading font-bold text-xl">{product.fabric}</h3>
                            </div>
                            <p className="text-sm text-gray-700 mb-4">{product.fabricDetails.composition}</p>
                            <div className="grid grid-cols-2 gap-2">
                                {product.fabricDetails.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
