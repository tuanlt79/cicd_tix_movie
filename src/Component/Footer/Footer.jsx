import React from "react";
import { useDispatch, useSelector } from "react-redux";
import zion from "../../Assets/img/logo-zion.png";
import thongBao from "../../Assets/img/daThongBao.png";
export default function Footer() {
  const dispatch = useDispatch();
  const cumRap = useSelector((state) => state.PhimReducer.cumRap);
  return (
    <footer>
      <div className="container">
        <div className="row footer__content ">
          <div className="col-sm-4">
            <p>TIX</p>
            <div className="row">
              <div className="col-sm-6 ">
                <a href="#" className="text__footer">
                  FAQ
                </a>
                <a href="#" className="text__footer">
                  Brand Guidelines
                </a>
              </div>
              <div className="col-sm-6">
                <a href="#" className="text__footer">
                  Thỏa thuận sử dụng
                </a>
                <a href="#" className="text__footer">
                  Chính sách bảo mật
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 footer__doiTac ">
            <p>ĐỐI TÁC</p>
            <div className="">
              {cumRap?.map((item, index) => {
                return (
                  <a key={index} href="#" className="mr-3 footer__icon">
                    <img src={item.logo} alt={item.logo} width="30px" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="row">
              <div className="col-6">
                <p>MOBILE APP</p>
                <a href="#" className="icon__mobile">
                  <img
                    src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                    alt=""
                  />
                </a>
                <a href="#" className="icon__mobile">
                  <img
                    src="https://tix.vn/app/assets/img/icons/android-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6">
                <p>SOCIAL</p>
                <a href="#" className="icon__mobile">
                  <img
                    src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                    alt=""
                  />
                </a>
                <a href="#" className="icon__mobile">
                  <img
                    src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr__footer" />
        <div className="row">
          <div className="col-xl-2 col-md-2 col-sm-12 col-lg-2 img__logoZion ">
            <img src={zion} alt="" className="img__zion" />
          </div>
          <div className="col-xl-8 col-md-8 col-sm-12 col-lg-8 footer__info">
            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900 545 436
              <a href="mailto:support@tix.vn"> support@tix.vn</a>
            </span>
          </div>
          <div className=" col-md-2 col-xl-2 img__thongBao">
            <img src={thongBao} alt="" width="130" />
          </div>
        </div>
      </div>
    </footer>
  );
}
