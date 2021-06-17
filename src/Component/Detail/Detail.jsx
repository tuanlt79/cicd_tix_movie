import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhimAction } from "../../Action/PhimAction";
import LightLity from "lity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import moment from "moment";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layChiTietPhimAction(id));
    return () => {
      dispatch({ type: "resetDSG" });
    };
  }, []);
  // console.log({ chiTietPhim });
  return (
    <section className="detail ">
      <div className="background_main">
        <div className="style__blur">
          <img src={chiTietPhim.hinhAnh} alt="" />
        </div>
        <div className="style__gradient"></div>
        <div className="detail__content container">
          <div className="row">
            <div className="col-7">
              <div className="img__film">
                <img
                  src={chiTietPhim.hinhAnh}
                  alt=""
                  style={{ width: 240, objectFit: "cover", height: 380 }}
                />
                <a data-lity href={chiTietPhim.trailer} className="iconHover">
                  <FontAwesomeIcon icon={faPlay} style={{ fontSize: "30px" }} />
                </a>
              </div>

              <div className="detail__info">
                <h1>{chiTietPhim.tenPhim}</h1>
                <p>
                  <span className="content__c16">C16</span>2D/Digital
                </p>
                <p className="point mt-2">
                  <FontAwesomeIcon icon={faStar} className="mr-1" />
                  {chiTietPhim.danhGia} <span>/10</span>
                </p>
                <a href="#muaVe" className="mua__ve">
                  Mua Vé
                </a>
                <p>{chiTietPhim.moTa?.substr(0, 150)}...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lich__chieu" id="muaVe">
        <h1 className="text-center mb-5">Lịch Chiếu</h1>
        <div className="container ">
          <div className="row lichChieu__bg">
            <div className="col-4">
              <div
                className="nav flex-column nav-pills detail__logo"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {chiTietPhim.heThongRapChieu?.map((item, index) => {
                  let classActive = index === 0 ? "active" : "";
                  return (
                    <a
                      key={index}
                      className={`nav-link ${classActive}`} //active
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href={`#${item.maHeThongRap}`}
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <img src={item.logo} alt="" width="50" className="mr-2" />
                      <span>{item.tenHeThongRap}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-8 rap__info">
              <div className="tab-content " id="v-pills-tabContent">
                {chiTietPhim.heThongRapChieu?.map((item, index) => {
                  let classActive = index === 0 ? "active" : "";
                  return (
                    <div
                      key={index}
                      className={`tab-pane fade show  cum__Rap  ${classActive}`} //active
                      id={`${item.maHeThongRap}`}
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      {item.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="rap__hr " key={index}>
                            <h2 className="">{cumRap.tenCumRap}</h2>
                            <p>2D Digital</p>
                            <div className="row">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 8)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to={`/checkout/${lichChieu.maLichChieu}`}
                                      className="col-sm-6 ngay__Chieu"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
