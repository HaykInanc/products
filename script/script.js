let products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'ролики',
        price: 15000
    },
    {
        id: 3,
        title: 'самокат',
        price: 12000
    },
    {
        id: 4,
        title: 'лыжи',
        price: 23000
    },
    {
        id: 5,
        title: 'сноуборд',
        price: 20000
    }
];

const rootElem = document.querySelector('#root');
const productContainer = document.createElement('div');
productContainer.classList.add('product-container');
rootElem.append(productContainer);

function createDeleteButton(){
    const button = document.createElement('button');
    button.innerText = 'X';
    button.classList.add('delete-btn');
    return button
}

function emptyList(){
    const p_elem = document.createElement('p');
    p_elem.innerText = "Товаров нет.";
    return p_elem
}


function createProductElement(id, title, price){
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const delete_btn = createDeleteButton();

    delete_btn.addEventListener('click', () => deleteProduct(id));

    title_p.innerText = title;
    price_p.innerText = price;
    container.append(title_p, price_p, delete_btn);
    container.classList.add('product-item');
    container.addEventListener('click', event =>{
        event.target.classList.add('active');
    });
    return container
}


function render(){
    productContainer.innerText = '';
    if (products.length === 0){
        productContainer.append(emptyList());
    }else{
        products.forEach(product => {
            const productElement = createProductElement(product.id, product.title, product.price);
            productContainer.append(productElement);
        })
    }
}

function deleteProduct(id){
    products = products.filter(product => product.id !== id);
    render();
}

render();


const add_form = document.querySelector('#add_form');

add_form.addEventListener('submit', event => {
    event.preventDefault();
    const input_title = event.target.title;
    const input_price = event.target.price;

    const new_product = {
        id: Date.now(),
        title: input_title.value,
        price: input_price.value
    };

    products.push(new_product);
    render();
    input_title.value = '';
    input_price.value = '';
});
