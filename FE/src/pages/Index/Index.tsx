import Footer from "../../components/Footer/Footer";
import PostCard from "../../components/PostCard/PostCard";
import "./index.sass";

const Index = () => {
  return (
    <>
      <main>
        <div className="intro">
          <div className="text">
            <h1>ExploreElysium</h1>
            <p>Temukan Cerita, Pemikiran dari Penulis Degan Topik Apapun.</p>
          </div>
          <div className="image">
            <img src="/knowledge.png" alt="Knowledge" />
          </div>
        </div>
        <div className="heading">
          <span>Recenly Post</span>
        </div>
        <div className="recently-post">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
