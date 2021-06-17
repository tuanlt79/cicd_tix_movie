const stateDatVe = {
  danhSachGheDangDat: [],
};
export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let index = state.danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.ghe);
      }
      state.danhSachGheDangDat = [...state.danhSachGheDangDat];
      return { ...state };
    }
    case "resetDSG": {
      state.danhSachGheDangDat = [];
      return { ...state };
    }

    default:
      break;
  }
  return { ...state };
};
