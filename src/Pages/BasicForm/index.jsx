import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card } from "./styled";
import InitialPage from "../InitialPage";
import NameShop from "../NameShop";

export const BasicForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const printData = () => {
    console.log(data);
  };

  const saveData = (json) => {
    console.log(1, json);
    console.log(json.name);
    let info = {
      name: json.name,
      password: json.password,
    };
    console.log(3, info.name);
    setData((data) => [...data, info]);
    console.log(data);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <Card>
      {page === 0 && (
        <InitialPage
          saveData={saveData}
          nextPage={nextPage}
          printData={printData}
        ></InitialPage>
      )}

      {page === 1 && (
        <>
          <NameShop></NameShop>
        </>
      )}
    </Card>
  );
};

export default BasicForm;
