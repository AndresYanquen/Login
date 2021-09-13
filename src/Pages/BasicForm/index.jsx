import React, { useState } from "react";
import { Card, CardName, FormStyled } from "./styled";
import * as Yup from "yup";
import InitialPage from "../InitialPage";
import NameShop from "../NameShop";
import RelatedWeb from "../RelatedWeb";
import ShopLocation from "../ShopLocation";
import ConfirmationPage from "../ConfirmationPage";
import { Formik } from "formik";

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

export const BasicForm = () => {
  const initialValues = {
    name: "",
    password: "",
    nameshop: "",
    url: "",
    locationshop: "",
  };
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const pageBefore = () => {
    setPage(page - 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        nextPage();
      }}
    >
      {({ errors, touched }) => (
        <FormStyled>
          {page === 0 && (
            <Card>
              <InitialPage
                errors={errors}
                touched={touched}
                nextPage={nextPage}
              ></InitialPage>
            </Card>
          )}

          {page === 1 && (
            <CardName>
              <NameShop
                errors={errors}
                touched={touched}
                nextPage={nextPage}
                pageBefore={pageBefore}
              ></NameShop>
            </CardName>
          )}
          {page === 2 && (
            <CardName>
              <ShopLocation
                errors={errors}
                touched={touched}
                nextPage={nextPage}
                pageBefore={pageBefore}
              ></ShopLocation>
            </CardName>
          )}
          {page === 3 && (
            <CardName>
              {" "}
              <RelatedWeb
                errors={errors}
                touched={touched}
                nextPage={nextPage}
                pageBefore={pageBefore}
              ></RelatedWeb>
            </CardName>
          )}

          {page === 4 && (
            <CardName>
              {" "}
              <ConfirmationPage
                errors={errors}
                touched={touched}
              ></ConfirmationPage>
            </CardName>
          )}
        </FormStyled>
      )}
    </Formik>
  );
};

export default BasicForm;
