'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type IntroProps = {
    setHoveredSection: any;
    onOpenSection: (section: string) => any;
    isVisible: boolean;
}

export default function Intro({ setHoveredSection, onOpenSection, isVisible }: IntroProps) {

    const [isOnExperience, setIsOnExperience] = useState(false);
    const [isOnSkills, setIsOnSkills] = useState(false);
    const [isOnAbout, setIsOnAbout] = useState(false);
    const [isOnContact, setIsOnContact] = useState(false);

    useEffect(() => {
        let section: string | null = null;
        if (isOnExperience) section = 'experience';
        if (isOnSkills) section = 'skills';
        if (isOnAbout) section = 'about';
        if (isOnContact) section = 'contact';

        setHoveredSection(section);

    }, [isOnExperience, isOnSkills, isOnAbout, isOnContact]);



    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
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

                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-row justify-center-safe">

                                <motion.div
                                    style={boxStyle}
                                    className="p-1 cursor-pointer"
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
                                    className="p-1 ml-1 cursor-pointer"
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

                            </div>

                            <div className="flex flex-row justify-center-safe">

                                <motion.div
                                    style={boxStyle}
                                    className="p-1 mt-1 cursor-pointer"
                                    animate={{
                                        scale: isOnSkills ? 0.99 : 1,
                                        rotate: isOnSkills ? 90 : 0,
                                        backgroundColor: isOnSkills ? "rgba(0, 0, 0, 0)" : "#f8f9fa",
                                        color: isOnSkills ? "#f8f9fa" : "#212529",
                                        border: isOnSkills ? "1px solid #f8f9fa" : "1px solid transparent",

                                    }}
                                    onClick={() => onOpenSection('skills')}
                                    onHoverStart={() => setIsOnSkills(true)}
                                    onHoverEnd={() => setIsOnSkills(false)}>
                                    <p className="pl-1">skills</p>
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
            )}
        </AnimatePresence>
    )
}

const boxStyle: React.CSSProperties = {
    width: "150px",
    height: "150px",
    minWidth: "150px",
    minHeight: "150px",
    backgroundColor: "#f8f9fa",
    color: "#212529",
    cursor: 'pointer'
}

const containerStyle: React.CSSProperties = {
    width: "auto",
    height: "auto",
    border: "2px solid #212529",
    background: "rgba(0, 0, 0, 0.85)"
}
