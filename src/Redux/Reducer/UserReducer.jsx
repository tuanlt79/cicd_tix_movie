import { history } from "../../App";
import { taiKhoan } from "../../configs/setting";
import { accessToken } from "../../configs/setting";
let taiKhoanNguoiDung = "";
let tokenlocal = "";
// let userLocal = "";
if (localStorage.getItem(taiKhoan)) {
  //kiểm tra tài khoản có trong localStorage không
  let tkNguoiDungStore = localStorage.getItem("taiKhoan");
  taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
  tokenlocal = JSON.parse(tkNguoiDungStore).accessToken;
  // let { taiKhoan, email, hoTen, soDT } = JSON.parse(tkNguoiDungStore);
  // userLocal = { taiKhoan, email, hoTen, soDT };
}
const stateDefault = {
  taiKhoan: taiKhoanNguoiDung,
  accessToken: tokenlocal,
  thongTinUser: {},
  thongTinAllUser: [],
};
export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    case "DANG_XUAT": {
      localStorage.clear();

      return { ...state, taiKhoan: "" };
    }
    case "DANG_KY": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    case "LAY_THONG_TIN_USER": {
      state.thongTinUser = { ...action.thongTinUser };
      return { ...state };
    }
    case "LAY_THONG_TIN_ALL_USER": {
      state.thongTinAllUser = [...action.thongTinAllUser];
      return { ...state };
    }
    case "XOA_USER": {
      let index = state.thongTinAllUser.findIndex(
        (user) => user.taiKhoan === action.item.taiKhoan
      );
      console.log(index);
      if (index !== -1) {
        state.thongTinAllUser.splice(index, 1);
      } else {
        state.thongTinAllUser.push(action.item);
      }
      state.thongTinAllUser = [...state.thongTinAllUser];
      return { ...state };
    }
    case "EDIT_USER": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
