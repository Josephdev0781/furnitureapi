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
        image: "https://i.pinimg.com/1200x/16/22/3c/16223c882122c40b1010e914f7fb2d2b.jpg",
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
        image: "https://i.pinimg.com/1200x/83/44/9d/83449dd5611c27cce50f4e5d1fb40684.jpg",
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
        image: "https://i.pinimg.com/1200x/95/5e/aa/955eaa7c7a9f93b14f94b8f6233d2029.jpg",
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
        image: "https://i.pinimg.com/736x/1b/00/d0/1b00d014f63cab30dea27e8b6a630e59.jpg",
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
        image: "https://i.pinimg.com/1200x/b5/5d/8f/b55d8fcf9070bda8e7095f10d0105841.jpg",
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
        image: "https://i.pinimg.com/1200x/85/7f/8c/857f8cde27a093d08b93ae278f17bb15.jpg",
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
        image: "https://i.pinimg.com/736x/40/ae/35/40ae3558d974c17b5b98065e333d7034.jpg",
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
        image: "https://i.pinimg.com/1200x/a0/8d/97/a08d97a7440d317c6cd65943128ecea8.jpg",
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
        image: "https://i.pinimg.com/736x/a1/58/d2/a158d266deaa2985ed633b40c527e99d.jpg",
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
        image: "https://i.pinimg.com/1200x/c0/b4/13/c0b413d7a40b3fc9d38b9b01b628dff6.jpg",
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
        image: "https://i.pinimg.com/736x/fe/92/9d/fe929ddd9a555d36c0981a3555a6fb0d.jpg",
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
        image: "https://i.pinimg.com/736x/49/29/9f/49299fe09272f560270be1cf611374a8.jpg",
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
        image: "https://i.pinimg.com/736x/c3/82/a6/c382a6065f077d82a58b4ec28ece8334.jpg",
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
        image: "https://i.pinimg.com/1200x/49/74/c5/4974c5ac8b35b45297acab25721b703c.jpg",
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
        image: "https://i.pinimg.com/736x/0b/15/eb/0b15ebae88c2e3095f5ad45b23b0af11.jpg",
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
        image: "https://i.pinimg.com/1200x/1a/dc/4f/1adc4f6f2b7df9b6da3802df29f23395.jpg",
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
        image: "https://i.pinimg.com/736x/ce/c4/30/cec4306d6f4b32f569c18bbf8931f51b.jpg",
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
        image: "https://i.pinimg.com/736x/0b/e0/29/0be029216a724366168d92a4eeec2db7.jpg",
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
        image: "https://i.pinimg.com/736x/52/01/81/520181bf411fe8129c0eba7c7a22670d.jpg",
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
        image: "https://i.pinimg.com/1200x/31/7f/d5/317fd5a8cd30fa5b680fc180387693f7.jpg",
        inStock: true,
        rating: 4.9,
        stockQuantity: 16
    }
];

export default products;