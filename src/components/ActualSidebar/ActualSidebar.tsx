import styles from './actualsidebar.module.scss'
import SearchForm from "./SearchForm";

type ActualSidebarProps = {
    firstPlace?: [category: string, themeTitle: string, tweetsCount?: string];
    secondPlace?: [category: string, themeTitle: string, tweetsCount?: string];
    thirdPlace?: [category: string, themeTitle: string, tweetsCount?: string];
    fourthPlace?: [category: string, themeTitle: string, tweetsCount?: string];
    fifthPlace?: [category: string, themeTitle: string, tweetsCount?: string];
}

const ActualSidebar = (props: ActualSidebarProps) => (
    <div>
        <SearchForm/>
        <div className={styles.container}>
            <h3 className={styles.title}>Актуальные темы</h3>
            <div className={styles.element}>
                <span className={styles.subhead_text}>1 • {props.firstPlace![0]}</span>
                <span className={styles.element_title}>{props.firstPlace![1]}</span>
                {props.firstPlace![2] && <span className={styles.subhead_text}>Твитов: {props.firstPlace![2]}</span>}
            </div>
            <div className={styles.element}>
                <span className={styles.subhead_text}>2 • {props.secondPlace![0]}</span>
                <span className={styles.element_title}>{props.secondPlace![1]}</span>
                {props.secondPlace![2] && <span className={styles.subhead_text}>Твитов: {props.secondPlace![2]}</span>}
            </div>
            <div className={styles.element}>
                <span className={styles.subhead_text}>3 • {props.thirdPlace![0]}</span>
                <span className={styles.element_title}>{props.thirdPlace![1]}</span>
                {props.thirdPlace![2] && <span className={styles.subhead_text}>Твитов: {props.thirdPlace![2]}</span>}
            </div>
            <div className={styles.element}>
                <span className={styles.subhead_text}>4 • {props.fourthPlace![0]}</span>
                <span className={styles.element_title}>{props.fourthPlace![1]}</span>
                {props.fourthPlace![2] && <span className={styles.subhead_text}> Твитов: {props.fourthPlace![2]}</span>}
            </div>
            <div className={styles.element}>
                <span className={styles.subhead_text}>5 • {props.fifthPlace![0]}</span>
                <span className={styles.element_title}>{props.fifthPlace![1]}</span>
                {props.fifthPlace![2] && <span className={styles.subhead_text} >Твитов: {props.fifthPlace![2]}</span>}
            </div>
        </div>
    </div>
)


export default ActualSidebar;
