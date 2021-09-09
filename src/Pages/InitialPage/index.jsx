import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {
  FieldInput,
  FormContainer,
  InitialComment,
  InitialDescription,
  LabelButton,
  LabelInfo,
  Logo,
  StyleButton,
  Subtitle,
  TextFieldsInitial,
  TextLabels,
} from "./styled";
import { Button } from "@material-ui/core";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "¡Nombre muy corto!")
    .max(50, "¡Nombre muy largo!")
    .required("¡Nombre obligatorio"),
  password: Yup.string()
    .min(4, "¡Contraseña muy corta!")
    .required("¡Contraseña obligatoria!"),
});

const InitialPage = ({ saveData, nextPage }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  return (
    <FormContainer>
      <Logo>
        <img src="icons/logot.svg" alt="logo"></img>
      </Logo>
      <Subtitle>
        <p>
          Plataforma para el comercio y solución a todos los negocios para
          vender en linea
        </p>
      </Subtitle>
      <InitialComment> Bienvenido</InitialComment>
      <InitialDescription>
        <p>Estás a unos pasos de iniciar con Tú E-commerce!!!</p>
      </InitialDescription>
      <LabelInfo>
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            saveData(values);
            nextPage();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <TextFieldsInitial>
                <FieldInput placeholder="Ingrese su nombre" name="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <FieldInput placeholder="Contraseña" name="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}{" "}
              </TextFieldsInitial>

              <LabelButton>
                <h5> PASO 1</h5>
                <StyleButton type="submit">
                  <h3>SIGUIENTE</h3>
                </StyleButton>
              </LabelButton>
            </Form>
          )}
        </Formik>{" "}
      </LabelInfo>
    </FormContainer>
  );
};

export default InitialPage;
