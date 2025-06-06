import SectionWrapper from '../UI/SectionWrapper';
import personal from '../../data/personal';

const Education = () => {
    if (!personal.education || personal.education.length === 0) {
        return (
            <SectionWrapper id="education" title="Education">
                <p className="text-gray-400 italic">No education data available.</p>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="education" title="Education">
            <ul className="space-y-6">
                {personal.education.map(({ school, degree, field, startYear, endYear }, idx) => (
                    <li key={idx} className="border-l-4 border-blue-400 pl-4">
                        <h3 className="text-xl font-semibold">{degree} in {field}</h3>
                        <p className="text-gray-300">{school}</p>
                        <p className="text-gray-400 text-sm">{startYear} – {endYear || 'Present'}</p>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
};

export default Education;
