const stateDefault = {
  mangPhim: [],
  chiTietRap: [],
  cumRap: [],
  chiTietPhim: {},
  thongTinPhongVe: {},
};
export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM": {
      state.mangPhim = [...action.mangPhim];
      return { ...state };
    }
    case "LAY_THONG_TIN_RAP": {
      state.cumRap = [...action.cumRap];
      return { ...state };
    }
    case "LAY_CHI_TIET_RAP": {
      state.chiTietCumRap = [...action.chiTietCumRap];
      return { ...state };
    }
    case "LAY_CHI_TIET_PHIM": {
      state.chiTietPhim = action.chiTietPhim;
      return { ...state };
    }
    case "LAY_THONG_TIN_PHONG_VE": {
      state.thongTinPhongVe = action.thongTinPhongVe;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
