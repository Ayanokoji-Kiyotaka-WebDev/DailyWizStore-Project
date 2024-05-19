import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Wizard101 is a Free Online Multiplayer adventure game! For players who wish to explore beyond the Free to Play zones, there are Prepaid Game Cards available online that may be redeemed for time in the game or Crowns.
        </p>
        <p>
        Each card comes with a Free Pet. The pets change each month and the pet you receive depends on when you REDEEM the card, not when you PURCHASE the card. Prepaid game cards cannot be combined for larger purchases and cannot be used to unlock Open Chat. After purchased and activated in the store, prepaid game cards can be redeemed in Wizard101 at a later time.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
