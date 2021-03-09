
import React, { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import Avatar from "../../components/Avatar";

const Perfil = () => {
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);
  return (
    <div className="box-perfil">
      <div className="box-user">
        <div className="box-info-user">
          <div className="circle-user">
            {" "}
            {usuario.photoUrl === "" ? (
              <Avatar />
            ) : (
              <img src={usuario.photoUrl} className="user-img "></img>
            )}
          </div>
          <h4>{usuario.name}</h4>
          <span></span>
          <p>lksjlkdj lkdkldjlkdj lkdjlksdjlskjdflsk jfdsklppppppppppp</p>
          <hr></hr>
        </div>
      </div>
      <div className="box-centro">
          <h5>Insignias</h5>
      </div>
      <div className="box-user">
        <div className="box-info-user">
          <div className="circle-user">
            {" "}
            {usuario.photoUrl === "" ? (
              <Avatar />
            ) : (
              <img src={usuario.photoUrl} className="user-img "></img>
            )}
          </div>
          <h4>{usuario.name}</h4>
          <span></span>
          <p>lksjlkdj lkdkldjlkdj lkdjlksdjlskjdflsk jfdsklppppppppppp</p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
