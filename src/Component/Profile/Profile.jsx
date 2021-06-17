import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, profileUser } from "../../Action/UserAction";
import bg2 from "../../Assets/img/bg2.jpg";
import { taiKhoan } from "../../configs/setting";
import moment from "moment";
import { Redirect } from "react-router";
import { useFormik } from "formik";
import { Fragment } from "react";

export default function Profile() {
  const dispatch = useDispatch();

  const thongTinUser = useSelector((state) => state.UserReducer.thongTinUser);

  useEffect(() => {
    if (!localStorage.getItem(taiKhoan)) {
      return <Redirect to="/login" />;
    }
    let userLogin = JSON.parse(localStorage.getItem(taiKhoan));
    let profileTK = {
      taiKhoan: userLogin.taiKhoan,
    };

    dispatch(profileUser(profileTK));
  }, []);

  let getUser = JSON.parse(localStorage.getItem("taiKhoan"));

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      soDt: "",
      matKhau: "",
      maLoaiNguoiDung: "KhachHang",
    },
    onSubmit: (values) => {
      values.hoTen = `${getUser.hoTen}`;
      values.maNhom = "GP06";
      //   values.maLoaiNguoiDung = "KhachHang";
      values.taiKhoan = `${getUser.taiKhoan}`;
      values.email = `${getUser.email}`;
      dispatch(editUser(values));
      console.log(values);
    },
  });
  //   console.log({ thongTinUser });

  return (
    <section className="profile" style={{ backgroundImage: `url(${bg2})` }}>
      <div className="container profile__user">
        <div className="profile__userInfo">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Lịch Sử Đặt Vé
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Thông Tin Cá Nhân
              </a>
            </li>
          </ul>
          <div className="tab-content mt-5" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <table class="table">
                <thead>
                  <tr className="thead__list">
                    <th scope="col">Rạp - Ghế</th>
                    <th scope="col">Tên Phim</th>
                    <th scope="col">Tên Rạp</th>
                    <th scope="col">Ngày Đặt</th>
                  </tr>
                </thead>
                <tbody>
                  {thongTinUser.thongTinDatVe?.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        {item.danhSachGhe?.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">
                                {ghe.tenRap} -{ghe.tenGhe}
                              </th>
                              <td>{item.tenPhim}</td>
                              <td>{ghe.tenHeThongRap}</td>
                              <td>{moment(item.ngayDat).format("hh:mm A")}</td>
                            </tr>
                          );
                        })}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-sm-12">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Tài Khoản
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={thongTinUser.taiKhoan}
                        disabled
                        onChange={handleChange}
                        aria-describedby="basic-addon1"
                        name="taiKhoan"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Email
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={thongTinUser.email}
                        disabled
                        onChange={handleChange}
                        aria-describedby="basic-addon1"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-sm-12">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Họ Tên
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={thongTinUser.hoTen}
                        onChange={handleChange}
                        aria-describedby="basic-addon1"
                        name="hoTen"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Số Điện Thoại
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={thongTinUser.soDT}
                        onChange={handleChange}
                        aria-describedby="basic-addon1"
                        name="soDt"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Mật Khẩu
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        value="Mật Khẩu"
                        aria-describedby="basic-addon1"
                        name="matKhau"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  {/* <button type="submit">Cập Nhật </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
