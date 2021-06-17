import React from "react";
import { useSelector } from "react-redux";
import webLogo2 from "../../Assets/img/Bean Eater-1s-200px.gif";
export default function Loading() {
  const isloading = useSelector((state) => state.LoadingReducer.loading);
  let renderLoading = () => {
    if (isloading) {
      return (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <img src={webLogo2} />
          </div>
        </div>
      );
    }
  };
  return <div>{renderLoading()}</div>;
}
