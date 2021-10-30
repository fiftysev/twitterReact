import styles from './register.module.scss';
import TwitterIcon from "../Icons/TwitterIcon";
import {Link} from "react-router-dom";

const SignIn = () => {
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
                    <input type="text" className={styles.field} placeholder={"Имя или номер телефона"} maxLength={50} required={true}/>
                    <input type="password" className={styles.field} placeholder={"Пароль"} required={true}/>
                    <button className={styles.submit_btn} type={"submit"}>Войти</button>
                    <Link to={"/register"} className={styles.already_exist}>Зарегистрироваться</Link>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
