// Promotion and gift threshold data
export const promotionThresholds = {
    freeShipping: 110,
    freeGift: 120,
    premiumGift: 300
};

export const freeGifts = [
    {
        id: 1,
        name: "STAX Water Bottle",
        description: "Insulated 750ml bottle",
        threshold: 120,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
        value: 25
    },
    {
        id: 2,
        name: "STAX Gym Bag",
        description: "Compact training bag",
        threshold: 120,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        value: 35
    },
    {
        id: 3,
        name: "STAX Resistance Band Set",
        description: "3-piece resistance band set",
        threshold: 120,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400",
        value: 30
    }
];

export const premiumGifts = [
    {
        id: 4,
        name: "STAX Yoga Mat",
        description: "Premium non-slip yoga mat",
        threshold: 300,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
        value: 70
    },
    {
        id: 5,
        name: "STAX Duffle Bag",
        description: "Large weekend duffle",
        threshold: 300,
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400",
        value: 85
    }
];

export const promotionBanners = [
    {
        id: 1,
        text: "FREE SHIPPING ON ORDERS OVER $110 🚚",
        backgroundColor: "#000000",
        textColor: "#FFFFFF"
    },
    {
        id: 2,
        text: "NEW MEMBERS GET 15% OFF FIRST ORDER 💎",
        backgroundColor: "#FF3366",
        textColor: "#FFFFFF"
    },
    {
        id: 3,
        text: "LOYALTY MEMBERS EARN DOUBLE POINTS THIS WEEK ⭐",
        backgroundColor: "#00D9FF",
        textColor: "#000000"
    },
    {
        id: 4,
        text: "FREE GIFT WITH PURCHASE OVER $120 🎁",
        backgroundColor: "#FFD700",
        textColor: "#000000"
    }
];

export const categories = [
    {
        id: 1,
        name: "Tights",
        slug: "tights",
        description: "Full length, 7/8, and cropped options",
        image: "/images/categories/tights.png",
        gender: "Women"
    },
    {
        id: 2,
        name: "Sports Bras",
        slug: "sports-bras",
        description: "Low to high support",
        image: "/images/categories/sports-bras.png",
        gender: "Women"
    },
    {
        id: 3,
        name: "Tops",
        slug: "tops",
        description: "Tanks, tees, and long sleeves",
        image: "/images/categories/tops.png",
        gender: "Women"
    },
    {
        id: 4,
        name: "Shorts",
        slug: "shorts",
        description: "Running and training shorts",
        image: "/images/categories/shorts.png",
        gender: "Women"
    },
    {
        id: 5,
        name: "Jackets",
        slug: "jackets",
        description: "Lightweight and insulated",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
        gender: "Women"
    },
    {
        id: 6,
        name: "Accessories",
        slug: "accessories",
        description: "Bags, bottles, and more",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
        gender: "Unisex"
    }
];

export const loyaltyTiers = [
    {
        id: 1,
        name: "Member",
        minPoints: 0,
        benefits: ["Birthday discount", "Early sale access", "Free shipping over $110"],
        color: "#6B7280"
    },
    {
        id: 2,
        name: "Gold",
        minPoints: 500,
        benefits: ["10% off all purchases", "Free returns", "Priority customer service", "Double points on birthday"],
        color: "#FFD700"
    },
    {
        id: 3,
        name: "Platinum",
        minPoints: 1000,
        benefits: ["15% off all purchases", "Free express shipping", "Exclusive product access", "Triple points on birthday"],
        color: "#E5E4E2"
    }
];
