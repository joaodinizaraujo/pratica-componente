import styles from './Card.module.css'
import Checkbox from "../Checkbox/Checkbox";

function Card({title, checkboxes, price, per}) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>{title}</h1>
                </div>
                <div>
                    <ul className={styles.checkboxes}>
                        {checkboxes.map(checkbox =>
                            <li><Checkbox isChecked={checkbox[0]} text={checkbox[1]} className={styles.checkbox}/></li>
                        )}
                    </ul>
                </div>
                <div>
                    <h1 className={styles.price}>${price}</h1>
                    <h3 className={styles.per}>{per}</h3>
                    <div className={styles.buttonCenter}>
                        <div className={styles.button}>Try now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;