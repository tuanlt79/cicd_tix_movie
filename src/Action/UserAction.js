import axios from "axios";
import { accessToken, domain, maNhom, taiKhoan } from "../configs/setting";
import { history } from "../App.js";
export const loginUserAction = (nguoiDung) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: nguoiDung,
      });
      // lấy giá trị api gửi về localstorge
      // console.log(result.data);

      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("taiKhoan", JSON.stringify(result.data));
      //đăng nhập thành công chuyển về trang home
      history.push("/");
      dispatch({
        type: "DANG_NHAP",
        taiKhoan: result.data.taiKhoan,
      });
    } catch (errors) {
      alert(errors.response?.data);
    }
  };
};

//API 6
export const addUserAction = (user) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: user,
      });
      if (result.status === 200) {
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("taiKhoan", JSON.stringify(result.data));
        alert("Đăng ký thành công");
      }
      history.push("/");
      dispatch({
        type: "DANG_KY",
        taiKhoan: result.data.taiKhoan,
      });
    } catch (errors) {
      alert(errors.response?.data);
    }
  };
};

export const profileUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
          method: "POST",
          data: user,
          headers: {
            Authorization: "Bearer " + localStorage.getItem(accessToken),
          },
        });
        // console.log("data", result.data);
        if (result.status === 200) {
          // console.log("thanhcong");
        }
        dispatch({
          type: "LAY_THONG_TIN_USER",
          thongTinUser: result.data,
        });
      } catch (errors) {
        alert(errors.response?.data);
      }
      dispatch({ type: "closeLoading" });
    }, 700);
  };
};

export const getInfoAllUser = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_THONG_TIN_ALL_USER",
        thongTinAllUser: result.data,
      });
    } catch (errors) {
      alert(errors.response?.data);
    }
  };
};

export const deleteUser = (taiKhoan, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        data: taiKhoan,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });

      if (result.status === 200) {
        alert("Xóa Thành Công");

        window.location.reload();
      }
    } catch (err) {
      alert(err.response?.data);
    }
  };
};

export const addUser = (value, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/ThemNguoiDung`,
        method: "POST",
        data: value,
        headers: { Authorization: "Bearer " + token },
      });
      window.location.reload();
      if (result.status === 200) {
        alert("Tạo Tài Khoản Thành Công");
      }
    } catch (err) {
      alert(err.response?.data);
    }
  };
};

export const editUser = (value, token) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: value,
        headers: { Authorization: "Bearer " + token },
      });

      if (result.status === 200) {
        alert("Cập nhật thành công");
        window.location.reload();
      }
    } catch (errors) {
      alert(errors.response?.data);
    }
  };
};
