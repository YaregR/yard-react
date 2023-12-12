import { useState, useEffect } from 'react';
import styles from '../styles/Product.module.scss'
import PropTypes from 'prop-types'


function ProductFavorites(props) {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        const newIsFavorite = !isFavorite;
        setIsFavorite(newIsFavorite);
        localStorage.setItem(`favorite_${props.id}`, JSON.stringify(newIsFavorite));
        props.addToFavorites(newIsFavorite); 
    };

    useEffect(() => {
        const storedIsFavorite = JSON.parse(localStorage.getItem(`favorite_${props.id}`));
        setIsFavorite(storedIsFavorite);
    }, [props.id]);
            
    
    return(
        <li className={styles.item}>
            <img className={styles.image} src={props.image} alt="img" />
            <h2 >{props.title}</h2>
            <p >Вартість: {props.price} грн.</p>
            <p className={styles.code}>Код товару: {props.number}</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.openModal}>Замовити</button>
                <button className={styles.buttonStar}
                    
                    onClick={toggleFavorite}
                >
                    <svg className={isFavorite ? styles.favorite : styles.icon} width="32" height="32" viewBox="0 0 32 32">
                        <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        
                    </svg>
                </button>
            </div>
            
        </li>
    )
}

ProductFavorites.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    number: PropTypes.string,
    image: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired
}

ProductFavorites.defaultProps = {
    price: 0,
    number: '000',
}

export default ProductFavorites