import React from 'react';
import personal from '../../data/personal';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm select-none">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p>
                    &copy; {year} {personal.name || 'Your Name'}. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-3 md:mt-0">
                    {personal.github && (
                        <a
                            href={personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>GitHub</title>
                                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.606-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.1.823 2.22 0 1.604-.015 2.896-.015 3.287 0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                    {personal.linkedin && (
                        <a
                            href={personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>LinkedIn</title>
                                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.849-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667H10.02V9h3.104v1.561h.044c.433-.82 1.49-1.68 3.067-1.68 3.282 0 3.887 2.16 3.887 4.971v6.6zM5.337 7.433a1.806 1.806 0 110-3.612 1.806 1.806 0 010 3.612zM6.908 20.452H3.763V9h3.146v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.451C23.204 24 24 23.226 24 22.27V1.73C24 .774 23.204 0 22.225 0z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
