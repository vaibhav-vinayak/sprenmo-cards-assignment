import { useState } from "react";
import styled from "styled-components";
import Plus from "assets/plus.svg";
import Logo from "assets/spenmo.png";
import Edit from "assets/edit.png";
import MasterCard from "assets/mastercard.png";
import Modal from "components/Modal";
import { isValidName } from "utils/validations";
import { Flex } from "components/Layout";
import { CARD_BACKGROUNDS } from "common/constants";
import { useDispatch } from "react-redux";
import { addCard } from "store/CardsSlice";

const AddCardContainer = styled(Flex)`
  border-radius: 8px;
  border: 1px dashed grey;
  width: 220px;
  height: 120px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  flex: 0 0 auto;
  margin: 20px auto;
`;

const AddCardText = styled.span`
  font-weight: 500;
  color: grey;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  margin: 16px 0;
`;

const CardContainer = styled(Flex)`
  width: 100%;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

const CardBody = styled(Flex)`
  border-radius: 16px;
  width: calc(100% - 64px);
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  padding: 32px 16px;
  gap: 16px;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 460px) {
    width: 300px;
  }
`;

const CardHolderInput = styled.input`
  background-color: transparent;
  width: calc(100% - 24px);
  border: none;
  outline: none;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Footer = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const DateBlock = styled(Flex)`
  flex-direction: column;
`;

const ColorPallete = styled(Flex)`
  width: calc(100% - 32px);
  justify-content: space-between;
  margin: 32px auto;
`;

const Color = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: ${({ bgColor }) => bgColor};
  @media (min-width: 460px) {
    width: 40px;
    height: 40px;
  }
`;

const Button = styled.button`
  border-radius: 32px;
  padding: 16px;
  width: calc(100% - 64px);
  margin: auto;
  display: block;
  background-color: ${({ disabled }) => (disabled ? "grey" : "black")};
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: 460px) {
    width: 300px;
  }
`;

const AddCard = () => {
  // setting show
  const [showCardDesigner, setShowCardDesigner] = useState(false);
  /**
   * @description toggles between show/hide state of modal
   */
  const toggleCardDesigner = () => setShowCardDesigner((s) => !s);

  // setting input data
  const [cardHolder, setCardHolder] = useState("NAME");
  /**
   * @description Updates the card holder value
   * @param {SyntheticEvent} e The event object
   */
  const handleChange = (e) =>
    isValidName(e.nativeEvent.data) &&
    setCardHolder(e.target.value.toUpperCase());

  // setting bg color
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const handleColorSelect = (e) =>
    setBackgroundColor(e.target.getAttribute("data-color"));

  const dispatch = useDispatch();
  /**
   * @description adds card to store/api
   */
  const confirm = () => {
    dispatch(
      addCard({
        card_name: cardHolder,
        card_last_four: "5139", // keeping it fixed for the time being
        expiry: "03/26", // keeping it fixed for the time being
        colour: backgroundColor,
      })
    );
    setBackgroundColor(CARD_BACKGROUNDS[0]);
    setCardHolder("NAME");
    toggleCardDesigner();
  };
  return (
    <>
      <Modal onClose={toggleCardDesigner} show={showCardDesigner}>
        <CardContainer>
          <Title>Create Virtual Card</Title>
          <CardBody bgColor={backgroundColor}>
            <img src={Logo} alt="logo" height="40" />
            <div>
              <CardHolderInput
                id="cardHolderInput"
                type="text"
                onChange={handleChange}
                value={cardHolder}
                maxLength="14"
                data-testid="input"
              />
              <label htmlFor="cardHolderInput">
                <img src={Edit} alt="edit" height="20" />
              </label>
            </div>
            <Footer>
              <DateBlock>
                <span>Expiry</span>
                <span>03/26</span>
              </DateBlock>
              <img src={MasterCard} alt="mastercard" height="40" />
            </Footer>
          </CardBody>
        </CardContainer>
        <ColorPallete>
          {CARD_BACKGROUNDS.map((color, id) => (
            <Color
              key={id}
              data-color={color}
              bgColor={color}
              onClick={handleColorSelect}
              data-testid={color}
            />
          ))}
        </ColorPallete>
        <Button role="button" disabled={!cardHolder.length} onClick={confirm}>
          confirm
        </Button>
      </Modal>
      <AddCardContainer onClick={toggleCardDesigner}>
        <img src={Plus} alt="plus-icon" height="30" />
        <AddCardText>Create/Activate Cards</AddCardText>
      </AddCardContainer>
    </>
  );
};

export default AddCard;
