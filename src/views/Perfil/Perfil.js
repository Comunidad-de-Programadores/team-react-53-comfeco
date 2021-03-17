import React, { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import Avatar from "../../components/Avatar";
import UpdateProfile from "../../components/perfil/UpdateProfile";
import EventsProfile from "../../components/perfil/EventsProfile";

const Perfil = () => {
  const { usuario, updateProfile } = useContext(AuthContext);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  console.log(showUpdateProfile, "vistas");
  console.log(updateProfile, ":s");
  const functionUpdateProfile = (show) => {
    setShowUpdateProfile(show);
  };
  console.log(showUpdateProfile, "vistas ii");

  return (
    <div className="container-comfeco">
      <div className="box-perfil">
        {showUpdateProfile === false && updateProfile === false ? (
          <>
            <div className="box-user">
              <div className="box-info-user">
                <a
                  className="link-editar"
                  onClick={() => functionUpdateProfile(true)}
                >
                  {" "}
                  Editar Perfil
                </a>
                <div className="circle-user">
                  {usuario.photoUrl === "" ? (
                    <Avatar size="large" />
                  ) : (
                    <img src={usuario.photoUrl} className="user-img" />
                  )}
                </div>
                <h4 className="user-name">{usuario.name}</h4>
                <span />
                <p>lksjlkdj lkdkldjlkdj lkdjlksdjlskjdflsk jfdsklppppppppppp</p>
                <hr />
                <div className="box-redes-user">
                    <div className="redes-user">
                      a
                    </div>
                    <div className="redes-user">
                      a
                    </div>
                    <div className="redes-user">
                      a
                    </div>

                </div>
              </div>
            </div>
            <div className="box-centro">
              <div className="box-centro-insignia">
                <h5> Mis insignias</h5>
                <div className="box-all-insignias">
                  <div className="box-insignia">
                    {" "}
                    <img src={usuario.photoUrl} className="insignia-img" />
                  </div>
                  <div className="box-insignia">
                    {" "}
                    <img src={usuario.photoUrl} className="insignia-img" />
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="box-user">
              <EventsProfile />
            </div>
          </>
        ) : (
          <UpdateProfile />
        )}
      </div>
    </div>
  );
};

export default Perfil;
