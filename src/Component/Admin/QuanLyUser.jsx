import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getInfoAllUser } from "../../Action/UserAction";
import EditUser from "./EditUser";
import { Switch, Table, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default function QuanLyUser() {
  const dispatch = useDispatch();
  const thongTinAllUser = useSelector(
    (state) => state.UserReducer.thongTinAllUser
  );
  const { accessToken } = useSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(getInfoAllUser());
  }, []);
  // Switch Button User
  const [dsUser, setDSUser] = useState(null);
  const handleChangeSwitch = (checked) => {
    if (checked) {
      let user1 = thongTinAllUser?.filter((item) => {
        return item.maLoaiNguoiDung === "KhachHang";
      });
      setDSUser(user1);
    } else {
      let admin1 = thongTinAllUser?.filter((item) => {
        return item.maLoaiNguoiDung === "QuanTri";
      });
      setDSUser(admin1);
    }
  };
  // -------- Search User
  const [listUser, setListUser] = useState([]);
  const [keyWord, setKeyWord] = useState(null);
  const [temp, setTemp] = useState(-1);
  useEffect(() => {
    if (thongTinAllUser?.length > 0) {
      if (temp > 0) {
        setListUser(listUser);
      } else setListUser(thongTinAllUser);
    }
  });
  useEffect(() => {
    if (keyWord) {
      if (keyWord.length > 0) {
        let user = thongTinAllUser?.filter((item) => {
          return (
            item.taiKhoan.toLowerCase().indexOf(keyWord.toLowerCase()) >= 0
          );
        });

        setListUser(user);

        setTemp(temp + 1);
      }
    }
  }, [keyWord]);

  const handleChangeSearch = (e) => {
    setKeyWord(e.target.value);
  };
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      render: (item) => <div style={{ fontWeight: "bold" }}>{item}</div>,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "SĐT",
      dataIndex: "soDt",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "",
      dataIndex: "taiKhoan",
      render: (taiKhoan) => (
        <div className="inner-button">
          <div className="block">
            <EditUser />

            <button
              className="btn btn__del "
              type="button"
              onClick={() => {
                dispatch(deleteUser(taiKhoan, accessToken));
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
      <div className="user-header inner-button">
        <div className="inner-add row">
          <div className="col-md-6 col-6">
            <Input.Group compact>
              <Input
                allowClear
                style={{ width: "60%" }}
                placeholder="Tìm Tài Khoản ..."
                onChange={handleChangeSearch}
              />
            </Input.Group>
          </div>
          <div className="col-md-6 col-6 text-right">
            <Switch
              checkedChildren="User"
              unCheckedChildren="Admin"
              defaultChecked
              onChange={handleChangeSwitch}
            />
          </div>
        </div>
      </div>
      <div className="manageruser">
        <Table
          columns={columns}
          className="table table-manageruser"
          dataSource={dsUser ? dsUser : thongTinAllUser}
        />
      </div>
    </Fragment>
  );
}
