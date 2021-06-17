import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { domain, maNhom } from "../../configs/setting";

export default function EditFilm() {
  const { accessToken } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    var form_data = new FormData();
    for (var key in data) {
      if (key === "hinhAnh") {
        form_data.append(key, data[key][0]);
        // console.log(data[key]);
      } else {
        form_data.append(key, data[key]);
      }
    }
    // dispatch(editFilm(data,accessToken))
    axios({
      url: `${domain}/api/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data: form_data,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      
    })
      .then((res) => {
        // console.log(res);
        alert('Thay Đổi Thành Công')
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  return (
    <div className="d-inline-block">
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn__edit"
        data-toggle="modal"
        data-target="#editFilm"
      >
        Sửa
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="editFilm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Nhập Thông Tin Sửa Phim
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span>Mã Phim</span>
                      <input
                        type="text"
                        placeholder="Nhập số"
                        {...register("maPhim", {
                          required: true,
                          maxLength: 20,
                          pattern: /^(0|[1-9][0-9]*)$/,
                        })}
                        className="form-control"
                      />
                      {errors?.maPhim?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.maPhim?.type === "maxLength" && (
                        <p className="alert alert-danger">
                          Mã Phim dưới 20 ký tự
                        </p>
                      )}
                      {errors?.maPhim?.type === "pattern" && (
                        <p className="alert alert-danger">Nhập số</p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Tên Phim</span>
                      <input
                        placeholder="Nhập Tên Phim"
                        type="text"
                        {...register("tenPhim", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.tenPhim?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Bí Danh</span>
                      <input
                        type="text"
                        placeholder="nhap-bi-danh"
                        {...register("biDanh", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.biDanh?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Trailer</span>
                      <input
                        placeholder="https://youtube.com/"
                        type="text"
                        {...register("trailer", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.trailer?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    {" "}
                    <div className="form-group">
                      <span>Hình Ảnh</span>
                      <input
                        type="file"
                        {...register("hinhAnh", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.hinhAnh?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Mã Nhóm</span>
                      <input
                        type="text"
                        value={maNhom}
                        {...register("maNhom", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.maNhom?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Ngày Khởi Chiếu</span>
                      <input
                        type="text"
                        placeholder="dd-mm-yyyy"
                        {...register("ngayKhoiChieu", {
                          required: true,
                        })}
                        className="form-control"
                      />
                      {errors?.ngayKhoiChieu?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Đánh Giá</span>
                      <input
                        type="text"
                        placeholder="0-10"
                        {...register("danhGia", {
                          required: true,
                          min: 0,
                          max: 10,
                        })}
                        className="form-control"
                      />
                      {errors?.danhGia?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.danhGia?.type === "min" && (
                        <p className="alert alert-danger">Đánh Giá từ 0-10</p>
                      )}{" "}
                      {errors?.danhGia?.type === "max" && (
                        <p className="alert alert-danger">Đánh Giá từ 0-10</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <span>Mô Tả</span>
                  <textarea
                    type="text"
                    {...register("moTa", {
                      required: true,
                    })}
                    className="form-control"
                  />
                  {errors?.moTa?.type === "required" && (
                    <p className="alert alert-danger">Không được để trống</p>
                  )}
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                  <button className="btn btn-success" type="submit">
                    Cập Nhật
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
