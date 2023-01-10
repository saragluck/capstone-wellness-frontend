import axios from "axios";
import { useState, useEffect } from "react";
import { ProductivityIndex } from "./ProductivityIndex";
import { LogProductivity } from "./LogProductivity";
import { ProductivityModal } from "./ProductivityModal";
import { ProductivitiesShow } from "./ProductivitiesShow";
import ProductivityGraph from "./ProductivityGraph";

export function Productivity(props) {
  const [productivities, setProductivities] = useState([]);
  const [isProductivitiesShowVisible, setIsProductivitiesShowVisible] = useState(false);
  const [currentProductivity, setCurrentProductivity] = useState({});

  const handleProductivityIndex = () => {
    axios.get("http://localhost:3000/productivity.json").then((response) => {
      console.log(response.data);
      setProductivities(response.data);
    });
  };

  const handleProductivityGraph = () => {
    axios.get("http://localhost:3000/productivity.json");
  };
  useEffect(handleProductivityIndex, []);

  const handleLogProductivity = (params, successCallback) => {
    console.log("handleLogProductvity", params);
    axios.post("http://localhost:3000/productivity.json", params).then((response) => {
      setSleeps([...productivities, response.data]);
      successCallback();
    });
  };

  const handleShowProductivity = (sleep) => {
    console.log("handleShowProductvity", productivity);
    setIsProductivitiesShowVisible(true);
    setCurrentProductivity(productivity);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductivitiesShowVisible(false);
  };

  const handleUpdateProductivity = (id, params, successCallback) => {
    console.log("handleUpdateProductivity", params);
    axios.patch(`http://localhost:3000/productivity/${id}.json`, params).then((response) => {
      setProductivities(
        productivities.map((productivity) => {
          if (productivity.id === response.data.id) {
            return response.data;
          } else {
            return productivity;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyProductivity = (productivity) => {
    console.log("handleDestroy", productivity);
    axios.delete(`http://localhost:3000/productivity/${productvity.id}.json`).then((response) => {
      setProductivities(productivities.filter((p) => p.id !== productivity.id));
      handleClose();
    });
  };

  useEffect(handleProductivityIndex, []);

  return (
    <div>
      <ProductivityIndex productivities={productivities} onShowProductivity={handleShowProductivity} />
      <ProductivityGraph />
      <LogProductivity onLogProductivity={handleLogProductivity} />
      <ProductivityModal show={isProductivitiesShowVisible} onClose={handleClose}>
        <ProductivitiesShow
          productivity={currentProductivity}
          onUpdateProductivity={handleUpdateProductivity}
          onDestroyProductivity={handleDestroyProductivity}
        />
      </ProductivityModal>
    </div>
  );
}
