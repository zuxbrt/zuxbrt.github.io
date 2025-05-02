import { motion } from "framer-motion";
import Image from "next/image";


export default function Contact() {
    return (
        <div className="flex flex-row mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0 justify-around">

            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                target="blank" href="https://github.com/zuxbrt" rel="noopener noreferrer" title="github">
                <Image
                    src="/github.svg"
                    width={40}
                    height={40}
                    alt="Github"
                />
            </motion.a>
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                target="blank" className="mx-1" href="https://www.linkedin.com/in/zulfo-muhovi%C4%87-507889132/" rel="noopener noreferrer" title="linkedin">
                <Image
                    src="/linkedin.svg"
                    width={40}
                    height={40}
                    alt="LinkedIn"
                />
            </motion.a>

            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                target="blank" className="mx-1" href="mailto:zmuhovic97@gmail.com" rel="noopener noreferrer" title="mail">
                <Image
                    src="/mail.png"
                    width={40}
                    height={40}
                    alt="Mail"
                />
            </motion.a>
        </div>
    )
}