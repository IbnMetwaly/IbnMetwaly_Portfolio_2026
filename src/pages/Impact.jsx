import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Globe, TrendingUp } from 'lucide-react';

const Impact = () => {
    const stats = [
        { id: 1, label: 'Years Experience', value: '13+', icon: <CalendarIcon /> },
        { id: 2, label: 'Stories Read', value: '68,000+', icon: <BookOpen /> },
        { id: 3, label: 'Attainment Rise', value: '21%', icon: <TrendingUp /> },
        { id: 4, label: 'Global Ranking', value: '1st', icon: <Award /> },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Impact in Numbers</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Measuring the tangible results of my dedication to education and leadership.
                    </p>
                    <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-accent">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Case Studies / Initiatives */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-primary text-white p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-serif font-bold mb-4">BravoBravo Reading Initiative</h3>
                        <p className="text-slate-300 mb-6">
                            Spearheaded school-wide initiatives that led to doubling students’ reading engagement on BravoBravo App.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Globe size={16} className="text-accent" />
                                <span>Story count rose from 14,000 to 31,000+</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Globe size={16} className="text-accent" />
                                <span>Ranked 1st globally among 180 schools</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Academic Attainment</h3>
                        <p className="text-gray-600 mb-6">
                            Initiated data-driven improvements resulting in significant leaps in student performance benchmarks.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <TrendingUp size={16} className="text-accent" />
                                <span>Attainment rose from 75% to 96.5%</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TrendingUp size={16} className="text-accent" />
                                <span>83% of students meeting/exceeding progress</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export default Impact;
