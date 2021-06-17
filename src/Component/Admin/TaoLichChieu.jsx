import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { taoLichChieuAction } from "../../Action/PhimAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TaoLichChieu() {
  const { accessToken } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(taoLichChieuAction(data, accessToken));
  };
  return (
    <div className="d-inline-block">
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn__taoLichChieu"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Tạo Lịch Chiếu
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Nhập Thông Tin Tạo Lịch Chiếu
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
                      <span>Nhập Mã Phim</span>
                      <input
                        type="text"
                        {...register("maPhim")}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <span>Giá vé</span>
                      <input
                        type="text"
                        {...register("giaVe")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <span>Mã Rạp</span>
                      <input
                        type="text"
                        placeholder="000"
                        {...register("maRap")}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <span className="mr-2">Ngày Chiếu</span>
                      {/* <input
                        type="text"
                        placeholder="dd/MM/yyyy hh:mm"
                        {...register("ngayChieuGioChieu")}
                      /> */}
                      <Controller
                        name="ngayChieuGioChieu"
                        control={control}
                        defaultValue={null}
                        render={({ field }) => (
                          <DatePicker
                            onChange={(e) => field.onChange(e)}
                            selected={field.value}
                            dateFormat="dd/MM/yyyy HH:mm"
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            isClearable
                          />
                        )}
                      />
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
                  Tạo Lịch Chiếu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
