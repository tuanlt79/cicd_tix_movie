import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import background2 from "../../Assets/img/bg2.jpg";
import logoLogin from "../../Assets/img/group@2x.png";
import { addUserAction } from "../../Action/UserAction";
export default function Register() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  }, []);
  const { errors, touched, handleBlur, handleChange, handleSubmit, isValid } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
      },
      validationSchema: yup.object().shape({
        taiKhoan: yup
          .string()
          .required("Tài khoản không được bỏ trống !")
          .min(3, "Mật Khẩu trên 3 ký tự"),
        matKhau: yup
          .string()
          .required("Mật khẩu không được bỏ trống !")
          .min(3, "Mật Khẩu trên 3 ký tự"),
        email: yup
          .string()
          .required("Email không được bỏ trống !")
          .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Email Không Hợp Lệ !"
          ),
        soDt: yup
          .string()
          .required("SDT không được bỏ trống !")
          .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, "Nhập số !"),
        hoTen: yup.string().required("Họ Tên không được bỏ trống !"),
      }),
      onSubmit: (values) => {
        values.maNhom = "GP06";
        values.maLoaiNguoiDung = "KhachHang";
        dispatch(addUserAction(values));
        // console.log(values);
      },
    });
  return (
    <section
      className="register "
      style={{ backgroundImage: `url(${background2})` }}
    >
      <div className="register__vertical">
        <div className="container register__wrapper">
          <NavLink to="/">
            <img src={logoLogin} alt="" />
          </NavLink>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                placeholder="Nhập Tài Khoản"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className="text-danger">{errors.taiKhoan}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="matKhau"
                placeholder="Nhập Mật Khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-danger">{errors.matKhau}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Nhập Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-danger">{errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="soDt"
                placeholder="Nhập Điện Thoại"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.soDt && touched.soDt ? (
                <p className="text-danger">{errors.soDt}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="hoTen"
                placeholder="Nhập Họ Tên"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.hoTen && touched.hoTen ? (
                <p className="text-danger">{errors.hoTen}</p>
              ) : (
                ""
              )}
            </div>
            <button type="submit" disabled={!isValid}>
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
