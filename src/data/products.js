// Product data with comprehensive details
export const products = [
    {
        id: 1,
        name: "Full Length Tights NANDEX™ Original",
        slug: "full-length-tights-nandex-original",
        category: "Tights",
        subcategory: "Full Length",
        gender: "Women",
        price: 79.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "Navy", hex: "#001F3F", inStock: true },
            { name: "Plum", hex: "#8E4585", inStock: false },
            { name: "Forest Green", hex: "#0B4F30", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": false,
            "M": true,
            "L": false,
            "XL": true,
            "2XL": true,
            "3XL": true,
            "4XL": true
        },
        fabric: "NANDEX™",
        fabricDetails: {
            composition: "80% Nylon, 20% Elastane",
            features: ["Moisture-wicking", "4-way stretch", "Squat-proof", "Compression support"],
            care: "Machine wash cold, hang dry"
        },
        features: ["High-waisted", "7/8 length", "Compression fit", "Flat-lock seams"],
        images: [
            "/images/products/tights-1.png",
            "/images/products/tights-1.png"
        ],
        bestSeller: true,
        new: false,
        rating: 4.8,
        reviewCount: 1247,
        description: "Our signature full-length tights in compression NANDEX™ fabric. Engineered for high-performance workouts with a second-skin feel that moves with you."
    },
    {
        id: 2,
        name: "Phone Pocket Tights NANDEX™",
        slug: "phone-pocket-tights-nandex",
        category: "Tights",
        subcategory: "Full Length",
        gender: "Women",
        price: 84.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "Charcoal", hex: "#36454F", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": true,
            "3XL": false,
            "4XL": true
        },
        fabric: "NANDEX™",
        fabricDetails: {
            composition: "80% Nylon, 20% Elastane",
            features: ["Moisture-wicking", "4-way stretch", "Squat-proof"],
            care: "Machine wash cold, hang dry"
        },
        features: ["Phone pockets", "High-waisted", "Full length", "Compression fit"],
        images: [
            "/images/products/tights-2.png",
            "/images/products/tights-2.png"
        ],
        bestSeller: true,
        new: false,
        rating: 4.9,
        reviewCount: 892,
        description: "The ultimate workout companion with secure phone pockets on each thigh. Never sacrifice style for functionality."
    },
    {
        id: 3,
        name: "Airlyte Running Tights",
        slug: "airlyte-running-tights",
        category: "Tights",
        subcategory: "Full Length",
        gender: "Women",
        price: 74.95,
        salePrice: 59.95,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "Midnight Blue", hex: "#191970", inStock: true },
            { name: "Sunset Orange", hex: "#FF6347", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": true,
            "3XL": true,
            "4XL": true
        },
        fabric: "Airlyte",
        fabricDetails: {
            composition: "85% Polyester, 15% Elastane",
            features: ["Feather-light", "Quick-dry", "Breathable", "Soft-touch"],
            care: "Machine wash cold"
        },
        features: ["Lightweight", "7/8 length", "Reflective details", "Zippered pocket"],
        images: [
            "/images/products/tights-3.png",
            "/images/products/tights-3.png"
        ],
        bestSeller: false,
        new: true,
        rating: 4.7,
        reviewCount: 324,
        description: "Ultra-lightweight running tights in our revolutionary Airlyte fabric. Perfect for long runs and hot weather training."
    },
    {
        id: 4,
        name: "Essential Sports Bra",
        slug: "essential-sports-bra",
        category: "Sports Bras",
        subcategory: "Medium Support",
        gender: "Women",
        price: 49.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "White", hex: "#FFFFFF", inStock: true },
            { name: "Hot Pink", hex: "#FF3366", inStock: true },
            { name: "Sage Green", hex: "#87AE73", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": false,
            "3XL": true,
            "4XL": true
        },
        fabric: "NANDEX™",
        fabricDetails: {
            composition: "80% Nylon, 20% Elastane",
            features: ["Moisture-wicking", "4-way stretch", "Removable padding"],
            care: "Machine wash cold, lay flat to dry"
        },
        features: ["Medium support", "Adjustable straps", "Removable cups", "Wide band"],
        images: [
            "/images/products/sports-bra-essential.png",
            "/images/products/sports-bra-essential.png"
        ],
        bestSeller: true,
        new: false,
        rating: 4.6,
        reviewCount: 678,
        description: "Your go-to sports bra for yoga, pilates, and light cardio. Medium support with maximum comfort."
    },
    {
        id: 5,
        name: "High Impact Sports Bra Pro",
        slug: "high-impact-sports-bra-pro",
        category: "Sports Bras",
        subcategory: "High Support",
        gender: "Women",
        price: 64.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "Navy", hex: "#001F3F", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": true,
            "3XL": true,
            "4XL": true
        },
        fabric: "NANDEX™",
        fabricDetails: {
            composition: "80% Nylon, 20% Elastane",
            features: ["Maximum support", "Moisture-wicking", "Compression zones"],
            care: "Machine wash cold, lay flat to dry"
        },
        features: ["High impact", "Molded cups", "Racerback", "Adjustable straps", "Breathable mesh"],
        images: [
            "/images/products/sports-bra.png",
            "/images/products/sports-bra.png"
        ],
        bestSeller: true,
        new: false,
        rating: 4.9,
        reviewCount: 1103,
        description: "Engineered for intense workouts. Maximum support and compression for running, HIIT, and high-impact training."
    },
    {
        id: 6,
        name: "Cropped Muscle Tank",
        slug: "cropped-muscle-tank",
        category: "Tops",
        subcategory: "Tanks",
        gender: "Women",
        price: 39.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "White", hex: "#FFFFFF", inStock: true },
            { name: "Cyan", hex: "#00D9FF", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": true,
            "3XL": true,
            "4XL": false
        },
        fabric: "Airlyte",
        fabricDetails: {
            composition: "95% Polyester, 5% Elastane",
            features: ["Ultra-soft", "Quick-dry", "Lightweight"],
            care: "Machine wash cold"
        },
        features: ["Cropped fit", "Muscle back", "Relaxed armholes", "Curved hem"],
        images: [
            "/images/products/tank-top.png",
            "/images/products/tank-top.png"
        ],
        bestSeller: false,
        new: true,
        rating: 4.5,
        reviewCount: 234,
        description: "Effortlessly cool cropped muscle tank in feather-light Airlyte. Perfect for the gym or layering."
    },
    {
        id: 7,
        name: "Seamless Long Sleeve Top",
        slug: "seamless-long-sleeve-top",
        category: "Tops",
        subcategory: "Long Sleeve",
        gender: "Women",
        price: 54.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "Dusty Rose", hex: "#DCAE96", inStock: true },
            { name: "Olive", hex: "#556B2F", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": true,
            "3XL": true,
            "4XL": true
        },
        fabric: "FlexKnit",
        fabricDetails: {
            composition: "92% Nylon, 8% Elastane",
            features: ["Seamless construction", "Second-skin feel", "Breathable knit zones"],
            care: "Machine wash cold"
        },
        features: ["Seamless", "Thumbholes", "Fitted silhouette", "Ventilation zones"],
        images: [
            "/images/products/long-sleeve.png",
            "/images/products/long-sleeve.png"
        ],
        bestSeller: true,
        new: false,
        rating: 4.8,
        reviewCount: 567,
        description: "Seamless long sleeve with strategic ventilation zones. Hugs your body without restriction."
    },
    {
        id: 8,
        name: "Performance Shorts 5\"",
        slug: "performance-shorts-5",
        category: "Shorts",
        subcategory: "Running",
        gender: "Women",
        price: 44.95,
        salePrice: null,
        colors: [
            { name: "Black", hex: "#000000", inStock: true },
            { name: "Navy", hex: "#001F3F", inStock: true }
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        sizeAvailability: {
            "XXS": true,
            "XS": true,
            "S": false,
            "M": true,
            "L": true,
            "XL": true,
            "2XL": true,
            "3XL": true,
            "4XL": true
        },
        fabric: "Airlyte",
        fabricDetails: {
            composition: "88% Polyester, 12% Elastane",
            features: ["Lightweight", "Quick-dry", "Water-resistant"],
            care: "Machine wash cold"
        },
        features: ["5\" inseam", "Built-in liner", "Zippered pocket", "Reflective details"],
        images: [
            "/images/products/shorts.png",
            "/images/products/shorts.png"
        ],
        bestSeller: false,
        new: false,
        rating: 4.6,
        reviewCount: 423,
        description: "Lightweight running shorts with built-in liner. Secure storage and reflective details for safety."
    }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
    return products.filter(p => p.category === category);
};

// Helper function to get products by fabric
export const getProductsByFabric = (fabric) => {
    return products.filter(p => p.fabric === fabric);
};

// Helper function to get best sellers
export const getBestSellers = () => {
    return products.filter(p => p.bestSeller);
};

// Helper function to get new products
export const getNewProducts = () => {
    return products.filter(p => p.new);
};

// Helper function to get product by slug
export const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug);
};

// Helper function to get product by id
export const getProductById = (id) => {
    return products.find(p => p.id === id);
};
