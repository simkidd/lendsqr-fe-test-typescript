import React from "react";
import "./userCard.scss";

interface UserCardProps {
  item: {
    icon: string;
    text: string;
    figure: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ item }) => {
  return (
    <div className="user-card">
      <div className="img-container">
        <img src={item.icon} alt="" />
      </div>
      <p>{item.text}</p>
      <p>{item.figure}</p>
    </div>
  );
};

export default UserCard;

