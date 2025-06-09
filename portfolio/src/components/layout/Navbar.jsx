// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const links = [
//     { name: 'Bio', href: '#bio' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Education', href: '#education' },
// ];

// const linkVariants = {
//     hover: {
//         scale: 1.15,
//         color: 'rgb(20, 229, 194)', // cyan accent
//         transition: { type: 'spring', stiffness: 300 },
//     },
// };

// const underlineVariants = {
//     hidden: { width: 0 },
//     visible: { width: '100%', transition: { duration: 0.3, ease: 'easeOut' } },
// };

// const menuVariants = {
//     hidden: { opacity: 0, y: -20, transition: { duration: 0.25 } },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
// };

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [active, setActive] = useState(null);

//     // Optional: Set active link on scroll or click (simple version)
//     const handleLinkClick = (name) => {
//         setActive(name);
//         setMenuOpen(false);
//     };

//     // Optional: Close menu on window resize > md
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) setMenuOpen(false);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 shadow-lg border-b border-cyan-500/30">
//             <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
//                 {/* Gradient Logo */}
//                 <a
//                     href="#"
//                     className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent select-none"
//                     aria-label="Home"
//                     onClick={() => setActive(null)}
//                 >
//                     Prakash
//                 </a>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex space-x-10">
//                     {links.map(({ name, href }) => (
//                         <motion.a
//                             key={name}
//                             href={href}
//                             className={`relative px-3 py-2 font-semibold rounded-md cursor-pointer select-none ${active === name
//                                 ? 'text-cyan-400'
//                                 : 'text-white hover:text-cyan-400'
//                                 }`}
//                             variants={linkVariants}
//                             whileHover="hover"
//                             onClick={() => handleLinkClick(name)}
//                             tabIndex={0}
//                         >
//                             {name}
//                             {/* Animated underline for active and hover */}
//                             {(active === name) && (
//                                 <motion.span
//                                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded"
//                                     layoutId="underline"
//                                     initial="hidden"
//                                     animate="visible"
//                                     variants={underlineVariants}
//                                 />
//                             )}
//                         </motion.a>
//                     ))}
//                 </nav>

//                 {/* Mobile Menu Button */}
//                 <button
//                     onClick={() => setMenuOpen((prev) => !prev)}
//                     className="md:hidden p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
//                     aria-label="Toggle Menu"
//                 >
//                     <motion.span
//                         animate={{ rotate: menuOpen ? 90 : 0 }}
//                         transition={{ type: 'spring', stiffness: 300 }}
//                         className="text-4xl text-white select-none"
//                     >
//                         ☰
//                     </motion.span>
//                 </button>
//             </div>

//             {/* Mobile Dropdown */}
//             <AnimatePresence>
//                 {menuOpen && (
//                     <motion.nav
//                         className="md:hidden bg-gray-900/95 text-white px-6 py-6 flex flex-col space-y-5 border-t border-cyan-600/50"
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         variants={menuVariants}
//                     >
//                         {links.map(({ name, href }) => (
//                             <a
//                                 key={name}
//                                 href={href}
//                                 className="block text-xl font-semibold rounded-md px-3 py-2 hover:bg-cyan-700/30 transition-colors"
//                                 onClick={() => handleLinkClick(name)}
//                             >
//                                 {name}
//                             </a>
//                         ))}
//                     </motion.nav>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };

// export default Navbar;


"use client";
import { useState } from "react";
import {
    Navbar as NavbarWrapper,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    NavbarName
} from "@/components/UI/Resizable-navbar";

export default function Navbar() {
    const navItems = [
        { name: "Bio", link: "#bio" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Experience", link: "#experience" },
        { name: "Education", link: "#education" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState(null);

    const handleLinkClick = (name) => {
        setActive(name);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="relative w-full sticky top-0 z-50">
            <NavbarWrapper>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarName name="Prakash" />
                    
                    <NavItems
                        items={navItems}
                        renderItem={({ name, link }) => (
                            <a
                                href={link}
                                onClick={() => handleLinkClick(name)}
                                className={`relative px-3 py-2 font-semibold rounded-md cursor-pointer select-none ${active === name ? "text-cyan-400" : "text-white hover:text-cyan-400"
                                    }`}
                                aria-current={active === name ? "page" : undefined}
                            >
                                {name}
                                {active === name && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded" />
                                )}
                            </a>
                        )}
                        className="hidden md:flex space-x-10"
                    />

                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo
                            onClick={() => {
                                setActive(null);
                                setIsMobileMenuOpen(false);
                            }}
                        />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => handleLinkClick(item.name)}
                                className={`block text-xl font-semibold rounded-md px-3 py-2 ${active === item.name
                                    ? "bg-cyan-700/50 text-white"
                                    : "text-neutral-600 dark:text-neutral-300 hover:bg-cyan-700/30 transition-colors"
                                    }`}
                                aria-current={active === item.name ? "page" : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </NavbarWrapper>
        </div>
    );
}
