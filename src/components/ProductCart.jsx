import styles from '../styles/Product.module.scss'
import PropTypes from 'prop-types'


function ProductCart(props) {
    
    
    return(
        <li className={styles.item}>
            <img className={styles.image} src={props.image} alt="img" />
            <h2 >{props.title}</h2>
            <p >Вартість: {props.price} грн.</p>
            <p className={styles.code}>Код товару: {props.number}</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>Оформити замовлення</button>
                <svg className={styles.buttonClose} onClick={props.openModal} xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </div>
            
        </li>
    )
}

ProductCart.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    number: PropTypes.string,
    image: PropTypes.string.isRequired,
}

ProductCart.defaultProps = {
    price: 0,
    number: '000',
}

export default ProductCart