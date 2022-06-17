import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
            <header>
            <h1>Welcome to my page</h1>
            </header>
            <img id="ImgAndreea" src="/static/images/andreea.jpg" alt="Andreea">
            <p>
            <h2>Andreea Fenesanu</h2><br>
            I am passionate about learning how
            things work, which is why I’ve, chose
            Veterinary Medicine. Also I’m an animal
            lover and an emphatic person.
            Beyond that, I’m curious, self-learning
            and I have a critical mind. I’ve decided to
            learn front-end development because I
            wanted to develop my IT skills gained in
            the high school period. I think front end
            development it’s the perfect way to
            combine my skills with my creative mind.
            </p>
            <a href="/CV" data-link id="ButtonDownload">View my CV</a>
        `;
  }
}
