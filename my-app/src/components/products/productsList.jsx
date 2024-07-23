import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.scss'; 
import ProductFilter from '../filter/productFilter';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                console.log('Raw API response:', response.data);
                setProducts(response.data);
                
                const uniqueCategories = [...new Set(response.data.map(product => product.category))].filter(Boolean);
                console.log('Extracted categories:', uniqueCategories);
                
                setCategories(uniqueCategories);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    console.log('Current categories state:', categories);

    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="product-section">
            <ProductFilter 
                categories={categories} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image_url} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <p className="category">Category: {product.category || 'Uncategorized'}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;