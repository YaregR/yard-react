import styles from '../styles/Modal.module.scss'
import PropTypes from 'prop-types'

function Modal(props) {

    if (!props.isOpen) return null;

    return (
        <div className={styles.modalBack} onClick={props.isClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{props.header}</h1>                
                    <img className={styles.closeButton} src="./img/cross.svg" alt="cross" onClick={props.isClose} />
                </div>
                <p className={styles.text}>{props.text}</p>
                <div className={styles.buttonWrapper}>

                    {props.actions.map((action, index) => (
                        <button className={styles.actionButton} style={{ backgroundColor: action.backgroundColor }} key={index} onClick={action.onClick}>{action.label}</button>
                    ))}
                </div>
                
            </div>
        </div>       
    )
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    isClose: PropTypes.func,
    text: PropTypes.string,
    actions: PropTypes.array
}

export default Modal;