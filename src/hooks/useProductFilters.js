import { useSelector } from 'react-redux';
import { selectFilters } from '../store/slices/filterSlice';
import { products } from '../data/products';
import { filterProducts, sortProducts } from '../utils/helpers';

export const useProductFilters = () => {
    const filters = useSelector(selectFilters);

    const filteredProducts = filterProducts(products, filters);
    const sortedProducts = sortProducts(filteredProducts, filters.sortBy);

    return {
        products: sortedProducts,
        totalCount: sortedProducts.length,
        originalCount: products.length,
        hasActiveFilters: filters.category.length > 0 ||
            filters.fabric.length > 0 ||
            filters.size.length > 0 ||
            filters.color.length > 0
    };
};
