import { useProductFilters } from '../hooks/useProductFilters';
import ProductCard from '../components/product/ProductCard';

const ProductListing = () => {
    const { products, totalCount, originalCount } = useProductFilters();

    return (
        <div className="min-h-screen">
            <div className="container-custom py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
                        Women's Activewear
                    </h1>
                    <p className="text-lg text-gray-600">
                        Showing {totalCount} of {originalCount} products
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* No Products */}
                {totalCount === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600 mb-6">
                            No products found matching your criteria
                        </p>
                        <button className="btn-primary">
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductListing;
