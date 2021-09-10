import React from "react";
import * as Yup from "yup";
import {
  CardInitial,
  ContainerButtons,
  ContainerWeb,
  FieldInput,
  FormStyled,
  LabelRadio,
  LabelTextRadio,
  StyleButton,
  StyleButtonBack,
  Subtitle,
  UrlLabel,
} from "./styled";
import Radio from "@material-ui/core/Radio";
import { Form, Formik } from "formik";

const SignupSchema = Yup.object().shape({
  url: Yup.string().required("¡Url obligatoria!"),
});

const RelatedWeb = ({ saveDataShop, printData, nextPage, pageBefore }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <CardInitial>
      <ContainerWeb>
        <img src="icons/navigationMan.svg" alt="Man" />
        <Subtitle>
          <p> ¿Cuentas con dominio propio?</p>
        </Subtitle>
        <Formik
          initialValues={{
            url: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <FormStyled>
              <UrlLabel>
                <FieldInput
                  placeholder="Ingrese la url de su tienda"
                  name="url"
                  active={errors.url && touched.url}
                />{" "}
                <p>.tu-ecommerce.cl </p>
              </UrlLabel>
              {errors.url && touched.url ? <div>{errors.url}</div> : null}

              <p>PASO 2</p>
              <ContainerButtons>
                <StyleButtonBack onClick={pageBefore}>
                  <h3> ATRÁS </h3>
                </StyleButtonBack>
                <StyleButton type="submit">
                  <h3> SIGUIENTE</h3>
                </StyleButton>
              </ContainerButtons>
            </FormStyled>
          )}
        </Formik>
      </ContainerWeb>
    </CardInitial>
  );
};

export default RelatedWeb;
