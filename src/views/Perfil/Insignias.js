import React from 'react';
import { Card, Button, CardDeck, Container, Row, Col } from 'react-bootstrap';
import insignia_perfil from '../../assets/img/icon/insignia_perfil.svg';
import insignia_social from '../../assets/img/icon/insignia_social.svg';
import insignia_intelectual from '../../assets/img/icon/insignia_intelectual.svg';
import insignia_solidario from '../../assets/img/icon/insignia_solidario.svg';
import '../../assets/styles/components/insignias.css';
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';

const Insignias = () => {
  return (
    <div className='container__badge'>
      <h2 className='container__badge-title'>Insignias</h2>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <Card.Img variant='top' src={insignia_perfil} />
              <Card.Body>
                <Card.Title>Sociable</Card.Title>
                <Card.Text>
                  <h5>Descripción</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <hr />
                <Card.Text>
                  <h5>¿Como ganarla?</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <Card.Img variant='top' src={insignia_social} />
              <Card.Body>
                <Card.Title>Publicista</Card.Title>
                <Card.Text>
                  <h5>Descripción</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <hr />
                <Card.Text>
                  <h5>¿Como ganarla?</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <Card.Img variant='top' src={insignia_intelectual} />
              <Card.Body>
                <Card.Title>Intelectual</Card.Title>
                <Card.Text>
                  <h5>Descripción</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <hr />
                <Card.Text>
                  <h5>¿Como ganarla?</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <Card.Img variant='top' src={insignia_solidario} />
              <Card.Body>
                <Card.Title>Solidario</Card.Title>
                <Card.Text>
                  <h5>Descripción</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <hr />
                <Card.Text>
                  <h5>¿Como ganarla?</h5>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Insignias;
