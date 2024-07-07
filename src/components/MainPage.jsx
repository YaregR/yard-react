import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../styles/MainPage.module.scss'


export default function MainPage() {

    const [products, setProducts] = useState([])
	

    useEffect(() => {
        
        const loadProducts = async () => {
            try {
                const url = "./products.json";
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.log('Error fetching products:', error);
            }
        }

        loadProducts();

    }, [])
    

    return (
        <div>
                
            {/* <Link to="/login" className="btn">Авторизація</Link> */}
            
            <ul id="products-list" className={styles.list}>
                {products.map((product) => (
                    
                    <li key={product.id} className={styles.item} >
                        <Link to={`/product/${product.id}`}>
                            <img className={styles.image} src={product.image} alt="img" />
                            <h3>{product.title}</h3>
                        </Link>                               
                    </li>
                ))}
            </ul>
            
        
            {/* <div className="button-wrapper">
                <button id="prev" onClick={prevPage} className='btn'><span>&larr;</span></button>
                <span>{` ${page} `}</span>
                <button id="next" onClick={nextPage} className='btn'><span>&rarr;</span></button>
            </div> */}
                    
        </div>
               
    )
}