import SectionWrapper from '../UI/SectionWrapper';
import personal from '../../data/personal';

const Experience = () => {
    if (!personal.experience || personal.experience.length === 0) {
        return (
            <SectionWrapper id="experience" title="Professional Experience">
                <p className="text-gray-400 italic">No experience data available.</p>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="experience" title="Professional Experience">
            <ul className="space-y-8">
                {personal.experience.map(({ company, role, startDate, endDate, responsibilities }, idx) => (
                    <li key={idx} className="border-l-4 border-blue-400 pl-4">
                        <h3 className="text-xl font-semibold">{role}</h3>
                        <p className="text-gray-300">{company}</p>
                        <p className="text-gray-400 text-sm">{startDate} – {endDate || 'Present'}</p>
                        {responsibilities && (
                            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                                {responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
};

export default Experience;
