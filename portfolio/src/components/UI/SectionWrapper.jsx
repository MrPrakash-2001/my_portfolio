import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, children }) => {
    return (
        <section id={id} className="scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                {title && (
                    <h2 className="text-3xl font-semibold text-blue-400 border-b border-gray-700 pb-2">
                        {title}
                    </h2>
                )}
                <div>
                    {children}
                </div>
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
