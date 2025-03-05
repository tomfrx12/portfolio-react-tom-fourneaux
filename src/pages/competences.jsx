import "/src/css/style-competences.css";

function Competences() {
    return (
    <>
    <main>
        <h1>Mes compétences</h1>
        <div className="box">
            <div className="header_box">
                <h2>Langages Informatiques</h2>
            </div>
            <div className="inside_box">
                <ul>
                    <li>
                        <div id="python">
                            <span>Python</span>
                        </div>
                    </li>
                    <li>
                        <div id="html">
                            <span>HTML</span>
                        </div>
                    </li>
                    <li>
                        <div id="css">
                            <span>CSS</span>
                        </div>
                    </li>
                    <li>
                        <div id="js">
                            <span>JavaScript</span>
                        </div>
                    </li>
                    <li>
                        <div id="php">
                            <span>PHP</span>
                        </div>
                    </li>
                    <li>
                        <div id="sql">
                            <span>SQL</span>
                        </div>
                    </li>
                    <li>
                        <div id="linux">
                            <span>Linux: Debian</span>
                        </div>
                    </li>
                    <li>
                        <div id="react">
                            <span>React.js</span>
                        </div>
                    </li>
                    <li>
                        <div id="tailwind">
                            <span>Tailwind CSS</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="box">
            <div className="header_box">
                <h2>Autres compétences</h2>
            </div>
            <div className="inside_box">
                <ul>
                    <li>
                        <div id="canva">
                            <span>Canva</span>
                        </div>
                    </li>
                    <li>
                        <div id="photoshop">
                            <span>Photoshop</span>
                        </div>
                    </li>
                    <li>
                        <div id="illustrator">
                            <span>Illustrator</span>
                        </div>
                    </li>
                    <li>
                        <div id="indesign">
                            <span>InDesign</span>
                        </div>
                    </li>
                    <li>
                        <div id="wordpress">
                            <span>Wordpress</span>
                        </div>
                    </li>
                    <li>
                        <div id="github">
                            <span>Github</span>
                        </div>
                    </li>
                    <li>
                        <div id="figma">
                            <span>Figma</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    </>
    );
}

export default Competences;
