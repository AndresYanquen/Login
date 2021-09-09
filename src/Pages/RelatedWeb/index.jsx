import React from "react";
import * as Yup from "yup";
import {
  ContainerWeb,
  FieldInput,
  LabelRadio,
  LabelTextRadio,
  Subtitle,
} from "./styled";
import Radio from "@material-ui/core/Radio";
import { Form, Formik } from "formik";

const SignupSchema = Yup.object().shape({
  url: Yup.string().required("¡Nombre obligatorio"),
});

const RelatedWeb = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <ContainerWeb>
      <img src="icons/navigationMan.svg" alt="Navigation" />
      <Subtitle>
        {" "}
        <p> ¿Cuentas con dominio propio? </p>{" "}
      </Subtitle>
      {/* <LabelRadio>
        <LabelTextRadio>
          {" "}
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="true"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
          <p>SI</p>
        </LabelTextRadio>
        <LabelTextRadio>
          {" "}
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-button-demo"
            inputProps={{ "aria-label": "B" }}
          />
          <p>NO</p>
        </LabelTextRadio>
      </LabelRadio> */}
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
          <Form>
            <FieldInput
              placeholder="Ingrese el nombre de su tienda"
              name="url"
            />
            {errors.url && touched.url ? <div>{errors.url}</div> : null}
          </Form>
        )}
      </Formik>
    </ContainerWeb>
  );
};

export default RelatedWeb;
