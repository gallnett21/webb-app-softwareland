import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Ver más <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Ver más <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "./Imagenes/onem.jpg", title : "Manga", desc : "La mayoría de las series de anime, tienen su origen en el manga, es decir, series de comics japonesas publicadas semana a semana en distintas revistas japonesas.", link : "/"},
    {id : 2, img : "./Imagenes/batman.jpg", title : "Cómic", desc : "El manga a su vez tiene su origen de los populares cómics estadounidenses que se popularizaron en el mundo a mediados de los años 30. Tales como superman, batman y spider-man", link : "/"},
    {id : 3, img : "./Imagenes/thebatman.jpg", title : "Live action", desc : "Si bien, los origenes de los cómics se remontan a los años 20´s, hasta hoy en día persiste su popularidad siendo producidas año con año películas live action basadas en cómics.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">¿Sabías qué...?</span></h3>
              <p className="text-muted">El manga de one piece ocupa el segundo lugar en ranking mundial de series más vendidas en el mundo venciendo a obras como batman, superman, el señor de los anillos y siendo superado solo por Harry Potter.</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;