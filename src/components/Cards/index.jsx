// import cards from "Data.json";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddCard from "components/Cards/AddCard";
import { Flex } from "components/Layout";
import Logo from "assets/spenmo.png";
import MasterCard from "assets/mastercard.png";

const CardBody = styled.div`
  width: 200px;
  height: 130px;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  border-radius: 16px;
  flex: 0 0 auto;
  padding: 16px 32px;
  font-weight: 500;
`;

const Card = ({ card_name, card_last_four, expiry, colour }) => (
  <CardBody bgColor={colour}>
    <img src={Logo} alt="logo" height="30" />
    <Flex flexDirection="column">
      <span>{card_name}</span>
      <span>**** **** **** {card_last_four}</span>
    </Flex>
    <Flex justifyContent="space-between" alignItems="flex-end">
      <Flex flexDirection="column">
        <span>Expiry</span>
        <span>{expiry}</span>
      </Flex>
      <img src={MasterCard} alt="mastercard" height="40" />
    </Flex>
  </CardBody>
);

const Heading = styled.h2`
  padding: 32px 16px 0;
  margin: 0;
`;

const CardScroll = styled(Flex)`
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0 16px;
  @media (min-width: 460px) {
    flex-grow: 1;
  }
`;

const Wrapper = styled(Flex)`
  flex-direction: column;
  @media (min-width: 460px) {
    padding: 16px;
    flex-direction: row;
  }
`;

const Cards = () => {
  const cards = useSelector((state) => state.cards);
  return (
    <>
      <Heading>Cards</Heading>
      <Wrapper>
        <AddCard />
        <CardScroll alignItems="center" padding="16px" gap="24px">
          {[...cards].map((card, id) => (
            <Card key={id} {...card} />
          ))}
        </CardScroll>
      </Wrapper>
    </>
  );
};

export default Cards;
