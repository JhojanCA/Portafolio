class navbarJC extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav id="navdata" class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a id="img2" class="navbar-brand" href="#">
                <img src="/assets/logo.png" width="60">
            </a>
            <button id="menu" class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav me-auto"></ul>
                    <div class="d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Inicio
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-solid fa-server"></i> Servicios
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-solid fa-chalkboard-user"></i> Proyectos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-solid fa-phone-volume"></i> Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

        :root {
            --fondo: #141921;
        }

        .navbar {
            transition: .4s ease-in-out;
            position: fixed;
            width: 100%;
            z-index: 9999;
        }

        .box {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .bg-blue-dark {
            background: var(--fondo);
        }

        .navbar-brand {
            margin-left: 4rem;
        }

        .navbar-nav {
            margin-right: 6rem;
        }

        .navbar-toggler {
            border: none;
            margin-inline: 1rem;
        }

        .nav-link {
            font-family: 'Rubik', sans-serif;
            display: inline-block;
            position: relative;
            line-height: normal;
            text-decoration: none;
            transition: all 0.2s ease;
            border-bottom: 2px solid transparent;
            margin-inline: 10px;
            cursor: pointer;
        }

        .nav-link::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background: #fff;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.2s ease-in-out;
        }

        .nav-link:hover::after {
            transform-origin: left;
            transform: scaleX(1);
        }

        .navbar .offcanvas-body .nav-link {
            color: #fff;
        }

    </style>`;
  }
}

window.customElements.define("navbar-jc", navbarJC);

window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navdata");

  if (window.scrollY > 0) {
    navbar.classList.add("bg-blue-dark");
    navbar.classList.add("box");
  } else {
    navbar.classList.remove("bg-blue-dark");
    navbar.classList.remove("box");
  }
});
