import React from "react";
import {
  Carousel,
  Image,
  Rate,
  Mentions,
  Form,
  Input,
  Button,
  message,
  notification,
} from "antd";
import "./sanpham.css";
import { CarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Header from "../layout/layoutPage/header";
import Footer from "../layout/layoutPage/footer";
import { useParams } from "react-router";
import { findProduct, findPromotion } from "../../api/axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

function DetailProduct() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();

  const detailProduct = () => {
    findProduct(id).then((res) => {
      setProduct(res.data);
    });
  };
  const onClick = () => {

  
    // if()
    console.log(product.promotionID);
    // const salePrice =
    const obj = {
      id: product.productId,
      quantity: quantity,
      promotion: product.promotionID,
      price : product.price
      // salePrice : 
    };
    let itemReqList = localStorage.getItem("itemReqList");
    if (itemReqList) {
      const arr = JSON.parse(itemReqList);
      const existingItem = arr.find((item) => item.id === obj.id);

      if (existingItem) {
        // Nếu "id" đã tồn tại, tăng số lượng lên
        existingItem.quantity += obj.quantity;
      } else {
        // Nếu "id" chưa tồn tại, thêm mục mới vào mảng
        arr.push(obj);
      }
      localStorage.setItem("itemReqList", JSON.stringify(arr));
    } else {
      localStorage.setItem("itemReqList", JSON.stringify([obj]));
    }
    notification.success({ message: "Đã thêm sản phẩm vào giỏ hàng" });
    console.log(obj);
  };

  useEffect(() => {
    detailProduct();
  }, [id]);

  //   console.log(product);
  return (
    <div>
      <Header />
      <div>
        <h3 className="reno-text">{product["productName"]}</h3>
        <div className="reno">
          <div className="reno-1">
            <Carousel autoplay>
              <Image src={product["image"]} alt="anh-1" />
            </Carousel>
            <div className="flex">
              <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
              <h2 className="mx-2"> Số lượng : {quantity}</h2>
              <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </div>
          </div>
          <div>
            <div className="reno-line">
              <h3 className="text-2">
                <NumericFormat
                  value={product["price"]}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />{" "}
                đ
              </h3>
              <del>
                <NumericFormat
                  value={product["price"]}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />{" "}
                đ
              </del>
              <h5>| Giá đã bao gồm 10% VAT</h5>
            </div>
            <h5 className="reno-2">
              Sản phẩm bán giá Hotsale với số lượng có hạn
            </h5>
            <putton className="reno-putton">
              <CarOutlined className="icon-reno8T" />
              MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC
            </putton>
            <h5 className="reno-3">Lựa chọn màu và xem địa chỉ còn hàng</h5>
            <div className="reno8T">
              <div className="reno-line-2">
                {/* <Row className="dt-line-3">
                  <Col span={9}>
                    <Checkbox className="reno-checkbox" value="Realme">
                      {product["color"]}
                    </Checkbox>
                  </Col>
                </Row> */}
                {/* <h4>
                  <NumericFormat
                    value={product["price"]}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                  />{" "}
                  đ
                </h4> */}
              </div>
            </div>

            <div className="flex ">
              <div className="bg-[#c61f1f] px-[30px] rounded-[5px] py-1 mr-5 text-[#fff]">
                <putton className="reno8T-putton">
                  <CarOutlined />
                  <Link to={"/gio-hang"}>MUA NGAY</Link>
                </putton>
                <h5>Giao tận nhà (COD)</h5>
              </div>
              {/* <div className='reno-putton-2'> */}

              <Button
                type="primary"
                onClick={onClick}
                className="py-[28px] px-[30px] bg-[#333]"
              >
                Thêm vào giỏ hàng
              </Button>

              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="reno8T-danhgia">
          <div className="danhgia-line">
            <h3 className="danhgia-text-1">
              Đánh giá về {product["productName"]}
            </h3>
            <Rate className="danhgia-rate" />
          </div>
          <div className="comment">
            <Form.Item className="comment-line" rules={[{ required: true }]}>
              <Mentions rows={3} placeholder="Nội dung" />
            </Form.Item>
            <div className="comment-input">
              <Input className="comment-input-1" placeholder="Họ tên" />
              <Input
                className="comment-input-1"
                placeholder="Số điện thoại mua hàng"
              />
              <Input className="comment-input-1" placeholder="Email" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
