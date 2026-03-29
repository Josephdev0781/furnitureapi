// src/routers/products.router.js

import { Router } from 'express';

import { products } from '../sampledata/products.js';

const productsRouter = Router()

// GET /api/products - Get all products
productsRouter.get('/', (req, res) => {
    try {
        // Optional: Add query parameters for filtering
        const { category, minPrice, maxPrice, search } = req.query;

        let filteredProducts = [...products];

        // Filter by category
        if (category) {
            filteredProducts = filteredProducts.filter(product =>
                product.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Filter by price range
        if (minPrice) {
            filteredProducts = filteredProducts.filter(product =>
                product.price >= parseFloat(minPrice)
            );
        }
        if (maxPrice) {
            filteredProducts = filteredProducts.filter(product =>
                product.price <= parseFloat(maxPrice)
            );
        }

        // Search by name or description
        if (search) {
            const searchTerm = search.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                (product.description && product.description.toLowerCase().includes(searchTerm))
            );
        }

        res.status(200).json({
            success: true,
            count: filteredProducts.length,
            data: filteredProducts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching products'
        });
    }
});

// GET /api/products/:id - Get single product by ID
productsRouter.get('/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);

        const product = products.find(p => p.id === productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: `Product with id ${productId} not found`
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching product'
        });
    }
});

// GET /api/products/category/:category - Get products by category
productsRouter.get('/category/:category', (req, res) => {
    try {
        const category = req.params.category;

        const categoryProducts = products.filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
        );

        if (categoryProducts.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No products found in category: ${category}`
            });
        }

        res.status(200).json({
            success: true,
            count: categoryProducts.length,
            data: categoryProducts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching products by category'
        });
    }
});

// Optional: POST /api/products - Add new product (for future expansion)
productsRouter.post('/', (req, res) => {
    try {
        const { name, price, category, description, image } = req.body;

        // Basic validation
        if (!name || !price || !category) {
            return res.status(400).json({
                success: false,
                message: 'Name, price, and category are required'
            });
        }

        const newProduct = {
            id: products.length + 1, // Simple ID generation (in real app, use UUID or DB)
            name,
            price: parseFloat(price),
            category,
            description: description || '',
            image: image || 'https://via.placeholder.com/300',
            createdAt: new Date().toISOString()
        };

        // In a real app, you would save to database, here we just simulate
        products.push(newProduct); // Note: This only modifies in-memory data

        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while creating product'
        });
    }
});

export default productsRouter;