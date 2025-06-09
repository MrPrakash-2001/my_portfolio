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
