import React, { Component, Fragment } from 'react'
import Header from "../../components/UI/Header/Header";
import Navigation from "../../components/UI/Navigation/Navigation";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import classes from "./Home.module.css";

class Home extends Component {
    render() {
        return (
           <Fragment>
               <Header/>
               <Navigation/>
                   <div className={classes["image-container"]}>
                   <br/>
                   <h1 className={classes.text}>Want to buy Cars?</h1>
                   <br/>
                   <h2 className={classes.text}>Participate in Auctions all over the world</h2>
                   <br/>
                   <h1 className={classes.text}>Get your vehicles delivered at your doorstep!</h1>
                   <br></br>
                   <h2>Visit our inventory to find new, used and savage cars</h2>
                   <br></br>
                   </div>
                   <br></br>
                   {/* <Container>
                       <Row >
                         <Col md={6} lg={4} sm={12}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                           <bold> Some quick example text to build on the card title and make up the bulk of
                            the card's content.</bold>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        </Col>    <br></br>
                        <Col md={6} lg={4} sm={12}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        </Col >  <br></br>  
                        <Col md={12} lg={4} sm={12}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        </Col>    
                       </Row>
                   </Container> */}
                    </Fragment>
        )
    }
}
export default Home;
