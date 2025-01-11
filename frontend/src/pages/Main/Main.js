import React from 'react';
import styles from './Main.module.css';
import Button from '../../components/common/button/button';
import star from '../../assets/images/Intro/shootingStar.svg';
import { LuNotebookPen } from "react-icons/lu";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.clover}>
        <img src={star} alt="shootingStar" className={styles.mainImg} />
      </div>
      <div className={styles.title}>
        버킷 노트
        <LuNotebookPen style={{marginLeft:"2vw", fontSize:"clamp(20px, 4vw, 32px)"}}/>
      </div>
      <div className={styles.context}>
      올해 꼭 이루고 싶은 목표를 적어주세요. <br/>
      잊고 지낸 목표를 연말에 상기시켜드립니다.
      </div>
      <div className={styles.buttonContainer}> 
        <Button text={"내 버킷노트로"} link={"/mypage"}/>
        <Button text={"친구 버킷노트 찾기"} link={"/search"}/>
      </div>
    </div>
  );
}

export default Main;
