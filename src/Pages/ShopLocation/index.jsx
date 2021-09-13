import React from "react";
import {
  CardInitial,
  ContainerButtons,
  ContainerLocation,
  FieldInput,
  StyleButton,
  StyleButtonBack,
  Subtitle,
} from "./styled";

const ShopLocation = ({ printData, nextPage, pageBefore, errors, touched }) => {
  return (
    <CardInitial>
      <ContainerLocation>
        <img src="icons/map.svg" alt="map"></img>
        <Subtitle>
          <p> ¿Dónde está ubicada su tienda?</p>
        </Subtitle>

        <FieldInput
          placeholder="Ingrese la ubicación de su tienda"
          name="locationshop"
          active={errors.locationshop && touched.locationshop}
        />
        {errors.locationshop && touched.locationshop ? (
          <div>{errors.locationshop}</div>
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
      </ContainerLocation>
    </CardInitial>
  );
};

export default ShopLocation;
