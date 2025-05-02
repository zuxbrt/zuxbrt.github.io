'use client';

import Background from "@/components/background/background";
import { Modal } from "@/components/modal/modal";
import Intro from "@/components/card/card";
import { useEffect, useState } from "react";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const [isCardVisible, setIsCardVisible] = useState(true);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [color1, setColor1] = useState<number>(0x000000);
  const [color2, setColor2] = useState<number>(0xffffff);
  const [scale, setScale] = useState<number>(1);
  const [backgroundColor, setBackgroundColor] = useState<any>(0x111111);

  useEffect(() => {

  }, [hoveredSection])

  const openSection = (section: string) => {
    setIsCardVisible(false);
    if(section === 'experience') setModalContent(<Experience/>);
    if(section === 'skills') setModalContent(<Skills/>);
    if(section === 'about') setModalContent(<About/>);
    if(section === 'contact') setModalContent(<Contact/>);
    open();
  }

  const handleSectionClose = () => {
    close();
    setModalContent(null);
    setIsCardVisible(true);
  }

  return (
    <>
      <Background color1={color1} scale={scale} color2={color2} backgroundColor={backgroundColor} />

      <div 
      // animate hide on click
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Intro setHoveredSection={setHoveredSection} onOpenSection={openSection} isVisible={isCardVisible} />
      </div>
      
      <Modal isOpen={modalOpen} onClose={() => handleSectionClose()}>
      {modalContent}
      </Modal>
    </>
  );
}
