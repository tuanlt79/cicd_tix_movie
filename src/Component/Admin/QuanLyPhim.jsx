import moment from "moment";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFilm, layDanhSachPhimAction } from "../../Action/PhimAction";
import EditFilm from "./EditFilm";
import TaoLichChieu from "./TaoLichChieu";
import { Table, Image, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
export default function QuanLyPhim() {
  const dispatch = useDispatch();
  const { mangPhim } = useSelector((state) => state.PhimReducer);
  const { accessToken } = useSelector((state) => state.UserReducer);

  const [dsFilm, setDSFilm] = useState([]);
  const [keyWord, setKeyWord] = useState(null);
  const [temp, setTemp] = useState(-1);
  useEffect(() => {
    if (mangPhim?.length > 0) {
      if (temp > 0) {
        setDSFilm(dsFilm);
      } else setDSFilm(mangPhim);
    }
  });
  useEffect(() => {
    if (keyWord) {
      if (keyWord.length > 0) {
        let dsPhim = mangPhim?.filter((item) => {
          return item.tenPhim.toLowerCase().indexOf(keyWord.toLowerCase()) >= 0;
        });

        setDSFilm(dsPhim);

        setTemp(temp + 1);
      }
    }
    // console.log(keyWord);
  }, [keyWord]);
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const handleChangeSearch = (e) => {
    // console.log(keyWord);
    // console.log(event.target.value);
    setKeyWord(e.target.value);
  };

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      render: (item) => <div style={{ fontWeight: "bold" }}>{item}</div>,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (item) => {
        return <Image key={item} width={25} src={item} />;
      },
    },
    {
      title: "Ngày Khởi Chiếu",
      dataIndex: "ngayKhoiChieu",
    },

    {
      title: "",
      dataIndex: "maPhim",
      render: (maPhim) => (
        <div className="inner-button">
          <div className="block">
            <TaoLichChieu />

            <EditFilm />

            <button
              className="btn btn__del "
              type="button"
              onClick={() => {
                dispatch(deleteFilm(maPhim, accessToken));
              }}
            >
              <DeleteOutlined />
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <div className="user-header inner-button"></div>

      <Input.Group compact>
        <Input
          allowClear
          style={{ width: "40%" }}
          placeholder="Tìm Tên Phim ..."
          onChange={handleChangeSearch}
        />
      </Input.Group>
      <div className="manager__film">
        <Table
          columns={columns}
          className="table table__manageruser"
          dataSource={dsFilm ? dsFilm : mangPhim}
        />
      </div>
    </Fragment>
  );
}
