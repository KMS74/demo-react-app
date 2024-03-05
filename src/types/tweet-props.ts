export type TweetAuthor = {
  name: string;
  avatarUrl: string;
};

export type TweetImage = {
  imageUrl: string;
  description: string;
};

export type TweetCardProps = {
  author: TweetAuthor;
  text: string;
  image: TweetImage;
  date: string;
};
