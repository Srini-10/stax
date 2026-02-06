import { motion } from 'framer-motion';
import VideoHero from '../components/home/VideoHero';
import BestSellerCarousel from '../components/home/BestSellerCarousel';
import CategoryCards from '../components/home/CategoryCards';
import FabricTechShowcase from '../components/home/FabricTechShowcase';

const Home = () => {
    return (
        <div className="min-h-screen">
            <VideoHero />
            <BestSellerCarousel />
            <CategoryCards />
            <FabricTechShowcase />

            {/* Social Proof Section */}
            <section className="section-spacing">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
                        Join the Movement
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Over 100,000 athletes trust STAX for their training
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'https://picsum.photos/seed/stax1/400/500',
                            'https://picsum.photos/seed/stax2/400/500',
                            'https://picsum.photos/seed/stax3/400/500',
                            'https://picsum.photos/seed/stax4/400/500',
                            'https://picsum.photos/seed/stax5/400/500',
                            'https://picsum.photos/seed/stax6/400/500',
                            'https://picsum.photos/seed/stax7/400/500',
                            'https://picsum.photos/seed/stax8/400/500'
                        ].map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="aspect-[4/5] rounded-card overflow-hidden bg-gray-200"
                            >
                                <img
                                    src={img}
                                    alt={`Customer ${idx + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/400x500/000000/FFFFFF?text=STAX+${idx + 1}`;
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Size Inclusive Message */}
            <section className="bg-gradient-to-r from-accent-pink via-accent-cyan to-accent-gold py-16">
                <div className="container-custom text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
                        XXS to 4XL
                    </h2>
                    <p className="text-2xl mb-4">
                        Because every body deserves premium activewear
                    </p>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        We believe in real inclusivity. That's why we offer extended sizing across our entire collection,
                        designed with the same attention to detail and performance technology.
                    </p>
                </div>
            </section>

            {/* Loyalty Program Banner */}
            <section className="section-spacing bg-black text-white">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-accent-gold text-5xl mb-6">⭐</div>
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
                            Earn Rewards with Every Purchase
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join our loyalty program and earn points towards exclusive benefits,
                            early access to sales, and special gifts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary bg-accent-gold text-black hover:bg-opacity-90">
                                Join Now - It's Free
                            </button>
                            <button className="btn-outline border-white text-white hover:bg-white hover:text-black">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
