import { TweetCardProps } from "../../types/tweet-props";
import styles from "./TweetCard.module.css";

const Tweet = (props: TweetCardProps) => {
  // props destructuring
  const { author, image, date, text } = props;

  return (
    <div className={styles.tweet}>
      <div className={styles.user}>
        <img
          className={styles.avatar}
          src={author.avatarUrl}
          alt={author.name}
        />
        <p className={styles.userName}>{props.author.name}</p>
      </div>
      <p className={styles.tweetText}>{text}</p>
      <img
        className={styles.tweetImage}
        src={image.imageUrl}
        alt={image.description}
      />
      <p className={styles.tweetDate}>{date}</p>
    </div>
  );
};

export default Tweet;
