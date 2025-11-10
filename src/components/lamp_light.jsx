import React, { useState } from "react";

export default function Lamp({ itsDark, setItsDark }) {
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setItsDark(!itsDark);
        setPressed(true);
    };

    const handleAnimationEnd = () => {
        setPressed(false);
    };

    return (
        <div className="flex flex-col items-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.67 155.95" className="z-1 w-32 h-auto">
                <defs>
                    <style>
                        {`
                        .color-lamp-1 { fill: #b2b2d8; }
                        .color-lamp-2 { fill: #fff9cc; }
                        .color-lamp-3 { fill: #af91db; }

                        /* Animation clignotement plus douce */
                        @keyframes flicker {
                            0%, 15%, 30%, 45%, 60%, 75% { opacity: 0; }
                            7%, 22%, 37%, 52%, 67%, 82% { opacity: 0.45; }
                            100% { opacity: 0.45; }
                        }

                        .light-flicker {
                            animation: flicker 1.5s linear forwards;
                            mix-blend-mode: luminosity;
                        }
                        `}
                    </style>
                </defs>

                {/* Lampe */}
                <g id="lamp">
                    <path className="color-lamp-2" d="M38.07,143.07c0,7.11-5.26,12.88-11.75,12.88s-11.74-5.77-11.74-12.88,5.26-12.86,11.74-12.86,11.75,5.74,11.75,12.86Z"/>
                    <rect className="color-lamp-3" x="25.26" width="2.14" height="91.08" />
                    <path className="color-lamp-1" d="M29.27,93.53v-2.79c.05-1.31-.96-2.41-2.27-2.47h-1.37c-1.3.06-2.31,1.17-2.26,2.47v2.79c1.89-.77,4-.77,5.89,0Z"/>
                    <path className="color-lamp-3" d="M35,102.46v8.75l-.36-.08c-5.05-.78-10.18-.85-15.25-.19l-1.36.19-.37.08v-8.75c0-.47.04-.94.1-1.41.07-.5.17-1,.32-1.48l.05-.18c.07-.24.16-.47.26-.7l.18-.41c.07-.15.14-.3.22-.44.29-.53.62-1.04,1-1.51.43-.53.9-1,1.43-1.43l.5-.36c.17-.12.35-.24.54-.34.18-.11.36-.22.55-.31l.56-.24c.93-.38,1.93-.58,2.93-.58,1.03,0,2.05.19,3,.58,2.59,1.08,4.54,3.3,5.3,6,.27.95.41,1.94.4,2.93Z"/>
                    <path className="color-lamp-3" d="M52.67,143.07H0l1.58-12.67c1-7.93,8.11-17.48,16.1-19.2l.37-.08,1.43-.2c5.04-.64,10.15-.57,15.18.2l.34.09c8,1.72,15.14,11.27,16.11,19.2l1.56,12.66Z"/>
                </g>
            </svg>

            {/* Lumière */}
            {itsDark && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.79 258.44" className="z-0 absolute w-[370px] h-[365px] top-[340px]">
                    <g className="light-flicker">
                        <path d="M81.895,0L0,258.44h248.79L166.895,0h-85Z" fill="#fff4c5"/>
                    </g>
                </svg>
            )}

            <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" className="z-0 absolute top-[-100px] left-[210px] w-20 h-150">

                <style>
                    {`
                    @keyframes pressDown {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(8px); }
                        100% { transform: translateY(0); }
                    }

                    .pressed {
                        animation: pressDown 1s ease forwards;
                    }
                    `}
                </style>


                <g className={`cursor-pointer ${pressed ? "pressed" : ""}`} onClick={handleClick} onAnimationEnd={handleAnimationEnd}>
                    <line x1="50" y1="-1000" x2="50" y2="160" stroke="#b8a070" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="50" cy="160" r="14" fill="#d4c4a0" stroke="#8d7a4c" strokeWidth="1.5"/>
                    <circle cx="47" cy="158" r="6" fill="white" opacity="0.5"/>
                </g>
            </svg>
        </div>
    );
}
