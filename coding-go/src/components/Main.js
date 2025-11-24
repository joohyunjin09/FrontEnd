import styles from './Main.module.css'
import { MdFace4 } from "react-icons/md";
import { TbMessage2Question } from "react-icons/tb";
import { PiRankingFill } from "react-icons/pi";
import { LuGift } from "react-icons/lu";

export default function Main() {
  return (
    <div>

      <div className={styles.NavBar}>
        <h2 className={styles.Logo}>CodingGo!</h2>

        <div className={styles.NavItems}>
          <MdFace4 size={40}/>
          <div className={styles.ItemsTexts}>
            <p>프로필</p>
          </div>
        </div>

        <div className={styles.NavItems}>
          <TbMessage2Question size={40}/>
          <div className={styles.ItemsTexts}>
            <p>문제</p>
          </div>
        </div>

        <div className={styles.NavItems}>
          <PiRankingFill size={40}/>
          <div className={styles.ItemsTexts}>
            <p>리더보드</p>
          </div>
        </div>

        <div className={styles.NavItems}>
          <LuGift size={40}/>
          <div className={styles.ItemsTexts}>
            <p>퀘스트</p>
          </div>
        </div>
        

      </div>
    </div>
  )
}