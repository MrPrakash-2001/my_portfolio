import SectionWrapper from '../UI/SectionWrapper';
import personal from '../../data/personal';
const Projects = () => {
    if (!personal.projects || personal.projects.length === 0) {
        return (
            <SectionWrapper id="projects" title="Projects">
                <p className="text-gray-400 italic">No projects data available.</p>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="projects" title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {personal.projects.map(({ name, description, techStack, link, repo }, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">{name}</h3>
                        <p className="text-gray-300 mb-3">{description}</p>
                        <p className="text-gray-400 text-sm mb-4">
                            <strong>Tech:</strong> {techStack.join(', ')}
                        </p>
                        <div className="flex space-x-4">
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    Live Demo
                                </a>
                            )}
                            {repo && (
                                <a
                                    href={repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
