import { productModel } from '../model/productModel.js';
 

const homeController = async (req, res) => {
    res.send("Welcome to my API of products");
};
const createProductController = async (req, res) => {
    const { category, name, description, image, price  } = req.body;
    if (!category || !name || !description ||  !image || !price ) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    try {
        
        const result = await productModel.createProduct({
            category,
            name,
            description,
            image,
            price});
        return res.status(201).send("Se ha agregado un nuevo producto", result);
    } catch (error) {
        console.error('Error creando el producto:', error);
        return res.status(500).json({ message: 'Error creando el producto' });
    }
};

const getProductLimitController = async (req, res) => {
    const { limit } = req.params;
    const { order_by } = req.query;
    try { 
        const result = await productModel.getProductLimit({limit, order_by});
        res.status(200).json({result: result});
    } catch (error) {
        console.log('falló la consulta :/',error.message);
    }
};

const prepararHATEOAS = (products) => {
    const results = products.map((m) => {
        return {
            name: m.nombre,
            href: `/products/product/${m.id}`,
        }
    }).slice(0, 9)
    const total = products.length;
    const HATEOAS = {

        total,
        results
    }
    return HATEOAS
};
const getProductsController = async (req, res) => {
    try {
        const queryStrings = req.query;
        const products = await productModel.getProducts(queryStrings);
        const HATEOAS =  prepararHATEOAS(products)
        const result = await productModel.getProducts();
        res.json(HATEOAS);
        res.json(result);
    } catch (error) {
        console.log('falló la consulta',error.message);
    }
};

const getProductsFilteredController = async (req, res) => {
    
    try {
        const query = req.query;
        const result = await productModel.getProductsFiltered(query);
        return res.status(200).json({result});
    } catch (error) {
        console.log('falló la consulta de filtro',error.message);
    }
}

export const productController = {
    homeController,
    createProductController,
    getProductLimitController,
    getProductsController,
    getProductsFilteredController,
};