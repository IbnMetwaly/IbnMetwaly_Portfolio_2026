import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Journey = () => {
    const experiences = [
        {
            id: 1,
            year: 'Oct 2024 – Sep 2025',
            title: 'MoE Subjects Lead',
            organization: 'Aldar Education – Al-Kharran School, RAK, UAE',
            description: 'Provided professional leadership and support for curriculum implementation, instructional effectiveness, and student achievements. Spearheaded initiatives doubling reading engagement and rising student attainment by 21%.',
            type: 'work',
        },
        {
            id: 2,
            year: 'Sep 2021 – Aug 2024',
            title: 'NC Coordinator',
            organization: 'Emirates National School – Al Ain, UAE',
            description: 'Achieved global recognition in digital Arabic literacy. Ranked 1st globally on BravoBravo among 180 schools and secured top positions in iReadArabic competitions.',
            type: 'work',
        },
        {
            id: 3,
            year: 'Sep 2017 – Aug 2024',
            title: 'Arabic Teacher',
            organization: 'Emirates National School – Al Ain, UAE',
            description: 'Developed engaging lesson plans and innovative learning environments enhancing language acquisition. Monitored progress through data analysis and provided constructive feedback.',
            type: 'work',
        },
        {
            id: 4,
            year: 'Sep 2013 – Mar 2017',
            title: 'Arabic Teacher',
            organization: 'Salahaldin International School – Cairo, Egypt',
            description: 'Created engaging learning environments for language acquisition. Focused on student progress monitoring and stakeholder communication.',
            type: 'work',
        },
        {
            id: 5,
            year: 'May 2012 – Aug 2013',
            title: 'Arabic Language Instructor',
            organization: 'International Center for Teaching Arabic – Cairo, Egypt',
            description: 'Provided customized Arabic language courses to non-native speakers based on learner needs and personal goals.',
            type: 'work',
        },
        {
            id: 6,
            year: '2012',
            title: 'TAFL Certification',
            organization: 'International Center for Teaching Arabic',
            description: 'Teaching Arabic as a Foreign Language certification.',
            type: 'education',
        },
        {
            id: 7,
            year: '2007 - 2011',
            title: 'Bachelor’s degree in Arabic Language and Literature',
            organization: 'Cairo University',
            description: 'Foundation in Arabic language studies and literature.',
            type: 'education',
        },
    ];

    return (
        <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Professional Journey</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A timeline of my career milestones, educational achievements, and contributions to the field of education.
                    </p>
                    <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-1/2 p-4">
                                    <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                            }`}>
                                            <Calendar size={16} className="text-accent" />
                                            <span className="text-sm font-semibold text-accent">{exp.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                                        <h4 className="text-md text-gray-500 mb-4">{exp.organization}</h4>
                                        <p className="text-gray-600">{exp.description}</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-accent rounded-full z-10 my-4 md:my-0">
                                    {exp.type === 'work' ? (
                                        <Briefcase size={20} className="text-primary" />
                                    ) : (
                                        <GraduationCap size={20} className="text-primary" />
                                    )}
                                </div>

                                <div className="w-full md:w-1/2 p-4"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;
