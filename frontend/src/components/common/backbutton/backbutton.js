import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backbutton.module.css";
import { GrFormPrevious } from "react-icons/gr";

const BackButton = ({ link }) => {
  const navigate = useNavigate();

  // 링크를 클릭할 때, 해당 경로로 이동하는 함수
  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className={styles.backbutton} onClick={handleClick}>
      <GrFormPrevious />
    </div>
  );
};

export default BackButton;
