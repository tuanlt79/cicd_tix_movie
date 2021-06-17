import React from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Action/UserAction";
import { maNhom } from "../../configs/setting";

export default function ThemUser() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.UserReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log({ accessToken });
    dispatch(addUser(data, accessToken));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <span>Tài Khoản</span>
              <input
                placeholder="Nhập Tài Khoản"
                type="text"
                {...register("taiKhoan", {
                  required: true,
                  maxLength: 30,
                })}
                className="form-control"
              />
              {errors?.taiKhoan?.type === "required" && (
                <p className="alert alert-danger">Không được để trống</p>
              )}{" "}
              {errors?.taiKhoan?.type === "maxLength" && (
                <p className="alert alert-danger">Tài Khoản dưới 30 ký tự</p>
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
                <p className="alert alert-danger">Không được để trống</p>
              )}
              {errors?.matKhau?.type === "maxLength" && (
                <p className="alert alert-danger">Mã Khẩu dưới 30 ký tự</p>
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
                <p className="alert alert-danger">Không được để trống</p>
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
                <p className="alert alert-danger">Không được để trống</p>
              )}
              {errors?.hoTen?.type === "pattern" && (
                <p className="alert alert-danger">Họ Tên phải nhập chữ</p>
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
                <p className="alert alert-danger">Không được để trống</p>
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
                <p className="alert alert-danger">Không được để trống</p>
              )}
              {errors?.soDt?.type === "pattern" && (
                <p className="alert alert-danger">SDT không hợp lệ</p>
              )}
            </div>
          </div>
        </div>

        <button className="btn__submit" type="submit">
          Thêm Người Dùng
        </button>
      </form>
    </Fragment>
  );
}
