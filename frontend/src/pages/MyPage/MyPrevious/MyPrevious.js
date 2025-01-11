import React from "react";
import styles from "./MyPrevious.module.css";
import BackButton from "../../../components/common/backbutton/backbutton";

const MyPrevious = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <BackButton className={styles.BackButton} link={"/mypage"} />
        <div className={styles.title}>내 이전 버킷노트</div>
      </div>
      <div className={styles.context}>이전의 버킷노트를 확인해보세요!</div>
      <div className={styles.listContainer}>
        <div className={styles.listComponents}></div>
        <div></div>
      </div>
    </div>
  );
};

export default MyPrevious;
