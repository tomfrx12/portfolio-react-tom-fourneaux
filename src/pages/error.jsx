import { motion } from "framer-motion";
import { Link } from "react-router";
import { opacityOn, fadeUp } from "../components/anime_motion";

function Error() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={opacityOn}
            className="flex flex-col items-center justify-center min-h-[80vh] px-5 text-center gap-6"
        >
            <motion.span
                variants={fadeUp}
                className="text-[7rem] sm:text-[10rem] font-black leading-none"
                style={{ color: 'var(--color-primary)' }}
                aria-hidden="true"
            >
                404
            </motion.span>

            <motion.h1
                variants={fadeUp}
                className="text-[28px] sm:text-[36px] font-black text-black dark:text-white"
            >
                Page introuvable
            </motion.h1>

            <motion.p
                variants={fadeUp}
                className="text-base sm:text-[19px] text-black/60 dark:text-white/60 max-w-md"
            >
                La page que vous recherchez n'existe pas ou a été déplacée.
            </motion.p>

            <motion.div variants={fadeUp}>
                <Link
                    to="/"
                    className="relative group inline-block cursor-pointer text-center no-underline select-none mt-2"
                >
                    <span className="relative block dark:bg-(--color-primary) bg-(--color-red-background-dark) px-6 py-3 text-[#EBEBEB] font-bold transition-all duration-500 rounded-xl">
                        Retour à l'accueil
                    </span>
                    <svg
                        className="pointer-events-none rounded-xl absolute h-full w-full overflow-visible scale-y-[-1] transition-transform duration-1000 ease-in-out delay-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:delay-800"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="-8"
                            y="50"
                            width="100%"
                            height="100%"
                            rx="12"
                            fill="none"
                            stroke="#EBEBEB"
                            strokeWidth="2"
                            pathLength="100"
                            className="[stroke-dasharray:100] [stroke-dashoffset:100] rounded-xl transition-all duration-1000 ease-in-out group-hover:[stroke-dashoffset:0]"
                        />
                    </svg>
                </Link>
            </motion.div>
        </motion.div>
    );
}

export default Error;
