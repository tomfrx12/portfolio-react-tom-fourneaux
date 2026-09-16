import { useRef, useState } from "react";
import { motion } from "framer-motion";
import categories from "../data/competences.json";
import Terminal from "../components/Terminal";

export default function Competences() {
    const containerRef = useRef(null);
    const [activeWindow, setActiveWindow] = useState(null);

    const terminalPositions = [
        { x: 20,  y: 20  },
        { x: 460, y: 60  },
        { x: 220, y: 380 },
    ];

    return (
        <div className="py-20">
            {/* Desktop */}
            <motion.div
                className="hidden lg:block mx-5 lg:mx-8 rounded-2xl overflow-hidden border border-white/10"
                style={{ background: "linear-gradient(135deg, #07070f 0%, #0f0a1a 50%, #07070f 100%)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center justify-between px-5 py-2 border-b border-white/5">
                    <span className="text-[11px] font-mono text-white/25">portfolio@desktop ~ déplacez les fenêtres</span>
                </div>

                <div ref={containerRef} className="relative w-full h-[850px]">
                    {categories.map((category, i) => (
                        <Terminal
                            key={category.label}
                            category={category}
                            containerRef={containerRef}
                            initialX={terminalPositions[i].x}
                            initialY={terminalPositions[i].y}
                            onFocus={() => setActiveWindow(category.label)}
                            isFront={activeWindow === category.label}
                            draggable
                        />
                    ))}
                </div>
            </motion.div>

            {/* Mobile */}
            <div className="lg:hidden mx-5 flex flex-col gap-4">
                {categories.map(category => (
                    <Terminal key={category.label} category={category} />
                ))}
            </div>

        </div>
    );
}
