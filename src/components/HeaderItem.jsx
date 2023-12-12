import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss'


function HeaderItem(props) {
    return ( 
        <Link to={props.to} className={styles.item}>{props.children}</Link>
    );
}

export default HeaderItem;