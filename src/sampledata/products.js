// src/sampledata/products.js

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {string} category
 * @property {string} description
 * @property {string} image
 * @property {boolean} inStock
 * @property {number} rating
 * @property {number} stockQuantity
 */

/** @type {Product[]} */
export const products = [
    {
        id: 1,
        name: "Scandinavian Oak Dining Table",
        price: 899.99,
        category: "Dining",
        description: "Solid oak dining table with clean lines and natural wood finish. Seats 6 comfortably. Timeless Scandinavian design.",
        image: "https://www.pinterest.com/pin/4602397439253389952/",
        inStock: true,
        rating: 4.8,
        stockQuantity: 12
    },
    {
        id: 2,
        name: "Modern Velvet Sofa",
        price: 1249.99,
        category: "Living",
        description: "Luxurious 3-seater sofa upholstered in premium teal velvet. Deep seating and sturdy wooden frame.",
        image: "https://picsum.photos/id/21/300/300",
        inStock: true,
        rating: 4.7,
        stockQuantity: 8
    },
    {
        id: 3,
        name: "Minimalist Coffee Table",
        price: 299.99,
        category: "Living",
        description: "Round marble top coffee table with black metal legs. Perfect centerpiece for modern living rooms.",
        image: "https://picsum.photos/id/22/300/300",
        inStock: true,
        rating: 4.5,
        stockQuantity: 25
    },
    {
        id: 4,
        name: "Ergonomic Office Chair",
        price: 449.99,
        category: "Office",
        description: "High-back mesh office chair with lumbar support, adjustable height, and smooth swivel mechanism.",
        image: "https://picsum.photos/id/23/300/300",
        inStock: false,
        rating: 4.6,
        stockQuantity: 0
    },
    {
        id: 5,
        name: "King Size Bed Frame",
        price: 799.99,
        category: "Bedroom",
        description: "Solid wood king size bed frame with upholstered headboard. No box spring required.",
        image: "https://picsum.photos/id/24/300/300",
        inStock: true,
        rating: 4.9,
        stockQuantity: 15
    },
    {
        id: 6,
        name: "Industrial Bookshelf",
        price: 349.99,
        category: "Living",
        description: "5-tier industrial style bookshelf with black metal frame and reclaimed wood shelves.",
        image: "https://picsum.photos/id/25/300/300",
        inStock: true,
        rating: 4.4,
        stockQuantity: 18
    },
    {
        id: 7,
        name: "Dining Chair Set (4 pcs)",
        price: 399.99,
        category: "Dining",
        description: "Set of 4 elegant upholstered dining chairs with wooden legs. Comfortable and stylish.",
        image: "https://picsum.photos/id/26/300/300",
        inStock: true,
        rating: 4.7,
        stockQuantity: 22
    },
    {
        id: 8,
        name: "Nightstand with Drawer",
        price: 129.99,
        category: "Bedroom",
        description: "Compact wooden nightstand with one drawer and open shelf. Perfect beside the bed.",
        image: "https://picsum.photos/id/27/300/300",
        inStock: true,
        rating: 4.3,
        stockQuantity: 35
    },
    {
        id: 9,
        name: "L-Shaped Sectional Sofa",
        price: 1899.99,
        category: "Living",
        description: "Spacious L-shaped sectional with chaise lounge. Modular design and removable covers.",
        image: "https://picsum.photos/id/28/300/300",
        inStock: true,
        rating: 4.8,
        stockQuantity: 6
    },
    {
        id: 10,
        name: "TV Media Console",
        price: 549.99,
        category: "Living",
        description: "Modern TV stand with ample storage space for media devices and cable management.",
        image: "https://picsum.photos/id/29/300/300",
        inStock: true,
        rating: 4.5,
        stockQuantity: 14
    },
    {
        id: 11,
        name: "Dresser with Mirror",
        price: 699.99,
        category: "Bedroom",
        description: "6-drawer wooden dresser with attached mirror. Spacious storage for clothing and accessories.",
        image: "https://picsum.photos/id/30/300/300",
        inStock: true,
        rating: 4.6,
        stockQuantity: 9
    },
    {
        id: 12,
        name: "Bar Stool Set (2 pcs)",
        price: 189.99,
        category: "Dining",
        description: "Set of 2 counter-height bar stools with cushioned seats and black metal legs.",
        image: "https://picsum.photos/id/31/300/300",
        inStock: true,
        rating: 4.4,
        stockQuantity: 28
    },
    {
        id: 13,
        name: "Recliner Armchair",
        price: 549.99,
        category: "Living",
        description: "Comfortable single recliner with plush upholstery and smooth manual recline function.",
        image: "https://picsum.photos/id/32/300/300",
        inStock: true,
        rating: 4.7,
        stockQuantity: 11
    },
    {
        id: 14,
        name: "Writing Desk",
        price: 279.99,
        category: "Office",
        description: "Minimalist wooden writing desk with two drawers. Ideal for home office or study.",
        image: "https://picsum.photos/id/33/300/300",
        inStock: true,
        rating: 4.5,
        stockQuantity: 19
    },
    {
        id: 15,
        name: "Floating Wall Shelf Set",
        price: 89.99,
        category: "Living",
        description: "Set of 3 wooden floating shelves. Great for displaying decor and books.",
        image: "https://picsum.photos/id/34/300/300",
        inStock: true,
        rating: 4.2,
        stockQuantity: 45
    },
    {
        id: 16,
        name: "Queen Bed with Storage",
        price: 949.99,
        category: "Bedroom",
        description: "Queen size bed with hydraulic storage compartment underneath. Modern grey fabric upholstery.",
        image: "https://picsum.photos/id/35/300/300",
        inStock: false,
        rating: 4.8,
        stockQuantity: 0
    },
    {
        id: 17,
        name: "Glass Dining Table",
        price: 649.99,
        category: "Dining",
        description: "Tempered glass dining table with chrome legs. Seats 4–6 people elegantly.",
        image: "https://picsum.photos/id/36/300/300",
        inStock: true,
        rating: 4.3,
        stockQuantity: 7
    },
    {
        id: 18,
        name: "Leather Ottoman",
        price: 159.99,
        category: "Living",
        description: "Versatile brown leather ottoman that doubles as extra seating or footrest.",
        image: "https://picsum.photos/id/37/300/300",
        inStock: true,
        rating: 4.6,
        stockQuantity: 31
    },
    {
        id: 19,
        name: "Corner Desk with Hutch",
        price: 599.99,
        category: "Office",
        description: "Space-saving L-shaped corner desk with overhead hutch and built-in drawers.",
        image: "https://picsum.photos/id/38/300/300",
        inStock: true,
        rating: 4.4,
        stockQuantity: 13
    },
    {
        id: 20,
        name: "Accent Armchair",
        price: 379.99,
        category: "Living",
        description: "Stylish mid-century modern accent chair with wooden frame and mustard yellow upholstery.",
        image: "https://picsum.photos/id/39/300/300",
        inStock: true,
        rating: 4.9,
        stockQuantity: 16
    }
];

export default products;