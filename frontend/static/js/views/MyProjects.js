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
            <h2 style="margin: 2%; text-align: center;">Blog Home Page</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home1_1.png" alt="Andreea">
            <h2 style="margin: 2%; text-align: center;">Blog Contact Page</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home1_2.png" alt="Andreea">
            <h2 style="margin: 2%; text-align: center;">Player Box Game</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home3.png" alt="Andreea">
            <h2 style="margin: 2%; text-align: center;">Stopwatch App</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home4.png" alt="Andreea">
            <h2 style="margin: 2%; text-align: center;">Spaceship Generator with movement posibility</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home5.png" alt="Andreea">
            <h2 style="margin: 2%; text-align: center;">Avoiding Monsters Game</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home6.png" alt="Andreea">
            <h2 style="margin: 2%; text-align: center;">Simple Dog Breeds Blog Page</h2>
            <img id="ImgMyProjects" style="display: block;" src="/static/images/home7.png" alt="Andreea">
            <a href="https://github.com/AndreeaFene/SIIT_Andreea_Fenesanu" target="_blank" id="ButtonDownload">View my projects on GitHub</a>
        `;
    }
}