// import "/src/css/style-competences.css";

import {Text} from "../components/texte";

function Competences() {
    return (
    <>
        <Text tag="h1" name="h1" color="white" background="black" className="m-[20px] py-[10px] px-[20px]">Mes compétences</Text>
        <div className="lg:flex lg:items-center">
            <div className="m-[20px] bg-[#121212] rounded-t-[1rem] overflow-hidden lg:w-[75%]">
                <div className="bg-[#333333] p-[5px]">
                    <Text tag="h2" name="h2" color="white" className="my-2">Langages Informatiques</Text>
                </div> 
                <div className="p-[10px] border-1 border-solid border-white rounded-[0px 0px 16px 16px] border-t-0">
                    <ul className="p-0">
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="python">
                                <Text tag="span" color="black" className="ml-[10px]">Python</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="html">
                                <Text tag="span" color="black" className="ml-[10px]">HTML</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="css">
                                <Text tag="span" color="black" className="ml-[10px]">CSS</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="js">
                                <Text tag="span" color="black" className="ml-[10px]">JavaScript</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="php">
                                <Text tag="span" color="black" className="ml-[10px]">PHP</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="sql">
                                <Text tag="span" color="black" className="ml-[10px]">SQL</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="linux">
                                <Text tag="span" color="black" className="ml-[10px]">Linux:Debian</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="react">
                                <Text tag="span" color="black" className="ml-[10px]">React.js</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="tailwind">
                                <Text tag="span" color="black" className="ml-[10px]">TailwindCSS</Text>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="m-[20px] bg-[#121212] rounded-t-[1rem] overflow-hidden lg:w-[75%]">
                <div className="bg-[#333333] p-[5px]">
                    <Text tag="h2" name="h2" color="white" className="my-2">Autres compétences</Text>
                </div>
                <div className="p-[10px] border-1 border-solid border-white rounded-[0px 0px 16px 16px] border-t-0">
                    <ul className="p-0">
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="canva">
                                <Text tag="span" color="black" className="ml-[10px]">Canva</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="photoshop">
                                <Text tag="span" color="black" className="ml-[10px]">Photoshop</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="illustrator">
                                <Text tag="span" color="black" className="ml-[10px]">Illustrator</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="indesign">
                                <Text tag="span" color="black" className="ml-[10px]">InDesign</Text>    
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="wordpress">
                                <Text tag="span" color="black" className="ml-[10px]">Wordpress</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="github">
                                <Text tag="span" color="black" className="ml-[10px]">Github</Text>
                            </div>
                        </li>
                        <li className="list-none w-full bg-white rounded-sm mb-[10px] hover:bg-[var(--color-grey)]">
                            <div className="py-[8px] pr-[10px] rounded-sm transition-[width] duration-300 ease-in-out bg-[#0e6b0e] animate-[fadeIn_1.5s_ease_forwards] w-[0%] hover:bg-[#149414]" id="figma">
                                <Text tag="span" color="black" className="ml-[10px]">Figma</Text>
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
