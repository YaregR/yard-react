import styles from '../styles/Header.module.scss'
import HeaderItem from './HeaderItem'

function Header(props) {


    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <HeaderItem to="/"><img src="./img/logo.svg" alt="logo" /></HeaderItem>
                <div className={styles.contacts}>
                    <HeaderItem to="tel:+380671214301">+38 067 121 43 01</HeaderItem>
                    <HeaderItem to="mailto:info@yard2.com.ua">info@yard2.com.ua</HeaderItem>
                  
                </div>
            </div>
            
        </header>
    )
}

export default Header