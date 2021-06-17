import axios from "axios";
import { domain, maNhom } from "../configs/setting";
import { history } from "../App";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_DANH_SACH_PHIM",
          mangPhim: result.data,
        });
      } catch (errors) {
        alert(errors.response?.data);
      }
      dispatch({
        type: "closeLoading",
      });
    }, 700);
  };
};
//API 2
export const thongTinHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyRap/LayThongTinHeThongRap`,
        method: "GET",
      });
      dispatch({
        type: "LAY_THONG_TIN_RAP",
        cumRap: result.data,
      });
    } catch (errors) {
      alert(errors.response?.data);
    }
  };
};
//API 3
export const layThongTinHeThongCumRapAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_CHI_TIET_RAP",
        chiTietCumRap: result.data,
      });
    } catch (errors) {
      alert(errors.response?.data);
    }
  };
};
//API 4
export const layChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_CHI_TIET_PHIM",
          chiTietPhim: result.data,
        });
      } catch (errors) {
        alert(errors.response?.data);
      }
      dispatch({
        type: "closeLoading",
      });
    }, 700);
  };
};
//API 5
export const layThongTinPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_THONG_TIN_PHONG_VE",
          thongTinPhongVe: result.data,
        });
      } catch (errors) {
        alert(errors.response?.data);
      }
      dispatch({
        type: "closeLoading",
      });
    }, 700);
  };
};


export const deleteFilm = (maPhim, token) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        data: maPhim,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.status === 200) {
        alert("Xoá Phim Thành Công");
        window.location.reload();
      }
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const taoLichChieuAction = (value, token) => {
  // console.log({ value });
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyDatVe/TaoLichChieu`,
        method: "POST",
        data: value,
        headers: { Authorization: "Bearer " + token },
      });
      if (result.status === 200) {
        alert("Tạo lịch chiếu thành công.");
      }
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
// export const editFilm = (form_data, token) => {
//   console.log(form_data)
//   return async (dispatch) => {
//     try {
//       let result = await axios({
//         url: `${domain}/api/QuanLyPhim/CapNhatPhimUpload`,
//         method: "POST",
//         data: form_data,
//         headers: { Authorization: "Bearer " + token },
//       })
//      } catch (err) {
//       alert(err.response?.data)
//     }
//   }
// };