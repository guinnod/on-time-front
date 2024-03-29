import styles from "./styles/_login.module.scss";
import colors from '@styles/colors.json'
import {Logo} from "@ui/Logo";
import {LoginInput} from "@Login/LoginInput";
import {Button} from "@ui/Button";
import {List} from "@ui/List";
import {put} from "@api/index.js";
import {useNavigate} from "react-router-dom";

export const Reset = () => {
    const navigate = useNavigate()
    const submitForm = () => {
        const password = document.getElementById("password");
        const passwordRepeat = document.getElementById("passwordRepeat");
        if (password.value !== passwordRepeat.value) {
            alert("Passwords don’t match")
            return;
        }
        if (!sessionStorage.getItem('email') || !sessionStorage.getItem('token')) {
            navigate('../forgot')
            return;
        }
        const data = {
            'email': sessionStorage.getItem('email'),
            'code': sessionStorage.getItem('token'),
            'password': password.value,
        }
        put({path:'forgot-password', data: data})
            .then(res=>{
                alert(res.data)
                navigate('../login')
            })
            .catch(error=>{
                alert(error.response.data)
            })
    }
    return (
        <div id="resetForm" className={styles.anchor}>
            <Logo/>
            <h1 className={styles.text}>Reset password</h1>
            <List gap={30}>
                <LoginInput toptext="New password" type="password" id="password" maxLength={"20"} minLength={"8"}
                            style={{cursor: 'text'}}/>
                <LoginInput toptext="Repeat password" type="password" id="passwordRepeat" maxLength={"20"} minLength={"8"}
                            style={{cursor: 'text'}}/>
                <Button style={{
                    background: colors.main,
                    width: '500px',
                    color: 'white',
                }} onClick={submitForm}>
                    Reset password
                </Button>
            </List>
        </div>
    )
}