import "./App.css";
import Tweet from "./Components/TweetCard/TweetCard";
import { TweetCardProps } from "./types/tweet-props";

function App() {
  const tweetData: TweetCardProps = {
    author: {
      name: "John Doe",
      avatarUrl: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    text: "This is a sample tweet text.",
    image: {
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg",
      description: "A description of the image",
    },
    date: "2022-01-01 08:20 PM",
  };
  return (
    <div className="grid-container">
      <Tweet
        author={tweetData.author}
        date={tweetData.date}
        text={tweetData.text}
        image={tweetData.image}
      />
    </div>
  );
}

export default App;
