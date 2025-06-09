import node from '../assets/node.png';
import angular from '../assets/angular.png';
import express from '../assets/express.png';
import react from '../assets/react.svg';



const parseJSON = (envVar) => {
    try {
        return JSON.parse(envVar);
    } catch {
        return null;
    }
};

const personal = {
    name: import.meta.env.VITE_NAME || '',
    title: import.meta.env.VITE_TITLE || '',
    description: import.meta.env.VITE_DESCRIPTION || '',
    location: import.meta.env.VITE_LOCATION || '',
    email: import.meta.env.VITE_EMAIL || '',
    github: import.meta.env.VITE_GITHUB || '',
    linkedin: import.meta.env.VITE_LINKEDIN || '',
    skills: parseJSON(import.meta.env.VITE_SKILLS_JSON) || [],
    projects: parseJSON(import.meta.env.VITE_PROJECTS_JSON) || [],
    experience: parseJSON(import.meta.env.VITE_EXPERIENCE_JSON) || [],
    education: parseJSON(import.meta.env.VITE_EDUCATION_JSON) || [],
    services: parseJSON(import.meta.env.VITE_SERVICE_JSON) || [],
    images: [
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express,
        // node,
        // angular,
        // react,
        // express
    ]
};



export default personal;
