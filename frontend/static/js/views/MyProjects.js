import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MyProjects");
    }

    async getHtml() {
        return `
        <header>
        <h1>My Projects</h1>
        </header>
            <div class="MyProjectStyle">
            <div class="SubProject">
            <p><a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu/tree/main/01%20week/my%20blog" download>Blog Home Page</a></p>
            <img id="ImgMyProjects" src="https://andreeafene.github.io/AndreeaFene/frontend/static/images/home1_1.PNG alt="Andreea">
            </div>
            <div class="SubProject">
            <p><a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu/tree/main/06_week_homework" download>Player Box Game</a></p>
            <img id="ImgMyProjects" src="https://andreeafene.github.io/AndreeaFene/frontend/static/images/home3.PNG" alt="Andreea">
            </div>
            <div class="SubProject">
            <p><a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu/tree/main/11_week_homework" download>Avoiding Monsters Game</a></p>
            <img id="ImgMyProjects" src="https://andreeafene.github.io/AndreeaFene/frontend/static/images/home6.PNG" alt="Andreea">
            </div>
            <div class="SubProject">
            <p><a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu/tree/main/07_week_homework" download>Stopwatch App</a></p>
            <img id="ImgMyProjects" src="https://andreeafene.github.io/AndreeaFene/frontend/static/images/home4.PNG" alt="Andreea">
            </div>
            <div class="SubProject">
            <p><a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu/tree/main/10_week_homework" download>Spaceship Generator</a></p>
            <img id="ImgMyProjects" src="https://andreeafene.github.io/AndreeaFene/frontend/static/images/home5.PNG" alt="Andreea">
            </div>
            <div class="SubProject">
            <p><a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu/tree/main/optional_week_2" download>Simple Dog Breeds Blog Page</a></p>
            <img id="ImgMyProjects" src="https://andreeafene.github.io/AndreeaFene/frontend/static/images/home7.PNG" alt="Andreea">
            </div>
            </div>
        `;
    }
}