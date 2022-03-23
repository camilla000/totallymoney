import React, { useState } from "react";
import "./CardOptionStyle.css";
import cardContent from "./CardContent.json";
import { Col, Container, Row } from "react-bootstrap";


const Card = (props) => {
  const [cardInfo, setCardInfo] = useState(true);
  return (
    <>
      <Container>
        <div className="cardStyle">
          <div className="cardInfo">
            <Row>
              <Col>
                <h2 className="cardTitle">{props.selectCard} Card</h2>
              </Col>
            </Row>
            {cardInfo ? (
              <>
                <Row>
                 
                  <Col sm={4}>
                  <p>
                    Credit Available:{" "}
                    <strong>
                      £{cardContent[props.selectCard].creditAvailable}
                    </strong>
                  </p>
                  </Col>

                  <button
                    onClick={() => setCardInfo(false)}
                    className="showMoreButton"
                  >
                    Show More
                  </button>
                </Row>
              </>
            ) : (
              <>
                <p>
                  Apr: <strong>{cardContent[props.selectCard].apr}</strong>
                </p>
                <p>
                  Balance Transfer Offer Duration:{" "}
                  <strong>
                    {cardContent[props.selectCard].balanceTransferOfferDuration}
                  </strong>
                </p>
                <p>
                  Purchase Offer Duration:{" "}
                  <strong>
                    {cardContent[props.selectCard].purchaseOfferDuration}
                  </strong>
                </p>
                <p>
                  Credit Available:{" "}
                  <strong> £
                    {" "}
                    {cardContent[props.selectCard].creditAvailable}
                  </strong>
                </p>

                <button
                  onClick={() => setCardInfo(true)}
                  className="showLessButton"
                >
                  Show Less
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Card;
