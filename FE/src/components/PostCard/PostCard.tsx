import "./post-card.sass";

interface Prop {
  image: string;
  pubDate: string;
  author: string;
  title: string;
  summary: string;
}

const PostCard = () => {
  return (
    <div className="post-card">
      <a href="/#">
        <div className="image">
          <img
            src="https://habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg"
            alt="Image"
          />
        </div>
        <div className="text">
          <div className="info">
            <time>May 28, 2023</time>
            <span>Bodrooo</span>
          </div>
          <p className="title">Education Is Most POwerfull to Change World</p>
          <div className="summary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quas,
            est architecto culpa, id illo ea distinctio incidunt qui rem quae
            eveniet libero, esse voluptatem autem aperiam deserunt nulla nobis
            iste quo? Debitis deleniti sapiente vero atque sit odio voluptatum
            dolores nemo unde numquam ducimus magni, expedita possimus minus
            sequi.
          </div>
        </div>
      </a>
    </div>
  );
};

export default PostCard;
