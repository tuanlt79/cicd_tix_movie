import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../App";

export default function Header() {
  const { taiKhoan } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  return (
    <header>
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-white">
          <NavLink className="navbar-brand" to="/"></NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#lichChieu">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cumRap">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ứng Dụng
                </a>
              </li>
            </ul>

            {taiKhoan !== "" ? (
              <div className="nav-item dropdown btnLogin">
                <div
                  className="nav-link dropdown-toggle header__user"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="imgLogin" alt="" />
                  {taiKhoan}
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/profile">
                    Thông Tin Tài Khoản
                  </NavLink>

                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <button
                      className="btn__Logout"
                      onClick={() => {
                        dispatch({
                          type: "DANG_XUAT",
                        });
                      }}
                    >
                      Đăng Xuất
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <NavLink className="btnLogin" to="/login">
                <img className="imgLogin" alt="" />
                <span className="span__Login">Đăng Nhập</span>
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
