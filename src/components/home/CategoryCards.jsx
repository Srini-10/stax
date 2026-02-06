import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/promotions';

const CategoryCards = () => {
    return (
        <section className="section-spacing bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-xl text-gray-600">
                        Find your perfect fit across our complete collection
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/collections/${category.slug}`}
                                className="group block card hover-lift overflow-hidden"
                            >
                                <div className="relative aspect-square overflow-hidden bg-gray-900">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/600x600/000000/FFFFFF?text=${encodeURIComponent(category.name)}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-1">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm text-gray-200">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCards;
