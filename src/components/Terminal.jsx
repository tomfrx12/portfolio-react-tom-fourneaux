import { motion } from "framer-motion";

// terminal desktop déplaçable ou carte mobile fixe.
export default function Terminal({ category, containerRef, initialX, initialY, onFocus, isFront, draggable = false }) {
    const terminalPrompt = (
        <>
            <span className="text-[#28c840]">tomfrx@portfolio</span>
            <span className="text-white/30">:</span>
            <span style={{ color: category.termColor }}>~/{category.prompt}</span>
            <span className="text-white/30">$</span>
        </>
    );

    return (
        <motion.div
            {...(draggable ? {
                drag: true,
                dragConstraints: containerRef,
                dragMomentum: false,
                initial: { x: initialX, y: initialY },
                whileDrag: { scale: 1.03, rotate: 0 },
                onPointerDown: onFocus,
            } : {})}
            style={draggable ? {
                position: "absolute",
                width: "420px",
                zIndex: isFront ? 20 : 5,
                touchAction: "none",
            } : undefined}
            className={`rounded-xl overflow-hidden border border-white/10 ${draggable ? "shadow-2xl cursor-grab active:cursor-grabbing" : "shadow-lg"}`}
            transition={draggable ? { type: "spring", stiffness: 300, damping: 25 } : undefined}
        >

            <div className="flex items-center gap-2 px-4 py-3 select-none bg-[#252525]">
                <span className="mx-auto text-[11px] font-mono text-white/40">
                    ~/{category.prompt} - bash
                </span>
            </div>

            <div className={`bg-[#0d0d0d] font-mono ${draggable ? "p-5 text-sm" : "p-4 text-xs"}`}>
                <div className={`flex flex-wrap items-center gap-1 ${draggable ? "mb-4 text-sm" : "mb-3 text-[11px]"}`}>
                    {terminalPrompt}
                    <span className="text-white ml-1">ls -la</span>
                </div>

                <div className={`ml-1 ${draggable ? "space-y-3 mb-5" : "space-y-[7px] mb-4"}`}>
                    {category.skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className={`flex items-center ${draggable ? "gap-4" : "gap-3"}`}
                            {...(draggable ? {
                                initial: { opacity: 0, x: -8 },
                                whileInView: { opacity: 1, x: 0 },
                                transition: { delay: 0.08 * i, duration: 0.25 },
                                viewport: { once: true },
                            } : {})}
                        >
                            <img src={skill.img} alt={skill.alt} className={`${draggable ? "w-6 h-6" : "w-4 h-4"} object-contain shrink-0`} />
                            <span className={`text-white/85 flex-1 ${draggable ? "font-semibold" : ""}`}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

                <div className={`flex flex-wrap items-center gap-1 ${draggable ? "text-sm" : "text-[11px]"}`}>
                    {terminalPrompt}
                    <motion.span
                        className={`inline-block ${draggable ? "w-[9px] h-[15px]" : "w-[7px] h-[13px]"} bg-white/70 ml-1 align-middle`}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </motion.div>
    )
};
