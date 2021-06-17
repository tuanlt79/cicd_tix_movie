import React, { Fragment } from "react";
import Carousel from "../../Component/Carousel/Carousel";
import DanhSachPhim from "../../Component/DanhSachPhim/DanhSachPhim";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import HeThongRapChieu from "../../Component/HeThongRapChieu/HeThongRapChieu";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Carousel />
      <DanhSachPhim />
      <HeThongRapChieu />
      <Footer />
    </Fragment>
  );
}
