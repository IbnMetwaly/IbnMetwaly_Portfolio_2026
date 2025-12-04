import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
    const media = [
        {
            id: 1,
            type: 'video',
            src: '/assets/banner.mp4',
            thumbnail: '/assets/gallery-pattern.jpg', // Using pattern as placeholder thumbnail
            title: 'Educational Leadership Vision',
            description: 'A glimpse into my philosophy and journey in education.',
        },
        {
            id: 2,
            type: 'image',
            src: '/assets/gallery-arabic-art.png',
            title: 'Arabic Language Day',
            description: 'Celebrating the richness of Arabic culture and language.',
        },
        {
            id: 3,
            type: 'image',
            src: '/assets/gallery-immersion.jpg',
            title: 'Language Immersion Program',
            description: 'Immersive learning experiences for students.',
        },
        {
            id: 4,
            type: 'image',
            src: '/assets/award-moe-lead.png',
            title: 'MoE Leadership Award',
            description: 'Recognition for leadership excellence.',
        },
        {
            id: 5,
            type: 'image',
            src: '/assets/award-heart.png',
            title: 'Heart of Education',
            description: 'Award ceremony highlights.',
        },
        {
            id: 6,
            type: 'image',
            src: '/assets/award-outstanding.jpg',
            title: 'Outstanding Teacher',
            description: 'Celebrating teaching excellence.',
        },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Moments from my professional journey, events, and recognitions.
                    </p>
                    <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {media.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                        >
                            <div className="aspect-video bg-gray-100 relative">
                                {item.type === 'video' ? (
                                    <>
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover"
                                            controls
                                        />
                                        {/* Overlay for custom play button if needed, but native controls are safer for now */}
                                    </>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </div>

                                {/* Icon Indicator */}
                                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm">
                                    {item.type === 'video' ? (
                                        <Play size={16} className="text-primary" />
                                    ) : (
                                        <ImageIcon size={16} className="text-primary" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
