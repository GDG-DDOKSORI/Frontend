import React from 'react';
import styles from './Intro.module.css';
import { useNavigate } from "react-router-dom";
import star from "../../assets/images/Intro/shootingStar.svg";

const Intro = () => {
  const navigate = useNavigate();
  const Login = () => {
    console.log("로그인 버튼 클릭");
    navigate("/main");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.title}>
        Bucket Note
      </div>
      <img src={star} alt="shootingStar" className={styles.titleImg} />
      </div>
      <div className={styles.clover}>
        <img src={require('../../assets/images/Intro/fourLeafClover.png')} alt="CLOVER" className={styles.backImg} />
        <div className={styles.backText}>
          1년동안 이룰 목표를 기록하고<br/>
          친구의 목표를<br/>
          확인해 보세요!!
        </div>
      </div>
      <div style={{display: "flex", alignContent: "center", justifyContent:"center"}}>
        <img src={require('../../assets/images/Intro/kakaoLoginButton.png')} alt="login" className={styles.button} onClick={Login}/>
      </div>
    </div>
  );
}

export default Intro;
