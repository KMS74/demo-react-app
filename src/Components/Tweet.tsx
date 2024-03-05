import { TweetProps } from "../types/tweet-props";

const Tweet = (props: TweetProps) => {
  // props destructuring
  const { author, image, date, text } = props;

  return (
    <div className="Tweet">
      <div className="User">
        <img className="Avatar" src={author.avatarUrl} alt={author.name} />
        <div className="User-name">{props.author.name}</div>
      </div>
      <div className="Tweet-text">{text}</div>
      <img
        className="Tweet-image"
        src={image.imageUrl}
        alt={image.description}
      />
      <div className="Tweet-date">{date}</div>
    </div>
  );
};

export default Tweet;
