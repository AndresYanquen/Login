import { Formik, Form } from "formik";
import * as Yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  FieldContainerError,
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
} from "./styled";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "¡Nombre muy corto!")
    .max(50, "¡Nombre muy largo!")
    .required("¡Nombre obligatorio"),
  password: Yup.string()
    .min(2, "Contraseña muy corta!")
    .max(50, "Contraseña muy larga!")
    .required("Contraseña obligatoria"),
});

const InitialPage = ({ saveData, nextPage }) => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            nameshop: "",
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
                <FieldContainerError active={errors.name && touched.name}>
                  <FieldInput
                    placeholder="Ingrese su nombre"
                    name="name"
                    active={errors.name && touched.name}
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </FieldContainerError>
                <FieldContainerError
                  active={errors.password && touched.password}
                >
                  <FieldInput
                    placeholder="Contraseña"
                    name="password"
                    active={errors.password && touched.password}
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}{" "}
                </FieldContainerError>
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
