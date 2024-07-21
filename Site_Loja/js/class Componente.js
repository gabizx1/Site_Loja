class Componente extends HTMLElement {
    connectedCallback() {
        const div = document.createElement("div");
        div.className = "navbar navbar-expand-lg navbar-light fixed-top style=background-color:#96cbff";
        div.innerHTML = `
            <a class="navbar-brand" href="#">Livros mais baratos.com</a>
            <form class="form-inline" style="display: flex; justify-content: space-evenly; width:350px;">
                <input class="d-flex form-control mr-sm-2" type="search" placeholder="Pesquisar"
                    aria-label="Search" style="height: 30px; border-radius: 5px;">
                <button class="btn btn-primary my-2" type="submit" style="display: flex; height: 30px; align-items: center;">Pesquisar</button>
            </form>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="site_loja.html">Página Inicial <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Romance</a>
                        <!-- Submenu para Romance -->
                        <div class="submenu">
                            <a href="produto_hip.html">Comédia Romantica</a><br>
                            <a href="produto_princi.html">Fantasia</a><br>
                            <a href="produto_extraor.html">Infanto Juvenil</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Terror</a>
                        <!-- Submenu para Terror -->
                        <div class="submenu">
                            <a href="Produto_king.html">Clássico</a><br>
                            <a href="produto_1618.html">Sobrenatural</a><br>
                            <a href="produto_psi.html">Terror psicológico</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Literatura</a>
                        <!-- Submenu para Literatura -->
                        <div class="submenu">
                            <a href="produto_mem.html">Machado de Assis</a><br>
                            <a href="produto_sen.html">José de Alencar</a><br>
                            <a href="produto_ham.html">William Shakespeare</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="carrinho.html">
                            <span class="icon"><i class="bi bi-cart"></i></span>
                            <span id="cart-badge">0</span>
                        </a>
                    </li>
                </ul>
            </div>`;
        this.appendChild(div);
    }
}
customElements.define("componente-novo", Componente);