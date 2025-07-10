// region 1. Platform Libraries
import React from 'react';
// end-region

// region 2. Project Libraries
import { Jumbotron } from 'react-bootstrap';
// end-region

// region U. UI Markups
import './about.css';
// end-region

const About = () => (
  <div className="about">
    <div className="about__hero">
      <h1 className="about__title">關於本站<br /><span className="about__subtitle">About This Blog</span></h1>
    </div>
    <section className="about__section">
      <h2 className="about__heading">平台理念 Philosophy</h2>
      <p className="about__text">
        這是一個簡單、自由的部落格平台，讓每個人都能自在表達自己，回歸寫作的本質。
        <br />
        This is a simple and free blog platform, bringing writing back to its essence: freedom of expression.
      </p>
    </section>
    <section className="about__section">
      <h2 className="about__heading">功能特色 Features</h2>
      <ul className="about__list">
        <li>隨時隨地登入帳號，撰寫、編輯、刪除自己的文章<br /><span>Log in anytime, anywhere to write, edit, or delete your own articles</span></li>
        <li>乾淨現代的介面，專注於內容創作<br /><span>Clean, modern interface focused on content creation</span></li>
        <li>支援 Markdown 排版<br /><span>Markdown support</span></li>
        <li>文章自動保存，避免資料遺失<br /><span>Autosave to prevent data loss</span></li>
      </ul>
    </section>
    <section className="about__section">
      <h2 className="about__heading">適合對象 For You</h2>
      <ul className="about__list">
        <li>技術人、學生、上班族、生活記錄者<br /><span>Techies, students, office workers, diary keepers</span></li>
        <li>想分享想法、記錄生活、發表觀點的你<br /><span>Anyone who wants to share thoughts, record life, or express opinions</span></li>
      </ul>
    </section>
    <section className="about__section">
      <h2 className="about__heading">你可以這樣用 Use Cases</h2>
      <ul className="about__list">
        <li>寫技術筆記、學習心得<br /><span>Write tech notes, learning journals</span></li>
        <li>分享旅遊、生活、心情故事<br /><span>Share travel, life, or personal stories</span></li>
        <li>發表觀點、討論興趣、記錄成長<br /><span>Express opinions, discuss hobbies, record your growth</span></li>
      </ul>
    </section>
    <section className="about__section about__encourage">
      <h2 className="about__heading">勇敢發聲，盡情創作！<br /><span>Speak up, create boldly!</span></h2>
      <p className="about__text">
        讓這裡成為你思想與故事的園地，歡迎你加入這個自由寫作的大家庭。
        <br />
        Make this a garden for your thoughts and stories. Welcome to our free writing community!
      </p>
    </section>
  </div>
);


export default About;
