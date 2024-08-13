document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("lista-produtos");

    function loadProduct() {
        fetch('http://localhost:3000/livros')
            .then((response) => response.json())
            .then((data) => {
                data.forEach((product) => {
                    const productHTML = `
                    <div class="col-md-4">
                        <product-card>
                            <img slot="bookimg" src="${product.imageUrl}">
                            <h5 slot="bookname">${product.name}</h5>
                            <p slot="bookdesc">${product.description}</p>
                            <a slot="booklink" href="produto_hip.html" class="btn btn-primary add-to-cart-btn">Ver
                                mais</a>
                            <button class="btn btn-primary add-to-cart-btn" slot="bookprice"
                                onclick="addToCart(${product.id},'${product.name}', ${product.price})">Adicionar ao
                                Carrinho</button>
                        </product-card>
                    </div>
                    `;
                    productList.insertAdjacentHTML("beforeend", productHTML);
                });
            })
            .catch((error) => console.error("Erro ao carregar produtos:", error))
    }

    loadProduct()
});