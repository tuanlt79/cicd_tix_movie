import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import background2 from "../../Assets/img/bg2.jpg";
import logoLogin from "../../Assets/img/group@2x.png";
import { loginUserAction } from "../../Action/UserAction";
export default function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "closeLoading" });
  }, []);
  const { errors, touched, handleBlur, handleChange, handleSubmit, isValid } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      validationSchema: yup.object().shape({
        taiKhoan: yup.string().required("Tài khoản không được bỏ trống !"),
        matKhau: yup.string().required("Mật khẩu không được bỏ trống !"),
      }),
      onSubmit: (values) => {
        dispatch(loginUserAction(values));
      },
    });
  return (
    <section
      className="signin "
      style={{ backgroundImage: `url(${background2})` }}
    >
      <div className="signin__vertical">
        <div className="container signin__wrapper">
          <NavLink to="/">
            <img src={logoLogin} alt="" />
          </NavLink>
          <div className="signin__message">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                placeholder="Tài Khoản"
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
                placeholder="Mật Khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-danger">{errors.matKhau}</p>
              ) : (
                ""
              )}
            </div>
            <button type="submit" disabled={!isValid}>
              Đăng Nhập
            </button>
          </form>
          <div className="register__user mt-3">
            <p>
              Bạn chưa có Tài Khoản?
              <NavLink to="/register"> Tạo Tài Khoản</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
