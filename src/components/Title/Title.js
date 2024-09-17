import styles from './Title.module.css'

function Title({text, color}) {
    return <>
        <div className={styles.body}>
            <h1 className={styles.h1}>{text}</h1>
            <div className={styles.divColor} style={{backgroundColor: color}}>{color}</div>
        </div>
    </>
}

export default Title;