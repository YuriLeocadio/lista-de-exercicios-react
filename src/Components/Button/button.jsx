import styles from './button.module.css';

export function Button({onClick, text, className}) {
    return <button onClick={onClick} className={styles[className]}>{text}</button>
}