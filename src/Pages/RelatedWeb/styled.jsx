import { Field } from "formik";
import styled from "styled-components";

export const ContainerWeb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 405px;
    height: 250px;
  }
`;

export const Subtitle = styled.div`
  p {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }
`;

export const LabelRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelTextRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldInput = styled(Field)`
  height: 30px;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: white;
  border: none;
  width: 85%;
  margin: 10px 0px;
`;
