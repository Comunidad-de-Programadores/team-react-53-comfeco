import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    loginWithGoogle,
    logOut,
    onAuthStateChanged,
    loginWithFacebook,
} from '../../firebase/client';
import AuthContext from '../../auth/AuthContext';
// import { types } from '../../types/types';
import './Login.css';

const Login = () => {
        const authContext = useContext(AuthContext);
        const { mensaje, autenticado, iniciarSesion } = authContext;
        const [errorMessage, setErrorMessage] = useState(null);
        const [user, setUser] = useState({
            email: '',
            password: '',
        });


        const history = useHistory();

        //Extraer de usuario
        const { email, password } = user;

        //En caso de que el password o usuario no exista
        useEffect(() => {
            if (autenticado) {
                history.push('/');
            }
            if (mensaje) {
                setErrorMessage(mensaje);
            }
        }, [mensaje, autenticado, history]);

        const handleClickGoogle = () => {
            loginWithGoogle()
                .then((user) => {
                    setUser(user);
                    history.replace('/');
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        const handleClickFacebook = () => {
            loginWithFacebook()
                .then((user) => {
                    setUser(user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        const handleInputChange = (e) => {
            setUser({
                ...user,
                [e.target.name]: e.target.value,
            });
        };

        const validateEmail = (email) => {
            const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            const emailIsValid = EMAIL_REGEX.test(email)
            if (!emailIsValid) {
                setErrorMessage('Su email es incorrecto')
            }
        }

        const handleBlur = (e) => {
            const { target } = e;
            const { value, name } = target;
            if (value.length === 0) {
                return setErrorMessage(`Ingrese su ${name}`)
            }
            if (name == 'email') {
                validateEmail(value)
            }
        }

        const Login = (e) => {
            e.preventDefault();
            iniciarSesion({
                email,
                password,
            });
        };
        return ( <
            div className = 'Login' >
            <
            h1 className = 'Login__title' >
            <
            span className = 'title_hola' > Hola, < /span> <
            span className = 'title__message' > Inicia Sesión! < /span> <
            /h1> <
            form className = 'Login__form'
            onSubmit = { Login } > {
                errorMessage ? < p > { errorMessage } < /p> : ''} <
                div className = 'form__group' >
                <
                label htmlFor = 'email'
                className = 'form__label' >
                Email :
                    <
                    /label> <
                    input
                name = 'email'
                type = 'email'
                value = { user.email }
                className = 'form__input'
                onChange = { handleInputChange }
                onBlur = { handleBlur }
                /> <
                /div> <
                div className = 'form__group' >
                <
                label htmlFor = 'password'
                className = 'form__label' >
                Contraseña:
                    <
                    /label>

                    <
                    input
                name = 'password'
                type = 'password'
                value = { user.password }
                className = 'form__input'
                onChange = { handleInputChange }
                onBlur = { handleBlur }
                />

                <
                div className = 'form__pass' >
                <
                a href = '#'
                className = 'form__link' >
                Recuperar Contraseña <
                /a> <
                /div> <
                div className = 'form__check ' >
                <
                input type = 'checkbox' / >

                <
                span className = 'form__check_s' > Mantenerme conectado < /span> <
                /div> <
                /div> <
                div className = 'form__group' >
                <
                button type = 'submit'
                className = 'form__button' >
                Entrar <
                /button> <
                p className = 'form__register' >
                No tiene cuenta registrate { ' ' } <
                a href = '#' > aquí. < /a> <
                /p> <
                /div> <
                /form> <
                div >
                <
                div className = 'social__group' >
                <
                button
                type = 'button'
                className = 'form__button_other'
                onClick = { handleClickFacebook } >
                Ingresar con Facebook <
                /button> <
                button
                type = 'button'
                className = 'form__button_other'
                onClick = { handleClickGoogle } >
                >
                Ingresar con Google <
                /button> <
                /div> <
                /div> <
                /div>
            );
        };

        export default Login;