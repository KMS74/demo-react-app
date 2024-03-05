type Props = {
  name: string;
  message?: string;
};
const WelcomeMessage = ({ name, message = "Welcome" }: Props) => {
  return (
    <h1>
      {message} {name}
    </h1>
  );
};

export default WelcomeMessage;
