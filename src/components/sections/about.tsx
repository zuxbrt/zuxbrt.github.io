import { motion } from "framer-motion";

export default function About() {
    return (
        <>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl">
                I&apos;m a passionate full-stack developer with hands-on experience in building dynamic web applications across diverse industries.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-light mt-5">
                Throughout my career, I&apos;ve designed and implemented solutions ranging from developing APIs for mobile apps, integrating third-party APIs, to creating full-stack applications and custom solutions. I thrive on tackling challenges and delivering results that make a real impact.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-light mt-4">
                My work philosophy is centered on a growth mindset: I actively seek opportunities to learn, adapt, and improve through feedback and self-reflection.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-light mt-4">
                In my decision-making process, I balance data-driven insights with intuitive thinking, carefully considering both the numbers and the context to make thoughtful, informed choices.            </motion.p>

        </>
    )
}
