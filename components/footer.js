class footerDatacloud extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
        <div class="row ms-2">
            <div class="col-5 d-flex align-items-center">
                <img src="/assets/logoBlanco.png" class="logo">
            </div>
            <div class="col-4">
                <p class="mb-1"><b>Dirección:</b></p>
                <p><i class="fa-solid fa-city ms-1 me-2"></i>Barrio El Socorro - Cartagena, Bolívar</p>
                <p><i class="fa-solid fa-map-location-dot ms-1 me-2"></i>Plan 332A Manzana 48 Lote 10</p>
                <p class="mt-3 mb-1"><b>Línea de atención al cliente:</b></p>
                <p><i class="fa-solid fa-phone ms-1 me-2"></i>+57 304 544 08 94</p>
                <p><i class="fa-solid fa-envelope ms-1 me-2"></i>comercial@datacloud.com.co</p>
            </div>
            <div class="col-3 d-flex flex-column">
                <p class="ms-4 mb-3"><b>Síguenos en:</b></p>
                <ul class="icons d-flex flex-wrap">
                    <li>
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

        footer {
            position: relative;
            background: #003857;
            color: #fff;
            padding: 2rem 3rem;
            margin-top: 8rem;
        }

        .logo {
            width: 70%;
            height: auto;
        }

        footer p {
            font-family: 'Rubik', sans-serif;
            margin: 0;
        }

        footer p i {
            font-size: 13px;
        }

        footer li {
            list-style: none;
        }

        footer .icons li {
            width: 48px;
            height: 48px;
            border: 1px solid;
            border-radius: 50%;
            margin-inline-end: 8px;
            cursor: pointer;
            transition: .3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        footer .icons li:hover {
            background: #fff;
            box-shadow: 0 0px 10px rgba(255, 255, 255, 0.6);
        }

        footer .icons li a {
            font-size: 26px;
            color: #fff;
            margin-inline: 8px;
        }

        footer .icons li:hover a {
            color: #003857;
        }
    </style>`;
  }
}

window.customElements.define("footer-datacloud", footerDatacloud);
