import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getBestSellers } from '../../data/products';
import ProductCard from '../product/ProductCard';

const BestSellerCarousel = () => {
    const scrollRef = useRef(null);
    const bestSellers = getBestSellers();

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section-spacing">
            <div className="container-custom">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-2">
                            Best Sellers
                        </h2>
                        <p className="text-xl text-gray-600">
                            Customer favorites that keep selling out
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:bg-gray-50 transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:bg-gray-50 transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Product Grid */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                >
                    {bestSellers.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-72 snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellerCarousel;
