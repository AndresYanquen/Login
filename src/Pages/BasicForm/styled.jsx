import styled from "styled-components";
import { Form } from "formik";

export const Card = styled.div`
  display: flex;
  background-color: #00bf97;
  overflow-y: hidden;
  justify-content: center;
  height: 100vh;
`;

export const CardName = styled.div`
  display: flex;
  overflow-y: hidden;
  justify-content: center;
  height: 100vh;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  overflow-x: hidden;
  height: auto;
`;
