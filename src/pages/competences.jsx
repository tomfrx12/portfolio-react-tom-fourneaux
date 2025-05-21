// import "/src/css/style-competences.css";

// import Text from "../components/texte";

function Competences() {
    return (
    <>
        <h1 className="text-center m-[20px] py-[10px] px-[20px] bg-black lg:text-2xl">Mes compétences</h1>
        {/* <Text tag="h1" name="h1">Mes compétences</Text> */}
        <div className="flex items-center flex-col">
            <div className="m-[20px] bg-[#121212] rounded-t-[1rem] overflow-hidden lg:w-[75%]">
                <div className="bg-[#333333] p-[5px]">
                    <h2 className="mb-[10px] text-center lg:text-xl">Langages Informatiques</h2>
                </div> 
                <div className="p-[10px] border-1 border-solid border-white rounded-[0px 0px 16px 16px] border-t-0">
                    <ul className="p-0">
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="python">
                                <span className="ml-[10px] text-black">Python</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="html">
                                <span className="ml-[10px] text-black">HTML</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="css">
                                <span className="ml-[10px] text-black">CSS</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="js">
                                <span className="ml-[10px] text-black">JavaScript</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="php">
                                <span className="ml-[10px] text-black">PHP</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="sql">
                                <span className="ml-[10px] text-black">SQL</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="linux">
                                <span className="ml-[10px] text-black">Linux:Debian</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="react">
                                <span className="ml-[10px] text-black">React.js</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="tailwind">
                                <span className="ml-[10px] text-black">TailwindCSS</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="m-[20px] bg-[#121212] rounded-t-[1rem] overflow-hidden lg:w-[75%]">
                <div className="bg-[#333333] p-[5px]">
                    <h2 className="mb-[10px] text-center lg:text-xl">Autres compétences</h2>
                </div>
                <div className="p-[10px] border-1 border-solid border-white rounded-[0px 0px 16px 16px] border-t-0">
                    <ul className="p-0">
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="canva">
                                <span className="ml-[10px] text-black">Canva</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="photoshop">
                                <span className="ml-[10px] text-black">Photoshop</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="illustrator">
                                <span className="ml-[10px] text-black">Illustrator</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="indesign">
                                <span className="ml-[10px] text-black">InDesign</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="wordpress">
                                <span className="ml-[10px] text-black">Wordpress</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="github">
                                <span className="ml-[10px] text-black">Github</span>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="figma">
                                <span className="ml-[10px] text-black">Figma</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export default Competences;
