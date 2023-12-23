import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/navbar";
import Article from "../components/article";

export default function CatArticles(){
   return(
    <>
        <Navbar />
        <div className="d-none d-md-block" style={{marginTop:"40px"}}>
        <Container>
          <Row>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
          </Row>
        </Container>
        </div>
        <div className="d-md-none" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"30px"}}>
        <Article image="pull1.jpg" title="pull gray" price="100" />
        <Article image="pull1.jpg" title="pull gray" price="100" />
        <Article image="pull1.jpg" title="pull gray" price="100" />
        <Article image="pull1.jpg" title="pull gray" price="100" />
        </div>
    </>
   )
}