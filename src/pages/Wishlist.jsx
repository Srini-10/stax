import { useSelector } from 'react-redux';
import { selectWishlistItems } from '../store/slices/wishlistSlice';
import ProductCard from '../components/product/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const wishlistItems = useSelector(selectWishlistItems);

    return (
        <div className="min-h-screen py-12">
            <div className="container-custom">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 flex items-center gap-3">
                        <Heart className="w-10 h-10 text-accent-pink" />
                        Your Wishlist
                    </h1>
                    <p className="text-lg text-gray-600">
                        {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                    </p>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="text-center py-16">
                        <Heart className="w-24 h-24 mx-auto text-gray-300 mb-6" />
                        <h2 className="text-2xl font-heading font-bold mb-4">
                            Your wishlist is empty
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Start adding products you love to keep track of them
                        </p>
                        <Link to="/shop/women" className="btn-primary inline-block">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlistItems.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
