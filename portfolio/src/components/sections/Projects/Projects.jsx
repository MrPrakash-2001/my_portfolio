import React from 'react';
import SectionWrapper from '../../UI/SectionWrapper';
import personal from '../../../data/personal';
import './Projects.scss';

const Projects = () => {
    if (!personal.projects || personal.projects.length === 0) {
        return (
            <SectionWrapper id="projects" title="Projects">
                <p className="no-projects-text">No projects data available.</p>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="projects" title="Projects">
            <div className="projects-container">
                {personal.projects.map(({ name, description, techStack, link, repo }, idx) => (
                    <div key={idx} className="project-card">
                        <h3 className="project-title">{name}</h3>
                        <p className="project-description">{description}</p>
                        <p className="project-tech">
                            <strong>Tech:</strong> {techStack.join(', ')}
                        </p>
                        <div className="project-links">
                            {(link || repo) && (
                                <div className="project-links">
                                    {link && (
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            Live Demo
                                        </a>
                                    )}
                                    {repo && (
                                        <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
