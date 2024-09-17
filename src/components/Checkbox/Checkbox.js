import styles from './Checkbox.module.css'
import f from '../../assets/f.png'
import v from '../../assets/v.png'

function Checkbox({isChecked, text}) {
    let img = f;
    let className = styles.h1Unchecked;
    if (isChecked) {
        img = v;
        className = styles.h1;
    }
    return (
        <div className={styles.div}>
            <div className={styles.img}>
                <img src={img}/>
            </div>
            <h1 className={className}>{text}</h1>
        </div>
    );
}

export default Checkbox;