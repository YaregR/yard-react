import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Product.module.scss';
import ProductItemForm from './ProductItemForm';


function Product() {
    
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const loadProduct = async () => {
            try {
                const url = "/products.json";
                const response = await fetch(url);
                const data = await response.json();

                const productId = parseInt(id, 10);
                const foundProduct = data.products.find(prod => prod.id === productId);
                
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError('Product not found');
                }
            } catch (error) {
                console.log('Error fetching product:', error);
                setError('Error fetching product');
            }
        }

        loadProduct();  

    }, [id]);


    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!product) {
        return <div className={styles.loading}>Loading...</div>;
    }

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
            
                <img className={styles.image} src={product.image} alt="img" />
                <div className={styles.itemInfo}>
                    <h3>{product.title}</h3>

                    <ProductItemForm />
                
                </div>                               
            </div>
        </div>
        
    )
}


export default Product;