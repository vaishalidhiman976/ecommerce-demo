import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc  Get all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
})

// @desc Fetch a product by id
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler( async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
        res.status(404).json({ message: "Product not found" });
    } else {
        res.json(product);
    }
})

export {getProducts, getProductById};