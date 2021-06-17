import axios from "axios";
import { history } from "../App";
import { accessToken, domain } from "../configs/setting";
import { layThongTinPhongVeAction } from "./PhimAction";
export const datVeAction = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyDatVe/DatVe`,
        method: "POST",
        data: thongTinDatVe,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      if (result.status === 200) {
        alert("Đặt Vé Thành Công ! ");
        history.push(`/profile`);
        dispatch(layThongTinPhongVeAction(thongTinDatVe.maLichChieu));
      }
    } catch (errors) {}
  };
};
