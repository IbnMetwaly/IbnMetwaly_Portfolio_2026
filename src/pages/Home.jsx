import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
                                Empowering Education through <span className="text-accent">Innovation</span> & Leadership
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                                I am Khalid Metwaly, a Strategic Educational Leader and Arabic Language Educator dedicated to transforming learning experiences through digital innovation and human-centered leadership.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/journey"
                                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-slate-800 transition-colors"
                                >
                                    View My Journey <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary bg-white border-2 border-primary rounded-full hover:bg-slate-50 transition-colors"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
                                <img
                                    src="/assets/profile.png"
                                    alt="Khalid Metwaly"
                                    className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-2">13+ Years</h3>
                            <p className="text-gray-600">Experience in Education</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-2">Impact</h3>
                            <p className="text-gray-600">Students & Educators Empowered</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-2">Recognition</h3>
                            <p className="text-gray-600">Awards & Certifications</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
