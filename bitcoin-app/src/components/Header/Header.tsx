import styles from './Header.module.scss'
import imgBitcoin from '../../Images/btc.png'
import { GetData } from '../../Hooks/Hooks'



const Header: React.FC = () => {
    const data = GetData()

    return (data ? <div className={styles.root}>
        <img src={imgBitcoin} alt={imgBitcoin} className={styles.imgBitcoin} />
        <div className={styles.data}>
            <div className={styles.item}>${(data['last'] as number).toFixed(2)}</div>
            <div className={styles.item}>{(data['change'] as number).toFixed(2)}</div>
            <div className={styles.item}>({(data['percentChange'] as number).toFixed(2)}%)</div>
            <div className={styles.item}>As of: {data['lastUpdate']}</div>
        </div>


    </div> : <div>Data is loading, please wait</div>)
}

export default Header;