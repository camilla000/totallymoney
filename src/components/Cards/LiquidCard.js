import React from "react";
import "./CardOptionStyle.css";

function LiquidCard() {
  return (
    <div className="cardStyle">
      <h2 className="cardTitle">Liquid Card</h2>
      <div className="cardInfo">
        <p>
          Apr: <strong>33.9%</strong>
        </p>
        <p>
          Balance Transfer Offer Duration: <strong>12 Months</strong>
        </p>
        <p>
          Purchase Offer Duration: <strong>6 Months</strong>
        </p>
        <p>
          Credit Available: <strong>£3000</strong>
        </p>
      </div>
    </div>
  );
}

export default LiquidCard;
