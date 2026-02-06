import { useState } from 'react';
import { motion } from 'framer-motion';
import { fabricTypes } from '../../data/fabricTypes';

const FabricTechShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeFabric = fabricTypes[activeTab];

    return (
        <section className="section-spacing bg-black text-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
                        Engineered Fabric Technology
                    </h2>
                    <p className="text-xl text-gray-300">
                        Innovation you can feel in every movement
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {fabricTypes.map((fabric, index) => (
                        <button
                            key={fabric.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-button font-heading font-semibold transition-all ${activeTab === index
                                    ? 'bg-white text-black'
                                    : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
                                }`}
                        >
                            <span className="mr-2">{fabric.icon}</span>
                            {fabric.name}
                        </button>
                    ))}
                </div>

                {/* Fabric Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image */}
                    <div className="order-2 md:order-1">
                        <img
                            src={activeFabric.image}
                            alt={activeFabric.name}
                            className="w-full h-96 object-cover rounded-card"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2">
                        <div className="inline-block px-4 py-2 bg-opacity-20 rounded-full mb-4"
                            style={{ backgroundColor: activeFabric.color }}>
                            <span className="text-2xl">{activeFabric.icon}</span>
                        </div>

                        <h3 className="text-4xl font-heading font-black mb-3">
                            {activeFabric.name}
                        </h3>

                        <p className="text-2xl text-accent-cyan font-semibold mb-4">
                            {activeFabric.tagline}
                        </p>

                        <p className="text-lg text-gray-300 mb-6">
                            {activeFabric.longDescription}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {activeFabric.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Composition */}
                        <div className="bg-white bg-opacity-10 rounded-button p-4 mb-6">
                            <p className="text-sm font-semibold mb-1">Composition</p>
                            <p className="text-gray-300">{activeFabric.composition}</p>
                        </div>

                        {/* Best For */}
                        <div>
                            <p className="text-sm font-semibold mb-2">Best For</p>
                            <div className="flex flex-wrap gap-2">
                                {activeFabric.bestFor.map((activity, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm"
                                    >
                                        {activity}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FabricTechShowcase;
