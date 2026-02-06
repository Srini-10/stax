import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VideoHero = () => {
    return (
        <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
            {/* Video Background (Using image placeholder) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600)',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full container-custom flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="badge badge-new mb-6 bg-accent-cyan text-black"
                    >
                        New Collection
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight"
                    >
                        Engineered for<br />
                        <span className="text-gradient-pink bg-gradient-to-r from-accent-pink to-accent-cyan bg-clip-text text-transparent">
                            Every Body
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl mb-8 text-gray-200"
                    >
                        Premium activewear with revolutionary NANDEX™ fabric technology.
                        XXS to 4XL sizing designed for real athletes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link to="/shop/women" className="btn-primary inline-flex items-center justify-center group">
                            Shop Women
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/fabric/nandex" className="btn-outline bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black inline-flex items-center justify-center">
                            Explore Fabrics
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 flex flex-wrap gap-6 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                                ✓
                            </div>
                            <span>Free Shipping $110+</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center text-black">
                                ✓
                            </div>
                            <span>Extended Size Range</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-accent-pink rounded-full flex items-center justify-center">
                                ✓
                            </div>
                            <span>30-Day Returns</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoHero;
