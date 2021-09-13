import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  CardInitial,
  ContainerButtons,
  ContainerShop,
  FieldInput,
  FormStyled,
  StyleButton,
  StyleButtonBack,
  Subtitle,
} from "./styled";

const NameShop = ({ printData, nextPage, pageBefore, errors, touched }) => {
  return (
    <CardInitial>
      <ContainerShop>
        <img src="icons/woman.svg" alt="shop"></img>
        <Subtitle>
          <p> Elija el nombre de su tienda</p>
        </Subtitle>
        <FieldInput
          placeholder="Ingrese el nombre de su tienda"
          name="nameshop"
          active={errors.nameshop && touched.nameshop}
        />
        {errors.nameshop && touched.nameshop ? (
          <div>{errors.nameshop}</div>
        ) : null}
        <p>PASO 2</p>
        <ContainerButtons>
          <StyleButtonBack onClick={pageBefore}>
            <h3> ATRÁS </h3>
          </StyleButtonBack>
          <StyleButton onClick={() => nextPage()}>
            <h3> SIGUIENTE</h3>
          </StyleButton>
        </ContainerButtons>
        <button onClick={printData}> Data</button>
      </ContainerShop>
    </CardInitial>
  );
};

export default NameShop;
