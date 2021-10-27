import styles from './register.module.scss';
import TwitterIcon from "../Icons/TwitterIcon";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.icon_twi}>
                    <TwitterIcon/>
                </div>
            </div>
            <div className={styles.fields}>
                <div className={styles.icon}>
                    <TwitterIcon/>
                </div>
                <h1 className={styles.title}>В курсе происходящего</h1>
                <form action="" className={styles.fields_form}>
                    <input type="text" className={styles.field} placeholder={"Имя"} maxLength={50} required={true}/>
                    <input type="phone" className={styles.field} placeholder={"Телефон"} required={true}/>
                    <input type="password" className={styles.field} placeholder={"Пароль"} required={true}/>
                    <input type="password" className={styles.field} placeholder={"Повторите пароль"} required={true}/>
                    <button className={styles.submit_btn}>Зарегистрироваться</button>
                    <Link to={"/login"} className={styles.already_exist}>Уже есть аккаунт?</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
