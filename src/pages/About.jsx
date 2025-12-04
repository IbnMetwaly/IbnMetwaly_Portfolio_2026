import { motion } from 'framer-motion';
import { Download, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">About Me</h1>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                            Strategic Educational Leader & Arabic Language Educator
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">
                                With over 13 years of experience in the educational sector across Egypt and the UAE, I have dedicated my career to bridging the gap between traditional pedagogy and modern digital innovation. My journey began as a passionate Arabic Language Educator, where I discovered the power of technology in making language learning more accessible and engaging.
                            </p>
                            <p className="mb-6">
                                As a Strategic Educational Leader, I focus on "Human-Centered Leadership"—a philosophy that prioritizes the well-being and growth of students and educators alike. I believe that true digital transformation is not just about tools, but about empowering people to use those tools effectively to create meaningful learning experiences.
                            </p>
                            <p className="mb-6">
                                My expertise spans curriculum development, teacher training, and the integration of EdTech solutions. I am committed to fostering environments where innovation thrives and where every student has the opportunity to excel.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/assets/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-slate-800 transition-colors"
                            >
                                <Download className="mr-2 h-5 w-5" />
                                Download My CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Sidebar / Core Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:w-1/3"
                    >
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-serif font-bold text-primary mb-6">Core Values</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Visionary Leadership</h4>
                                        <p className="text-sm text-gray-600">Guiding educational institutions towards future-ready excellence.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                                        <Lightbulb size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Innovation</h4>
                                        <p className="text-sm text-gray-600">Embracing technology to enhance teaching and learning.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Human-Centric</h4>
                                        <p className="text-sm text-gray-600">Prioritizing the needs and growth of every individual.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
