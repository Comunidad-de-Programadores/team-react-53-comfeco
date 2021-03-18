import React from "react";

import "../../assets/styles/components/Grupos.css";
import imgGroup from "../../assets/img/group1.png";

const Grupos = () => {
  return (
    <div className="container__badge">
      <h2 className="container__badge-title">Grupos</h2>
      <div className="box-group">
        <div className="box-1">
          <div className="box-my-group">
            <div className="my-group">
              <div className="My-group-title">
                <h5>Mi Grupo</h5>
                <a>Ir al grupo</a>
              </div>
              <div className="my-group-name">Crazy Techs</div>
            </div>
            <div className="box-all-integrants">
              <div className="box-one-integrants">
                <div className="box-integrant-photo">foto</div>
                <div className="box-integrant-name">
                  Juan Secu
                  <br /> <b>novato</b>
                </div>
                <div>
                  <b>integrante</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="box-all-group">
            <div className="box-filter">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success btn-evento"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div>
              <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-5  g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src={imgGroup} />
                    <div class="card-body">
                      <div className="box-lenguaje">Typescript</div>
                      <h5 class="card-title text-start">Los Crypto</h5>
                      <p class="card-text text-start">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer text-center">
                      <button
                        type="button"
                        class="btn d-inline-block btn-outline-secondary btn-evento "
                      >
                        Unirse
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card h-100">
                    <img src={imgGroup} />
                    <div class="card-body">
                      <div className="box-lenguaje">Typescript</div>
                      <h5 class="card-title text-start">Los Crypto</h5>
                      <p class="card-text text-start">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer text-center">
                      <button
                        type="button"
                        class="btn d-inline-block btn-outline-secondary btn-evento "
                      >
                        Unirse
                      </button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grupos;
