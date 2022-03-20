import React from 'react'
import "./CardOptionStyle.css";

function StudentLifeCard() {
  return (
    <div className="cardStyle">
      <h2 className="cardTitle">Student Life</h2>
      <div className="cardInfo">
        <p>
          Apr: <strong>18.9%</strong>
        </p>
        <p>
          Balance Transfer Offer Duration: <strong> 0 months </strong>
        </p>
        <p>
          Purchase Offer Duration:<strong> 6 Months </strong>
        </p>
        <p>
          Credit Available: <strong>£1200</strong>
        </p>
      </div>
    </div>
  );
}

export default StudentLifeCard;