// Fabric technology data
export const fabricTypes = [
    {
        id: 1,
        name: "NANDEX™",
        slug: "nandex",
        tagline: "Compression Perfected",
        description: "Our signature fabric engineered with compression and support for high-intensity workouts",
        longDescription: "NANDEX™ is our revolutionary compression fabric that provides targeted support exactly where you need it. The unique blend of nylon and elastane creates a second-skin feel that moves with your body while maintaining its shape through countless workouts.",
        features: [
            "Squat-proof opacity",
            "Moisture-wicking technology",
            "4-way stretch for freedom of movement",
            "Compression support",
            "Shape retention",
            "Quick-dry"
        ],
        composition: "80% Nylon, 20% Elastane",
        bestFor: ["HIIT", "Strength Training", "Yoga", "Pilates"],
        icon: "💪",
        color: "#000000",
        image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=800"
    },
    {
        id: 2,
        name: "Airlyte",
        slug: "airlyte",
        tagline: "Feather-Light Performance",
        description: "Ultra-lightweight and breathable fabric for maximum comfort",
        longDescription: "Airlyte is engineered to be barely-there while delivering exceptional performance. This innovative fabric is perfect for running, hot yoga, and any activity where breathability is key.",
        features: [
            "Feather-light weight",
            "Maximum breathability",
            "Quick-dry technology",
            "Soft-touch finish",
            "UV protection",
            "Anti-odor treatment"
        ],
        composition: "85% Polyester, 15% Elastane",
        bestFor: ["Running", "Cycling", "Hot Yoga", "Cardio"],
        icon: "🌬️",
        color: "#00D9FF",
        image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=800&q=80"
    },
    {
        id: 3,
        name: "FlexKnit",
        slug: "flexknit",
        tagline: "Seamless Second Skin",
        description: "Seamless construction with strategic ventilation zones",
        longDescription: "FlexKnit technology uses advanced knitting techniques to create garments with zero seams and strategic ventilation. The result is unparalleled comfort and a sleek, sculpted look.",
        features: [
            "Seamless construction",
            "Strategic ventilation zones",
            "Second-skin feel",
            "Moisture management",
            "Stretch recovery",
            "Chafe-free"
        ],
        composition: "92% Nylon, 8% Elastane",
        bestFor: ["Yoga", "Barre", "Dance", "Stretching"],
        icon: "✨",
        color: "#FFD700",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800"
    },
    {
        id: 4,
        name: "ThermaFlex",
        slug: "thermaflex",
        tagline: "Warmth Without Weight",
        description: "Thermal regulation for cold-weather training",
        longDescription: "ThermaFlex combines warmth with breathability, making it ideal for outdoor winter workouts. The brushed interior traps heat while the exterior wicks moisture away.",
        features: [
            "Thermal insulation",
            "Moisture-wicking",
            "Brushed interior",
            "Wind-resistant",
            "4-way stretch",
            "Reflective details"
        ],
        composition: "88% Polyester, 12% Elastane",
        bestFor: ["Outdoor Running", "Winter Training", "Cold Weather Workouts"],
        icon: "🔥",
        color: "#FF3366",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    }
];

// Helper function to get fabric by slug
export const getFabricBySlug = (slug) => {
    return fabricTypes.find(f => f.slug === slug);
};

// Helper function to get fabric by name
export const getFabricByName = (name) => {
    return fabricTypes.find(f => f.name === name);
};
