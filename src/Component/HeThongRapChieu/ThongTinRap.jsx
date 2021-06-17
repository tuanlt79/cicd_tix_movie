import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thongTinHeThongRapAction } from "../../Action/PhimAction";

export default function ThongTinRap() {
  const cumRap = useSelector((state) => state.PhimReducer.cumRap);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thongTinHeThongRapAction());
  }, []);
  //   console.log({ cumRap });
  const thongTinCumRap = () => {
    return cumRap?.map((danhSachRap, index) => {
      let classActive = index === 0 ? "active" : "";
      return (
        <a
          key={index}
          className={`text-center nav-link ${classActive}`}
          id="v-pills-home-tab"
          data-toggle="pill"
          href={`#${danhSachRap.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          <img src={danhSachRap.logo} width="50px" />
        </a>
      );
    });
  };
  return <Fragment>{thongTinCumRap()}</Fragment>;
}
