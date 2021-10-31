import Card from "./card";
const Home = () => {
  return (
    <Card
      txtcolor="black"
      header="BadBank Home"
      title="Welcome to the Bad Bank"
      text="You can use this bank, no problem"
      body={
        <img src="bad_bank/img/bank.png" className="img-fluid" alt="Responsibe image" />
      }
    />
  );
};
export default Home;
