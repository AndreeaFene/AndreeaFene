import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("My CV");
    }

    async getHtml() {
        return `
        <header>
        <h1>My CV</h1>
        </header>
        <p><a href="/frontend/static/pdf/cv_scoala_informala.pdf" id="ButtonDownload" download>Download my CV</a></p>
        <p>
        <h2>🐈About Me</h2><br>
        I’ve decided to learn front-end development because I wanted to develop my IT skills gained in the high school period. <br>
        I think front end development it’s the perfect way to combine my skills with my creative mind. <br><br><br>

        <h2>🖺Education</h2><br>
        2022: Informal IT school, learning Java script programming language <br><br><br>

        <h2>💼Work Experience</h2><br>
        2022-prezent: Informal IT school, homework and optional work<br><br><br>
        <h2>💃Skill Set</h2><br>
        · Languages: English, Spanish, French <br>
        · Driver license: B <br>
        · Well organized <br>
        · Creative <br>
        · Languages and Methods: C++, HTML, CSS, JavaScript <br>
        · Software: Microsoft Office</p>
        </div>
        `
    }
}
