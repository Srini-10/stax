// Format price to currency
export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, salePrice) => {
    if (!salePrice) return 0;
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

// Get stock status text
export const getStockStatus = (sizeAvailability, size) => {
    if (!sizeAvailability || !size) return { status: 'unknown', text: 'Select a size' };

    const isAvailable = sizeAvailability[size];
    if (isAvailable) {
        return { status: 'in-stock', text: 'In Stock', color: 'text-success' };
    } else {
        return { status: 'out-of-stock', text: 'Out of Stock', color: 'text-error' };
    }
};

// Count available sizes
export const countAvailableSizes = (sizeAvailability) => {
    if (!sizeAvailability) return 0;
    return Object.values(sizeAvailability).filter(Boolean).length;
};

// Calculate gift threshold progress
export const calculateGiftProgress = (cartTotal, threshold) => {
    return Math.min((cartTotal / threshold) * 100, 100);
};

// Get gift threshold status
export const getGiftThresholdStatus = (cartTotal, thresholds) => {
    if (cartTotal >= thresholds.premiumGift) {
        return {
            status: 'premium',
            message: 'Premium gift unlocked! 🎁',
            progress: 100,
            nextThreshold: null,
            remaining: 0
        };
    } else if (cartTotal >= thresholds.freeGift) {
        return {
            status: 'gift',
            message: 'Free gift unlocked! 🎁',
            progress: calculateGiftProgress(cartTotal, thresholds.premiumGift),
            nextThreshold: thresholds.premiumGift,
            remaining: thresholds.premiumGift - cartTotal
        };
    } else if (cartTotal >= thresholds.freeShipping) {
        return {
            status: 'shipping',
            message: 'Free shipping unlocked! 🚚',
            progress: calculateGiftProgress(cartTotal, thresholds.freeGift),
            nextThreshold: thresholds.freeGift,
            remaining: thresholds.freeGift - cartTotal
        };
    } else {
        return {
            status: 'none',
            message: `$${(thresholds.freeShipping - cartTotal).toFixed(2)} away from free shipping`,
            progress: calculateGiftProgress(cartTotal, thresholds.freeShipping),
            nextThreshold: thresholds.freeShipping,
            remaining: thresholds.freeShipping - cartTotal
        };
    }
};

// Filter and sort products
export const filterProducts = (products, filters) => {
    let filtered = [...products];

    // Filter by category
    if (filters.category && filters.category.length > 0) {
        filtered = filtered.filter(p => filters.category.includes(p.category));
    }

    // Filter by fabric
    if (filters.fabric && filters.fabric.length > 0) {
        filtered = filtered.filter(p => filters.fabric.includes(p.fabric));
    }

    // Filter by size (check if any selected size is available)
    if (filters.size && filters.size.length > 0) {
        filtered = filtered.filter(p =>
            filters.size.some(size => p.sizeAvailability[size])
        );
    }

    // Filter by color
    if (filters.color && filters.color.length > 0) {
        filtered = filtered.filter(p =>
            p.colors.some(c => filters.color.includes(c.name))
        );
    }

    // Filter by price range
    if (filters.priceRange) {
        filtered = filtered.filter(p => {
            const price = p.salePrice || p.price;
            return price >= filters.priceRange[0] && price <= filters.priceRange[1];
        });
    }

    return filtered;
};

export const sortProducts = (products, sortBy) => {
    const sorted = [...products];

    switch (sortBy) {
        case 'price-low-high':
            return sorted.sort((a, b) => {
                const priceA = a.salePrice || a.price;
                const priceB = b.salePrice || b.price;
                return priceA - priceB;
            });
        case 'price-high-low':
            return sorted.sort((a, b) => {
                const priceA = a.salePrice || a.price;
                const priceB = b.salePrice || b.price;
                return priceB - priceA;
            });
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        case 'popularity':
            return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        default:
            return sorted;
    }
};

// Get unique colors from products
export const getUniqueColors = (products) => {
    const colorSet = new Set();
    products.forEach(p => {
        p.colors.forEach(c => colorSet.add(c.name));
    });
    return Array.from(colorSet);
};

// Generate star rating display
export const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    return {
        full: fullStars,
        half: hasHalfStar ? 1 : 0,
        empty: 5 - fullStars - (hasHalfStar ? 1 : 0)
    };
};

// Format review count
export const formatReviewCount = (count) => {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
};

// Validate email
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Generate slug from name
export const generateSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};
