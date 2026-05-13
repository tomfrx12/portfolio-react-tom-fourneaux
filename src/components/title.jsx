import { motion } from "framer-motion";
import { fadeUp } from "./anime_motion";
import { Text } from "./texte";

export default function Title({ itsDark, setItsDark, text }) {
    return (
        <motion.div
            className="relative h-[350px] flex items-center justify-center overflow-hidden"
            variants={fadeUp}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 bg-[url(/img/illustration-index.png)] bg-fixed bg-cover bg-center blur-xs z-0"></div>
            <motion.div
                className="absolute inset-0 z-1"
                animate={{
                    background: [
                        `${itsDark ? "linear-gradient(400deg, rgba(175,30,21,0.72) -100%, rgba(44,17,82,0.72) 100%)" : "linear-gradient(200deg, rgba(175,30,21,0.72) 0%, rgba(44,17,82,0.72) 100%)"}`
                    ]
                }}
            ></motion.div>
            <motion.div className="relative z-10 text-center" initial={{ opacity: 0, letterSpacing: "0.5em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                <Text tag="h2" name="h2" className="text-white font-black text-3xl lg:text-5xl uppercase">{text}</Text>
            </motion.div>
        </motion.div>
    )    
};