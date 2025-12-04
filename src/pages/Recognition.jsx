import { motion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';

const Recognition = () => {
    const awards = [
        {
            id: 1,
            title: 'MoE Lead 2025',
            organization: 'Aldar Education',
            image: '/assets/award-moe-lead.png',
            description: 'Recognized for leadership excellence in Ministry of Education initiatives.',
        },
        {
            id: 2,
            title: 'The Heart of Education 2025',
            organization: 'Aldar Education',
            image: '/assets/award-heart.png',
            description: 'Awarded for exceptional dedication to student welfare and educational values.',
        },
        {
            id: 3,
            title: 'Outstanding Teacher 2019',
            organization: 'ENS',
            image: '/assets/award-outstanding.jpg',
            description: 'Honored for outstanding teaching performance and student engagement.',
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Hessa',
            role: 'Student',
            image: '/assets/testimonial-1.jpg',
            quote: 'Mr. Khalid made learning Arabic fun and engaging. His use of technology really helped me understand better.',
        },
        {
            id: 2,
            name: 'Parent Feedback',
            role: 'Parent',
            image: '/assets/testimonial-2.jpg',
            quote: 'We have seen remarkable improvement in our child\'s confidence and language skills. Thank you for your dedication.',
        },
    ];

    return (
        <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Awards Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Awards & Recognition</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Honored to be recognized for my contributions to education and leadership.
                    </p>
                    <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2 text-accent">
                                    <Award size={20} />
                                    <span className="text-sm font-semibold">{award.organization}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{award.title}</h3>
                                <p className="text-gray-600 text-sm">{award.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Testimonials</h2>
                    <p className="text-gray-600">What students and parents say about their experience.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
                        >
                            <Quote size={40} className="text-accent/20 absolute top-6 right-6" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                                    <span className="text-accent text-sm">{testimonial.role}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Recognition;
