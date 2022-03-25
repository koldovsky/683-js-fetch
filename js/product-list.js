(async function() {

    let rate = 1;
    let products;

    async function convertCurrency() {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const currencies = await response.json();
        const currencyName = document.querySelector('.currency').value;
        rate = currencies.rates[currencyName];
        renderProducts();
    }

    function renderProducts() {
        const productsContainer = document.querySelector('.main-products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += 
            `<article class="card col-12 col-sm-6 col-md-4 col-lg-3">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#product-info-modal">Info</a>
                <a href="#" class="btn btn-primary">Buy - ${(product.price * rate).toFixed(2)}</a>
                </div>
            </article>`;
        }
    }

    const response = await fetch('products.json');
    products = await response.json();
    renderProducts();

    document.querySelector('.convert').addEventListener('click', convertCurrency);

    // Promise 
    // fetch('products.json')
    //  .then( response => response.json() ) 
    //  .then( products => renderProducts(products) );

    // AJAX
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         const products = JSON.parse(xhr.responseText);
    //         renderProducts(products);
    //     }
    // }
    // xhr.open('get', 'products.json', true);
    // xhr.send();

})();