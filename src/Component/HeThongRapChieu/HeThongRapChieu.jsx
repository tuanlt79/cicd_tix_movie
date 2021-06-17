import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { layThongTinHeThongCumRapAction } from "../../Action/PhimAction";
import ScrollToBottom from "react-scroll-to-bottom";
import ThongTinRap from "./ThongTinRap";
import { NavLink } from "react-router-dom";

export default function HeThongRapChieu() {
  const dispatch = useDispatch();
  const chiTietCumRap = useSelector((state) => state.PhimReducer.chiTietCumRap);

  useEffect(() => {
    dispatch(layThongTinHeThongCumRapAction());
  }, []);
  // console.log({ chiTietCumRap });

  return (
    <div className="navs" id="cumRap">
      <div className="container my-5">
        <div className="row">
          <div className="col-1 col-lg-1 col-md-2 ">
            <div
              className="nav flex-column nav-pills logo__rap"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <ThongTinRap />
            </div>
          </div>
          <div className="col-11 col-lg-11 col-md-10">
            <div className="tab-content" id="v-pills-tabContent">
              {chiTietCumRap?.map((danhSachRap, index) => {
                let classActive = index === 0 ? "active" : "";
                return (
                  <div
                    key={index}
                    className={`tab-pane fade show ${classActive}`} //active
                    id={`${danhSachRap.maHeThongRap}`}
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="row">
                      <div className="col-5">
                        {/* <ScrollToBottom className="croll__rap"> */}
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {danhSachRap.lstCumRap
                            ?.slice(0, 5)
                            .map((thongTinRap, index) => {
                              let classActive = index === 0 ? "active" : "";

                              return (
                                <a
                                  key={index}
                                  className={`nav-link ${classActive}`}
                                  id={`${danhSachRap.maHeThongRap}`}
                                  data-toggle="pill"
                                  href={`#${thongTinRap.maCumRap}`}
                                  role="tab"
                                  aria-controls="v-pills-messages"
                                  aria-selected="false"
                                >
                                  <h5>{thongTinRap.tenCumRap}</h5>
                                  <span>
                                    {thongTinRap.diaChi.substr(0, 50)}...
                                  </span>
                                </a>
                              );
                            })}
                        </div>
                        {/* </ScrollToBottom> */}
                      </div>
                      <div className="col-7">
                        <div className="tab-content" id="v-pills-tabContent">
                          {danhSachRap.lstCumRap?.map((thongTinRap, index) => {
                            let classActive = index === 0 ? "active" : "";
                            return (
                              <div
                                key={index}
                                className={`tab-pane fade show ${classActive}`}
                                id={thongTinRap.maCumRap}
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                              >
                                {thongTinRap.danhSachPhim?.map(
                                  (phim, index) => {
                                    return (
                                      <div className="time__film" key={index}>
                                        <h5>{phim.tenPhim}</h5>
                                        <p>2D Digital</p>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 8)
                                            .map((lichChieu, index) => {
                                              return (
                                                <NavLink
                                                  to={`/checkout/${lichChieu.maLichChieu}`}
                                                  className="col-3"
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
                                  }
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
