import React from 'react';
import SectionWrapper from '../../UI/SectionWrapper';
import personal from '../../../data/personal';
import { Meteors } from '../../UI/meteors'; // Ensure this path is correct
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
            <div className="projects-container grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {personal.projects.map(({ name, description, techStack, link, repo }, idx) => (
                    <div key={idx} className="relative w-full max-w-xl mx-auto">
                        {/* Removed background glow */}
                        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-8 shadow-xl">
                            {/* Meteor effect (stars) */}
                            <Meteors number={20} />

                            <h3 className="relative z-10 mb-4 text-xl font-bold text-white">
                                {name}
                            </h3>

                            <p className="relative z-10 mb-2 text-base text-slate-400">
                                {description}
                            </p>

                            <p className="relative z-10 mb-4 text-sm text-slate-500">
                                <strong>Tech:</strong> {techStack.join(', ')}
                            </p>

                            <div className="relative z-10 flex flex-wrap gap-4 mt-2">
                                {link && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300 hover:bg-gray-700 transition">
                                        Live Demo
                                    </a>
                                )}
                                {repo && (
                                    <a
                                        href={repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300 hover:bg-gray-700 transition">
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
