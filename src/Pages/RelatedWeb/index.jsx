import React from "react";
import {
  CardInitial,
  ContainerButtons,
  ContainerWeb,
  FieldInput,
  StyleButton,
  StyleButtonBack,
  Subtitle,
  TopSeparator,
  UrlLabel,
} from "./styled";
const RelatedWeb = ({ printData, nextPage, pageBefore, errors, touched }) => {
  return (
    <CardInitial>
      <ContainerWeb>
        <img src="icons/navigationMan.svg" alt="Man" />
        <Subtitle>
          <p> ¿Cuentas con dominio propio?</p>
        </Subtitle>

        <UrlLabel>
          <FieldInput
            placeholder="Ingrese la url de su tienda"
            name="url"
            active={errors.url && touched.url}
          />{" "}
          <p>.tu-ecommerce.cl </p>
        </UrlLabel>
        {errors.url && touched.url ? <div>{errors.url}</div> : null}
        <TopSeparator>
          <p>PASO 2</p>
        </TopSeparator>

        <ContainerButtons>
          <StyleButtonBack onClick={pageBefore}>
            <h3> ATRÁS </h3>
          </StyleButtonBack>
          <StyleButton type="submit">
            <h3> SIGUIENTE</h3>
          </StyleButton>
        </ContainerButtons>

        <button onClick={printData}> DATA</button>
      </ContainerWeb>
    </CardInitial>
  );
};

export default RelatedWeb;
