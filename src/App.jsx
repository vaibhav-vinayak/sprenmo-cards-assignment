import Cards from "components/Cards";

const cards = [
  {
    card_name: "Superhuman",
    card_last_four: "5139",
    expiry: "03/2026",
    colour: "ff0000",
  },
];

const App = () => (
  <div>
    <Cards list={cards} />
  </div>
);

export default App;
