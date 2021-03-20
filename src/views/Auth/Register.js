import React, { useState, useContext, useEffect } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import "../../assets/styles/views/Login.css";
import fondo from "../../assets/img/fondo.png";

const Register = () => {
  //extraer los valores del context
  const authContext = useContext(AuthContext);
  const {
    mensaje,
    autenticado,
    registrarUsuario,
    loginGoogle,
    loginFacebook,
  } = authContext;
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    type: "",
  });
  const history = useHistory();
  // Statepara iniciar sesión
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmar: "",
  });
  const { name, email, password, confirmar } = user;
  const [formValid, setFormValid] = useState({
    name: false,
    email: false,
    password: false,
    confirmar: false,
  });
  const initialErrorMessageState = {
    mesage: "",
    type: "",
  };
  //En caso que el usuario se haya autenticado / registrado o sea un registro duplicado
  useEffect(() => {
    // if (autenticado) {
    //   history.push('/');
    // }
    if (mensaje) {
      setErrorMessage({
        message: mensaje,
        type: "usuario",
      });
    }
  }, [mensaje, autenticado, history]);

  const signIn = (e) => {
    e.preventDefault();
    registrarUsuario({
      name,
      email,
      password,
    });
  };
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const EMAIL_REGEX = new RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const emailIsValid = EMAIL_REGEX.test(email);
    if (emailIsValid) {
      setFormValid({
        ...formValid,
        email: true,
      });
      setErrorMessage({ ...initialErrorMessageState });
    } else {
      setErrorMessage({
        message: "Su email es incorrecto",
        type: "email",
      });
      setFormValid({
        ...formValid,
        email: false,
      });
    }
  };

  const validateConfirmar = (confirmar) => {
    if (confirmar === password) {
      setFormValid({
        ...formValid,
        confirmar: true,
      });
      setErrorMessage({ ...initialErrorMessageState });
    } else {
      setErrorMessage({
        message: "No coinciden sus contraseñas",
        type: "confirmar",
      });
      setFormValid({
        ...formValid,
        confirmar: false,
      });
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const { value, name } = target;
    let message;
    if (value.length === 0) {
      switch (name) {
        case "name":
          setFormValid({
            ...formValid,
            name: false,
          });
          message = "Ingrese su nick";
          break;
        case "email":
          setFormValid({
            ...formValid,
            email: false,
          });
          message = `Ingrese su ${name}`;
          break;
        case "password":
          setFormValid({
            ...formValid,
            password: false,
          });
          message = `Ingrese su ${name}`;
          break;
        case "confirmar":
          setFormValid({
            ...formValid,
            confirmar: false,
          });
          message = "Confirme su password";
          break;
      }

      return setErrorMessage({
        message,
        type: name,
      });
    }

    switch (name) {
      case "name":
        setFormValid({
          ...formValid,
          name: true,
        });
        setErrorMessage({ ...initialErrorMessageState });
        break;
      case "email":
        validateEmail(value);
        break;
      case "password":
        setFormValid({
          ...formValid,
          password: true,
        });
        setErrorMessage({ ...initialErrorMessageState });
        break;
      case "confirmar":
        validateConfirmar(value);
        break;
    }
  };
  if (autenticado) {
    return <Redirect to="/" />;
  }
  const handleClickGoogle = () => {
    loginGoogle()
      .then((user) => {
        console.log(user);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickFacebook = () => {
    loginFacebook()
      .then((user) => {
        console.log(user);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="fade-in animated bg-img">
      <div className="Recovery container-comfeco">
      <div className="box-middle">
        <div className="Recovery__container">
         
            <div className="Login">
              <h1 className="Login__title">
                <span className="title__message title mt-4">
                  ¡Aquí podrás registrarte!
                </span>
              </h1>
              <form className="Login__form" onSubmit={signIn}>
                {errorMessage.message ? (
                  <div className="error-msj">{errorMessage.message}</div>
                ) : (
                  ""
                )}
                <div className="form__group">
                  <label htmlFor="name" className="form__label">
                    Nick:
                  </label>
                  <input
                    name="name"
                    type="name"
                    value={user.name}
                    className="form__input"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={errorMessage.type === "name" ? "error" : ""}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email:
                  </label>
                  <input
                    // style={{ opacity: 0, position: absolute }}
                    name="email"
                    type="email"
                    value={user.email}
                    className="form__input"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete="new-password"
                    className={errorMessage.type === "email" ? "error" : ""}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="password" className="form__label">
                    Contraseña:
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={user.password}
                    className="form__input"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete="new-password"
                    className={errorMessage.type === "password" ? "error" : ""}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="password" className="form__label">
                    Confirmar Contraseña:
                  </label>
                  <input
                    name="confirmar"
                    type="password"
                    className="form__input"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={errorMessage.type === "confirmar" ? "error" : ""}
                  />
                </div>
                <div className="form__group">
                  <button
                    type="submit"
                    className="form__button"
                    disabled={
                      !(
                        formValid.name &&
                        formValid.email &&
                        formValid.password &&
                        formValid.confirmar
                      )
                    }
                  >
                    Registrarse
                  </button>
                  <label className="form__register">
                    Ya tienes cuenta? Inicia sesión{" "}
                    <Link to="/login" type="button">
                      aquí.
                    </Link>
                  </label>
                </div>
              </form>
              <div>
                <div className="social__group">
                  <button
                    type="button"
                    className="form__button_other loginBtn--facebook"
                    onClick={handleClickFacebook}
                  >
                    Ingresar con Facebook
                  </button>
                  <button
                    type="button"
                    className="form__button_other loginBtn--google"
                    onClick={handleClickGoogle}
                  >
                    Ingresar con Google
                  </button>
                </div>
                <div className="form__check">
                  <span className="form__check_s">
                    Al registrarte estas aceptando los
                    <Link to="#">Términos y Condiciones</Link>y la
                    <Link to="#">
                      {" "}
                      Política de privacidad y protección de datos
                    </Link>
                    de COMFECO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
