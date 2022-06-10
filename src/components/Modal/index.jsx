import styled from "styled-components";

const ModalContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

const ModalContent = styled.div`
  position: fixed;
  top: 15vh;
  left: 50vw;
  transform: translate(-50%);
  background-color: #fefefe;
  padding: 16px;
  border: 1px solid #888;
  border-radius: 16px;
  width: calc(100vw - 64px);
  @media (min-width: 564px) {
    width: 500px;
  }
`;

const ModalCloseBtn = styled.div`
  color: #000000;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const Modal = ({ show, onClose, children }) => (
  <ModalContainer show={show}>
    <ModalContent>
      <ModalCloseBtn onClick={onClose}>&times;</ModalCloseBtn>
      {children}
    </ModalContent>
  </ModalContainer>
);

export default Modal;
