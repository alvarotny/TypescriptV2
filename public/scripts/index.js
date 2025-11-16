// @ts-check

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {Object} category
 * @property {string[]} images
 */

(async () => {
  const mycart = [];
  /** @type {Product[]} */
  const products = [];
  const limit = 2;

  async function getProducts() {
    const response = await fetch('http://api.escuelajs.co/api/v1/products', { method: "GET" });
    const data = await response.json();
    products.push(...data); // agrega los productos al arreglo
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price; // propiedad correcta
    }
    return total;
  }
    /**
   * Agrega un producto al carrito por su índice
   * @param {number} index
   */
  function addProduct(index) {
    if (getTotal() <= limit) {
      mycart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);

  const total = getTotal();
  console.log(total);

  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  };

  const rta = `${person.name} ${person.lastName} - ${limit}`;
  console.log(rta);

})();
