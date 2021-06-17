import moment from "moment";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFilm, layDanhSachPhimAction } from "../../Action/PhimAction";
import EditFilm from "./EditFilm";
import TaoLichChieu from "./TaoLichChieu";

export default function QuanLyPhim() {
  const dispatch = useDispatch();
  const { mangPhim } = useSelector((state) => state.PhimReducer);
  const { accessToken } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  // console.log({ mangPhim });

  const danhSachPhim = () => {
    return mangPhim?.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.maPhim}</th>
          <td>{item.tenPhim}</td>
          <td>
            <img width="20px" src={item.hinhAnh} alt="" />
          </td>
          <td>{moment(item.ngayKhoiChieu).format("ddd-mm-yyyy hh:mm A")}</td>
          <td>
            <TaoLichChieu />

            <EditFilm />
            <button
              className="btn__del"
              onClick={() => {
                dispatch(deleteFilm(item.maPhim, accessToken));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  //   console.log(mangPhim);
  return (
    <Fragment>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã Phim</th>
            <th scope="col">Tên Phim</th>
            <th scope="col">Hinh Ảnh</th>
            <th scope="col">Ngày Khởi Chiếu</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{danhSachPhim()}</tbody>
      </table>
    </Fragment>
  );
}
