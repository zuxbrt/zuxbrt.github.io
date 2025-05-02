'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type IntroProps = {
    setHoveredSection: any;
    onOpenSection: (section: string) => any;
}

export default function Intro({ setHoveredSection, onOpenSection }: IntroProps ) {

    const [isOnExperience, setIsOnExperience] = useState(false);
    const [isOnProjects, setIsOnProjects] = useState(false);
    const [isOnAbout, setIsOnAbout] = useState(false);
    const [isOnContact, setIsOnContact] = useState(false);

    useEffect(() => {
        let section: string | null = null;
        if(isOnExperience) section = 'experience';
        if(isOnProjects) section = 'projects';
        if(isOnAbout) section = 'about';
        if(isOnContact) section = 'contact';

        setHoveredSection(section);

    }, [isOnExperience, isOnProjects, isOnAbout, isOnContact]);



    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={containerStyle}
            className="p-4 opacity-25">

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row justify-between">

                <div className="flex flex-col justify-between mr-0 sm:mr-0 md:mr-0 lg:mr-5 xl:mr-5 xxl:mr-5">

                    <div className="flex flex-col mb-4 sm:mb-3 md:mb-3 lg:mb-0 xl:mb-0 xxl:mb-0">

                        <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-4xl font-light">
                            Hi, I'm Zulfo Muhović,
                        </motion.p>
                        
                        <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-2xl font-light mt-1">
                            Full Stack Developer.
                        </motion.p>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-row mb-5 sm:mb-5 md:mb-5 lg:mb-0 xl:mb-0 xxl:mb-0">
                            <a target="blank" href="https://github.com/zuxbrt" rel="noopener noreferrer">
                                <Image
                                    src="/github.svg"
                                    width={30}
                                    height={30}
                                    alt="Github"
                                />
                            </a>
                            <a target="blank" className="mx-1" href="https://www.linkedin.com/in/zulfo-muhovi%C4%87-507889132/" rel="noopener noreferrer">
                                <Image
                                    src="/linkedin.svg"
                                    width={30}
                                    height={30}
                                    alt="LinkedIn"
                                />
                            </a>
                            <a target="blank" className="mx-1" href="mailto:zmuhovic97@gmail.com" rel="noopener noreferrer">
                                <Image
                                    src="/mail.png"
                                    width={30}
                                    height={30}
                                    alt="Mail"
                                />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row">

                        <motion.div
                            style={boxStyle}
                            className="p-1"
                            animate={{ 
                                scale: isOnExperience ? 0.99 : 1, 
                                rotate: isOnExperience ? 90 : 0,
                                backgroundColor: isOnExperience ? "rgba(0, 0, 0, 0)" : "#f8f9fa",
                                color: isOnExperience ? "#f8f9fa" : "#212529",
                                border: isOnExperience ? "1px solid #f8f9fa" : "1px solid transparent",
                            }}
                            onClick={() => onOpenSection('experience')}
                            onHoverStart={() => setIsOnExperience(true)}
                            onHoverEnd={() => setIsOnExperience(false)}>
                            <p className="pl-1">experience</p>
                        </motion.div>

                        <motion.div
                            style={boxStyle}
                            className="p-1 ml-1 cursor-pointer"
                            animate={{ 
                                scale: isOnProjects ? 0.99 : 1, 
                                rotate: isOnProjects ? 90 : 0,
                                backgroundColor: isOnProjects ? "rgba(0, 0, 0, 0)" : "#f8f9fa",
                                color: isOnProjects ? "#f8f9fa" : "#212529",
                                border: isOnProjects ? "1px solid #f8f9fa" : "1px solid transparent",

                            }}
                            onClick={() => onOpenSection('projects')}
                            onHoverStart={() => setIsOnProjects(true)}
                            onHoverEnd={() => setIsOnProjects(false)}>
                            <p className="pl-1">projects</p>
                        </motion.div>
                    </div>
                    <div className="flex flex-row">

                        <motion.div
                            style={boxStyle}
                            className="p-1 mt-1 cursor-pointer"
                            animate={{ 
                                scale: isOnAbout ? 0.99 : 1, 
                                rotate: isOnAbout ? 90 : 0,
                                backgroundColor: isOnAbout ? "rgba(0, 0, 0, 0)" : "#f8f9fa",
                                color: isOnAbout ? "#f8f9fa" : "#212529",
                                border: isOnAbout ? "1px solid #f8f9fa" : "1px solid transparent",
                            }}
                            onClick={() => onOpenSection('about')}
                            onHoverStart={() => setIsOnAbout(true)}
                            onHoverEnd={() => setIsOnAbout(false)}>
                            <p className="pl-1">about</p>
                        </motion.div>

                        <motion.div
                            style={boxStyle}
                            className="p-1 mt-1 ml-1 cursor-pointer"
                            animate={{ 
                                scale: isOnContact ? 0.99 : 1, 
                                rotate: isOnContact ? 90 : 0,
                                backgroundColor: isOnContact ? "rgba(0, 0, 0, 0)" : "#f8f9fa",
                                color: isOnContact ? "#f8f9fa" : "#212529",
                                border: isOnContact ? "1px solid #f8f9fa" : "1px solid transparent",
                            }}
                            onClick={() => onOpenSection('contact')}
                            onHoverStart={() => setIsOnContact(true)}
                            onHoverEnd={() => setIsOnContact(false)}>
                            <p className="pl-1">contact</p>
                        </motion.div>

                    </div>
                </div>
                
            </div>
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

const boxStyle: React.CSSProperties = {
    // width: "20vw",
    // height: "20vw",
    width: "150px",
    height: "150px",
    minWidth: "150px",
    minHeight: "150px",
    // borderRadius: 30,
    backgroundColor: "#f8f9fa",
    color: "#212529",
    cursor: 'pointer'
}

const borderStyle: React.CSSProperties = {
    border: "1px solid #f8f9fa"
}

const containerStyle: React.CSSProperties = {
    width: "auto",
    height: "auto",
    border: "2px solid #212529",
    background: "rgba(0, 0, 0, 0.85)"
}
