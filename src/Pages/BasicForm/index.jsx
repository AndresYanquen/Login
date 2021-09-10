import React, { useState } from "react";
import { Card } from "./styled";
import InitialPage from "../InitialPage";
import NameShop from "../NameShop";
import RelatedWeb from "../RelatedWeb";
import ShopLocation from "../ShopLocation";

export const BasicForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([0]);
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

  const saveDataShop = (json) => {
    console.log(1, json);
    console.log(json.nameshop);
    let info = {
      nameshop: json.nameshop,
    };

    console.log(3, info.name);
    setData((data) => [...data, info]);
    console.log(data);
  };

  const saveDataLocation = (json) => {
    console.log(1, json);
    console.log(json.nameshop);
    let info = {
      nameshop: json.nameshop,
    };

    console.log(3, info.name);
    setData((data) => [...data, info]);
    console.log(data);
  };

  const saveDataWeb = (json) => {
    console.log(1, json);
    console.log(json.url);
    let info = {
      url: json.url,
    };

    console.log(3, info.url);
    setData((data) => [...data, info]);
    console.log(data);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const pageBefore = () => {
    setPage(page - 1);
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
        <NameShop
          saveDataShop={saveDataShop}
          printData={printData}
          nextPage={nextPage}
          pageBefore={pageBefore}
        ></NameShop>
      )}
      {page === 2 && (
        <ShopLocation
          saveDataLocation={saveDataLocation}
          nextPage={nextPage}
          printData={printData}
          pageBefore={pageBefore}
        ></ShopLocation>
      )}
      {page === 3 && (
        <RelatedWeb
          saveDataWeb={saveDataWeb}
          nextPage={nextPage}
          printData={printData}
          pageBefore={pageBefore}
        ></RelatedWeb>
      )}
    </Card>
  );
};

export default BasicForm;
