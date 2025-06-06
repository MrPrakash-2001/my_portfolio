import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../../UI/SectionWrapper';
import './Skills.scss';

const getColorGradient = (level) => {
    if (level >= 90) return 'from-green-400 to-green-600';
    if (level >= 75) return 'from-blue-400 to-blue-600';
    if (level >= 50) return 'from-yellow-400 to-yellow-600';
    return 'from-gray-400 to-gray-500';
};

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        try {
            const raw = import.meta.env.VITE_SKILLS_JSON || '[]';
            setSkills(JSON.parse(raw));
        } catch (err) {
            console.error('Invalid VITE_SKILLS_JSON format');
        }
    }, []);

    if (!skills.length) {
        return (
            <SectionWrapper id="skills" title="Skills">
                <p className="text-gray-400 italic">No skills data available.</p>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="skills" title="Skills">
            <div className="skills-section">
                {skills.map(({ name, level }, idx) => (
                    <div key={idx} className="skill-item">
                        <div className="skill-header">
                            <h3>{name}</h3>
                            <span>{level}%</span>
                        </div>

                        <motion.div
                            className="progress-bar-bg"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <motion.div
                                className={`progress-bar-fill bg-gradient-to-r ${getColorGradient(level)}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${level}%` }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
