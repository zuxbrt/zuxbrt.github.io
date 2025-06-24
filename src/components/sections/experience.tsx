import { motion } from "framer-motion";

export default function Experience() {
    return (


        <div className="flex flex-row">
            <div className="relative mt-5 mb-2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: 'easeOut' }}
                    style={lineStyles}>
                </motion.div>
                <motion.div
                    initial={{ top: "100%", opacity: 0 }}
                    animate={{ top: "0", opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                        display: "block",
                        position: "absolute",
                        top: "100%",
                        left: "-6px",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#dee2e6",
                    }}
                />
            </div>



            <div className="flex flex-col ml-3">

                <div className="flex flex-col px-2 py-1 mb-5">
                    <div className="flex flex-row">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <a
                                className="text-xl font-semibold decoration-1" target="blank" href="https://www.klika.us/" rel="noopener noreferrer" title="Klika">
                                Klika
                            </a>
                        </motion.div>

                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-sm mt-1">
                        21.06.2025
                    </motion.p>
                </div>


                <div className="flex flex-col px-2 py-1 mb-5">
                    <div className="flex flex-row">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <a
                                className="text-xl font-semibold decoration-1" target="blank" href="https://purplekey.ba/" rel="noopener noreferrer" title="PurpleKey">
                                Purple Key Creative Agency&nbsp;|&nbsp;
                            </a>
                            <a
                                className="text-xl font-semibold decoration-1" target="blank" href="https://purplematrix.co.uk/" rel="noopener noreferrer" title="Purple Matrix">
                                Purple Matrix
                            </a>
                        </motion.div>

                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-sm mt-1">
                        15.01.2021 - 20.06.2025
                    </motion.p>
                </div>

                <div className="flex flex-col px-2 py-1 mb-5">
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: 'easeOut' }}
                        className="text-xl font-semibold decoration-1" style={fitContent} target="blank" href="https://smartlab.ba/" rel="noopener noreferrer" title="SmartLab">
                        Smartlab
                    </motion.a>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                        className="text-sm mt-1">
                        15.08.2019 - 15.01.2021
                    </motion.p>
                </div>

                <div className="flex flex-col px-2 py-1 decoration-1">
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, ease: 'easeOut' }}
                        className="text-xl font-semibold" target="blank" style={fitContent} href="https://www.tech387.com/" rel="noopener noreferrer" title="Tech387">
                        Tech387
                    </motion.a>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="text-sm mt-1">
                        01.05.2018 - 01.03.2019
                    </motion.p>
                </div>

            </div>

        </div>

    )
}

const lineStyles: React.CSSProperties = {
    display: "block",
    position: "relative",
    width: "1px",
    height: "100%",
    minHeight: "100px",
    backgroundColor: "#f8f9fa",
    opacity: 0
}

const fitContent: React.CSSProperties = {
    width: "fit-content"
}