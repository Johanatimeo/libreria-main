export class miComponenteWeb extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <div class="article_card">
                <div class="article-imagen">
                    <img class="article-image" src="" alt="">
                </div>
                <div class="botones">
                    <button class="info-button">Info</button>
                    <button class="cesta-button">Comprar</button>
                </div>
            </div>
            <style>
                .article_card {
                     width: calc( 20rem);
                    height: 100%;
                    box-sizing: border-box;
                    text-align: center;
                    transition: background-color 0.3s ease;
                    border-radius: 1rem;
                    margin: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative; /* Para que los botones sean posicionados relativamente a la tarjeta */
                }

                .article-image {
                    width: 100%;
                    height: 100%;
                    max-height: 12rem;
                    object-fit: cover;
                    border-radius: 1rem;
                }

                .botones {
                    display: none;
                    position: absolute; 
                    bottom: 1rem; 
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 0.5rem;
                    padding: 0.5rem;
                }

                .article_card:hover .botones {
                    display: block;
                }

                .botones button {
                    margin: 0 0.5rem;
                }

                @media only screen and (max-width: 800px) {
                    .article_card {
                        width: 15rem;
                        padding: 0.5rem;
                        margin: 1rem;
                    }
                }
            </style>
        `;
        const root = this.attachShadow({ mode: "open" });
        root.appendChild(document.importNode(template.content, true));
    }

    connectedCallback() {
        const imageSrc = this.getAttribute('image-src');
        const labels = this.getAttribute('labels');
        const shadow = this.shadowRoot;

        shadow.querySelector('.article-image').src = imageSrc;
        shadow.querySelector('.article-image').alt = labels; 

        const infoButton = shadow.querySelector('.info-button');
        const cestaButton = shadow.querySelector('.cesta-button');
        infoButton.addEventListener('click', () => {
            window.location.href = `Info.html?labels=${labels}`;
        });
        cestaButton.addEventListener('click', () => {
            window.location.href = `cesta.html?labels=${labels}`;
        });
       
    }
}

