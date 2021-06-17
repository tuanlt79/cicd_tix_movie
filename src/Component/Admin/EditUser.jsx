import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { maNhom } from "../../configs/setting";
import { editUser } from "../../Action/UserAction";

export default function EditUser() {
  const { accessToken } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const thongTinAllUser = useSelector(
    (state) => state.UserReducer.thongTinAllUser
  );
  // let { id } = props.match.params;
  // console.log(id);
  // useEffect(() => {
  //   dispatch({ type: "closeLoading" });
  // }, []);
  // console.log({ thongTinAllUser });
  // console.log(thongTinAllUser?.map((item, index) => item.taiKhoan));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(editUser(data, accessToken));
  };
  return (
    <div className="d-inline-block">
      <button
        type="button"
        className="btn__edit"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Sửa
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nhập Thông Tin Cập Nhật
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
                      <span>Tài Khoản</span>
                      <input
                        // value=
                        placeholder="Nhập Tài Khoản"
                        type="text"
                        {...register("taiKhoan", {
                          required: true,
                          maxLength: 30,
                        })}
                        className="form-control"
                      />
                      {errors?.taiKhoan?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.taiKhoan?.type === "maxLength" && (
                        <p className="alert alert-danger">
                          Tài Khoản dưới 30 ký tự
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <span>Mật Khẩu</span>
                      <input
                        type="password"
                        placeholder="Nhập Mật Khẩu"
                        {...register("matKhau", {
                          required: true,
                          maxLength: 30,
                        })}
                        className="form-control"
                      />
                      {errors?.matKhau?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.matKhau?.type === "maxLength" && (
                        <p className="alert alert-danger">
                          Mã Khẩu dưới 30 ký tự
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <span>Email</span>
                      <input
                        type="text"
                        placeholder="Nhập Email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        className="form-control"
                      />
                      {errors?.email?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.email?.type === "pattern" && (
                        <p className="alert alert-danger">Email không hợp lệ</p>
                      )}
                    </div>
                    <div className="form-group">
                      <span className="mr-2">Mã Loại Người Dùng</span>
                      <select
                        name="maLoaiNguoiDung"
                        {...register("maLoaiNguoiDung", {
                          required: true,
                        })}
                      >
                        <option value="QuanTri">Quản Trị</option>
                        <option value="KhachHang">Khách Hàng</option>
                      </select>

                      {errors?.maLoaiNguoiDung?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <span>Họ Tên</span>
                      <input
                        type="text"
                        placeholder="Nhập Họ Tên"
                        {...register("hoTen", {
                          required: true,
                          pattern:
                            /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +"ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
                        })}
                        className="form-control"
                      />
                      {errors?.hoTen?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.hoTen?.type === "pattern" && (
                        <p className="alert alert-danger">
                          Họ Tên phải nhập chữ
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
                      <span>Số Điện Thoại</span>
                      <input
                        placeholder="Nhập số điện thoại"
                        type="text"
                        {...register("soDt", {
                          required: true,
                          pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                        })}
                        className="form-control"
                      />
                      {errors?.soDt?.type === "required" && (
                        <p className="alert alert-danger">
                          Không được để trống
                        </p>
                      )}
                      {errors?.soDt?.type === "pattern" && (
                        <p className="alert alert-danger">SDT không hợp lệ</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button type="submit" className="btn btn-success">
                  Cập Nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
