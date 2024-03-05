export type TweetAuthor = {
  name: string;
  avatarUrl: string;
};

export type TweetImage = {
  imageUrl: string;
  description: string;
};

export type TweetProps = {
  author: TweetAuthor;
  text: string;
  image: TweetImage;
  date: string;
};
