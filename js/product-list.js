(function() {

    const products = [
        {
            id: 1,
            title: 'Baby Yoda',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            price: 10.99,
            image: 'img/baby-yoda.svg'
        },
        {
            id: 2,
            title: 'Banana',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            price: 9.99,
            image: 'img/banana.svg'
        },
        {
            id: 3,
            title: 'Girl',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            price: 8.99,
            image: 'img/girl.svg'
        },
        {
            id: 4,
            title: 'Viking',
            description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            price: 8.99,
            image: 'img/viking.svg'
        }
    ];

    function renderProducts(products) {
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
                <a href="#" class="btn btn-primary">Buy - ${product.price}</a>
                </div>
            </article>`;
        }
    }

    renderProducts(products);

})();