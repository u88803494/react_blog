import React from 'react';
import {
  Button, Figure, Card, CardGroup,
} from 'react-bootstrap';
import './home.css';


const SeeMoreButton = ({ className, text, variant, href = "#/posts" }) => (
  <Button variant={variant} href={href} className={className}>
    {text}
    <span style={{ marginLeft: '0.5rem' }}>→</span>
  </Button>
);

const Advantages = ({ avaData }) => (
  <CardGroup>
    {avaData.map(data => (
      <Card key={data.url} className="shadow-hover">
        <Card.Img variant="top" src={data.url} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            {data.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {' '}
            {data.footer}
            {' '}
          </small>
        </Card.Footer>
      </Card>
    ))}
  </CardGroup>
);

const Home = () => {
  const avaData = [
    {
      url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      title: '文章功能',
      text: '可以新增、刪除、編輯文章，提供完整的內容管理體驗',
      footer: '功能強大',
    },
    {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: '現代設計',
      text: '採用現代化設計語言，提供優美的視覺體驗',
      footer: '美觀易用',
    },
    {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: '快速載入',
      text: '網站換頁不讀檔，使用 React SPA 技術',
      footer: '體驗流暢',
    },
  ];
  return (
    <div className="homepage">
      <header className="homepage__header">
        <div className="homepage__header--title">這就是部落格</div>
        <div className="homepage__header--subtitle">分享想法，記錄生活的美好時光</div>
        <SeeMoreButton
          className="homepage__header--btn"
          text="開始探索"
          variant="outline-light"
        />
      </header>
      <hr />
      <main className="homepage__main">
        <div className="main__askwhy">
          <div className="main__askwhy--content">
            <li>你想要寫 BLOG 卻沒地方去？</li>
            <li>簡單的特效就好，但是市面上的 blog 都很複雜</li>
            <li>想回到那個美好純真的年代嗎？</li>
            <li>回歸部落格的本質想寫什麼就寫什麼？</li>
          </div>
        </div>
        <div className="main__advantages">
          <Advantages avaData={avaData} />
          <div className="main__advantages--btn">
            <SeeMoreButton
              className="homepage__main--btn"
              text="查看更多文章"
              variant="primary"
            />
          </div>
        </div>
        <hr />
        <div className="main__CTA">
          <div className="main__CTA--text">
            {`寫文章最注重的是什麼？
不就是表達出自己內心中想寫的內容就好。
就好像一顆大樹，靜靜的吸收養分，
然後散發你的靈性，發揮你的潛能。
寫吧！孩子`}
          </div>
          <Figure className="figure">
            <Figure.Image
              width={1920}
              height={1080}
              alt="靜謐的自然風景"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <Figure.Caption>
              安安靜靜地生長於天地之間，從從容容地經歷著春夏秋冬。一季又一季，一年又一年……不像鮮花那樣嬌貴，從來不懼風吹雨淋。大樹依然屹立，藤蔓永訴纏綿……
            </Figure.Caption>
          </Figure>
          <div className="main__CTA-btn">
            <SeeMoreButton
              className="homepage__main--btn"
              text="立刻開始寫作"
              variant="outline-primary"
            />
          </div>
        </div>
      </main>
    </div>
  );
};


export default Home;
