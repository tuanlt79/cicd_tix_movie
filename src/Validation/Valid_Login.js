import * as yup from "yup";

export const isValid__Login = {
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
      .matches(/^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9]+)?)$/, "Nhập số !"),
    hoTen: yup.string().required("Họ Tên không được bỏ trống !"),
  }),
  onSubmit: (values) => {
    dispatch(loginUserAction(values));
  },
};
