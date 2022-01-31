import styled, { css } from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { savePlayer } from "../redux/actions";


export default function FormModal() {

  const dispatch = useDispatch();

  const customStyles = {
    overlay: {
      opacity: 1,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: '#212529',
      padding: '0',
      border: '5px solid black',
      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
      display: "grid",
    },
  };

  const initialState = {
    name: "",
    category: "any",
  };

  const[modalIsOpen, setIsOpen] = useState(true);

  const[state, setState] = useState(initialState);
  const[error, setError] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regex = /^[a-zA-Z ]+$/;
    
    for(let key in state){
      if(state[key]===''){
        setError(`You must provide the ${key}!`);
        return;
      };
      if(!regex.test(key)){
        setError(`You must provide a correct ${key}!`);
        return;
      };
    };
    setError("");
    setIsOpen(false);
    dispatch(savePlayer(state));
  };

  const handleChange = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({ ...prev, [inputName]: value}));
  };

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Form Modal"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
    >

      <StyledFormWrapper>
      
        <StyledForm onSubmit={handleSubmit}>
          <StyledFieldSet>
          <StyledLegend>Quiz Game</StyledLegend>
          <StyledLabel htmlFor="name">Your Name: </StyledLabel>
          <StyledInput type="name" id="name" name="name" value={state.name} onChange={handleChange} />
          <br/>
        
        <StyledButton type="submit">Start</StyledButton>
        </StyledFieldSet>
        {error &&(
          <StyledError><p>{error}</p></StyledError>
        )}
        </StyledForm>
        
      </StyledFormWrapper>
      
    </Modal>
  );
};


const StyledForm = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 41px;
  box-sizing: border-box;
  text-shadow: 0 1px 0 #ccc;
  display: grid;             
`;

const StyledFormWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  font-family: "Dosis";
`;

const StyledInput = styled.input`
  display: block;
  height: 3rem;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 900;
`;

const StyledButton = styled.button`
  color: whitesmoke;
  height: 3rem;
  width: 7rem;
  font-weight: 900;
  font-size: 2rem;
  border: solid 3px #3cc368;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  &:hover {
    box-shadow: 0 0 40px 40px #3cc368 inset;
  }  
`;

const StyledError = styled.div`
  color: red;
  font-weight: 900;
  text-shadow: 0 1px 0 red;
`;

const StyledFieldSet = styled.fieldset`
  border-radius: 10px;
  padding: 30px;
  border: solid 5px #3cc368;
`;

const StyledLegend = styled.legend`
  font-size: 2rem;
  font-weight: 900;
`;