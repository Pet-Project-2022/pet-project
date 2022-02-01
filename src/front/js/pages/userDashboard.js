import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context, Row, Col, Card, Image, Button } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/userDashboard.scss";
import Button from "react-bootstrap/Button";

export const MyPosts = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [lostPet, setLostPet] = useState(null);
  useEffect(async () => {
    setLostPet(await actions.getSingleLostPet(params.postId));
  }, []);
  if (lostPet === null || lostPet === undefined){
    return <Image className="mx-auto d-block" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
  } 
  return (
    <Container className=" profile text-center">
      <h1 className="postTitle">{lostPet.name}</h1>

      <Card className="post m-auto" style={{ width: "40rem", border: "none" }}>
        <Card.Img variant="top" src={lostPet.image} />
      </Card>

      <hr className="line" />
      <Row className="lostPetPostTitles">
        <Col> Title </Col>
      </Row>
      <Row className="lostPetPostList">
        <Col>{lostPet.title}</Col>
        <Button className="mr-2" variant="dark" size="lg">
          Delete
        </Button>
      </Row>
      <Container>
        <Button className="mr-2" href="/home" variant="dark" size="lg">
          Home
        </Button>
      </Container>
    </Container>

  );
};