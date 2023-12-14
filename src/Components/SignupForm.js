import {useEffect, useState} from 'react';
import styles from './SignupForm.module.css';

const useLocalstorage = (key, defaultValue) => {
    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(key)) ?? defaultValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}

export const SignupForm = ()=>{
  
    const [email, setEmail] = useLocalstorage('email', '')
    const [password, setPassword] = useLocalstorage('password', '')

    const handlEmailChange = (e)=>{        
        setEmail(e.target.value)
    }

    const handlPasswordChange = (e)=>{        
        setPassword(e.target.value)
    }

    return (
        <form className={styles.form} autoComplete="off">
            <label className={styles.label}>
            <span>Пошта</span>
            <input
                type="email"
                name="email"
                onChange={handlEmailChange}
                value={email}
            />
            </label>
        
            <label className={styles.label}>
            <span>Пароль</span>
            <input
                type="password"
                name="password"
                onChange={handlPasswordChange}
                value={password}
            />
            </label>
        
            <button type="submit">Зареєструватися</button>
        </form>
    );
}