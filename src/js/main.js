window.onload = function() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');

    // Exibe o overlay ao carregar a página
    overlay.style.display = 'flex';

    // Adiciona um evento de clique no botão de fechar
    closeBtn.onclick = function() {
        overlay.style.display = 'none';
    };
};


let products = [
    {
        id: 0,
        image: "https://cdn.mobygames.com/covers/5102123-super-mario-world-snes-media.jpg",
        product: "Super Mario World",
        price: 100.0,
    },
    {
        id: 1,
        image: "https://cdn.mobygames.com/covers/4613050-the-legend-of-zelda-a-link-to-the-past-snes-media.jpg",
        product: "The Legend of Zelda",
        price: 100.0,
    },
    {
        id: 2,
        image: "https://cdn.mobygames.com/covers/3367155-chrono-trigger-snes-media.png",
        product: "Chrono Trigger",
        price: 100.0,
    },
    {
        id: 3,
        image: "https://cdn.mobygames.com/covers/3416904-mega-man-x-snes-media.jpg",
        product: " Rockman X",
        price: 100.0,
    },
    {
        id: 4,
        image: "https://cdn.mobygames.com/covers/4340177-disneys-goof-troop-snes-media.jpg",
        product: "Disney's Goof Troop",
        price: 100.0,
    },
    {
        id: 5,
        image: "https://cdn.mobygames.com/covers/6780851-street-fighter-alpha-2-snes-media.jpg",
        product: "Street Fighter Alpha 2",
        price: 100.0,
    },
];

// Função para mostrar um novo produto

function readProducts() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="Imagem do produto">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--price">
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="./src/images/trash.png" alt="Ícone do Lixo" onclick="deleteProduct(${product.id})">
                    <img class="edit" src="./src/images/pen.png" alt="Ícone de Edição" onclick="updateProduct(${product.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduct() {
    const form = document.getElementById("form-product");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = parseFloat(document.getElementById("price").value);
        const image = document.getElementById("image").value;
        if (name && price && image) {
            const newProduct = {
                id: products.length,
                image,
                product: name,
                price,
            };
            products.push(newProduct);
            readProducts();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduct(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        products = products.filter((product) => product.id !== id);
        readProducts();
        if (products.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduct(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        const name = prompt("Novo nome do produto:", product.product);
        const price = parseFloat(prompt("Novo valor do produto:", product.price));
        const image = prompt("Nova imagem do produto:", product.image);
        if (name && price && image) {
            product.product = name;
            product.price = price;
            product.image = image;
            readProducts();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Preencha todos os campos!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}

// Inicializar a leitura dos produtos
readProducts();

// Inicializar a criação de produtos
createProduct();
