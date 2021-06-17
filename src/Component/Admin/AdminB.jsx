import React, { useEffect, useState } from "react";
import bg2 from "../../Assets/img/bg2.jpg";
import logo from "../../Assets/img/web-logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { domain, maNhom, taiKhoan } from "../../configs/setting";
import QuanLyPhim from "./QuanLyPhim";
import QuanLyUser from "./QuanLyUser";
import ThemUser from "./ThemUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AdminB() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "closeLoading" });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    var form_data = new FormData();
    for (var key in data) {
      if (key === "hinhAnh") {
        form_data.append(key, data[key][0]);
        // console.log(data[key]);
      } else {
        form_data.append(key, data[key]);
      }
    }
    // console.log(form_data.get("hinhAnh"));
    axios({
      url: `${domain}/api/quanlyphim/ThemPhimUploadHinh`,
      method: "POST",
      data: form_data,
    })
      .then((res) => {
        alert("Thêm Phim Thành Công");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  if (!localStorage.getItem(taiKhoan)) {
    return <Redirect to="/login" />;
  }
  let tokenLocal = JSON.parse(localStorage.getItem("taiKhoan"));

  if (tokenLocal.maLoaiNguoiDung === "QuanTri") {
    return (
      <section className="admin">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-2 bg__admin"
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <div className="position-fixed plist__admin">
                <NavLink to="/" className="admin__logo text-center">
                  <img src={logo} alt="" width="30%" className="mt-3" />
                </NavLink>
                <div
                  className="nav flex-column nav-pills mt-4"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Thêm Phim
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Quản Lý Phim
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Quản Lý Người dùng
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Thêm Người Dùng
                  </a>
                </div>
              </div>
            </div>
            <div className="col-10 admin__info">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-6">
                        {/* <div className="form-group">
                          <span>Mã Phim</span>
                          <input
                            type="text"
                            placeholder="Nhập số"
                            {...register("maPhim", {
                              required: true,
                              maxLength: 20,
                              pattern: /^(0|[1-9][0-9]*)$/,
                            })}
                            className="form-control"
                          />
                          {errors?.maPhim?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                          {errors?.maPhim?.type === "maxLength" && (
                            <p className="alert alert-danger">
                              Mã Phim dưới 20 ký tự
                            </p>
                          )}
                          {errors?.maPhim?.type === "pattern" && (
                            <p className="alert alert-danger">Nhập số</p>
                          )}
                        </div> */}
                        <div className="form-group">
                          <span>Tên Phim</span>
                          <input
                            placeholder="Nhập Tên Phim"
                            type="text"
                            {...register("tenPhim", {
                              required: true,
                            })}
                            className="form-control"
                          />
                          {errors?.tenPhim?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <span>Bí Danh</span>
                          <input
                            type="text"
                            placeholder="nhap-bi-danh"
                            {...register("biDanh", {
                              required: true,
                            })}
                            className="form-control"
                          />
                          {errors?.biDanh?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <span>Trailer</span>
                          <input
                            placeholder="https://youtube.com/"
                            type="text"
                            {...register("trailer", {
                              required: true,
                            })}
                            className="form-control"
                          />
                          {errors?.trailer?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <span>Ngày Khởi Chiếu</span>
                          <input
                            type="text"
                            placeholder="dd-mm-yyyy"
                            {...register("ngayKhoiChieu", {
                              required: true,
                            })}
                            className="form-control"
                          />
                          {errors?.ngayKhoiChieu?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <span>Hình Ảnh</span>
                          <input
                            type="file"
                            {...register("hinhAnh", {
                              required: true,
                            })}
                            className="form-control"
                          />
                          {errors?.hinhAnh?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <span>Mã Nhóm</span>
                          <input
                            type="text"
                            value={maNhom}
                            {...register("maNhom", {
                              required: true,
                            })}
                            className="form-control"
                          />
                          {errors?.maNhom?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <span>Đánh Giá</span>
                          <input
                            type="text"
                            placeholder="0-10"
                            {...register("danhGia", {
                              required: true,
                              min: 0,
                              max: 10,
                            })}
                            className="form-control"
                          />
                          {errors?.danhGia?.type === "required" && (
                            <p className="alert alert-danger">
                              Không được để trống
                            </p>
                          )}
                          {errors?.danhGia?.type === "min" && (
                            <p className="alert alert-danger">
                              Đánh Giá từ 0-10
                            </p>
                          )}{" "}
                          {errors?.danhGia?.type === "max" && (
                            <p className="alert alert-danger">
                              Đánh Giá từ 0-10
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <span>Mô Tả</span>
                      <textarea
                        type="text"
                        {...register("moTa", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.moTa?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>

                    <button className="btn__submit" type="submit">
                      Thêm Phim
                    </button>
                  </form>
                </div>
                <div
                  className="tab-pane fade admin__quanLy active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <QuanLyPhim />
                </div>
                <div
                  className="tab-pane fade quanLy__user"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <QuanLyUser />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <ThemUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    alert("Trang này giành cho quản trị viên.");
    return <Redirect to="/login"></Redirect>;
  }
}
