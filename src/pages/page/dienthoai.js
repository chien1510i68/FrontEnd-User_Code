import React from "react";
import { Row, Carousel, Col, Checkbox, Radio } from "antd";
import "./style.css";
import Footer from "../../components/layout/layoutPage/footer";
import Header from "../../components/layout/layoutPage/header";
import { getProduct } from "../../api/axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function DienThoai() {
  const [data, setData] = useState([]);
  const [condition, setCondition] = useState({
    page: 0,
    size: 20,
  });

  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState("0,100000000");
  const [color, setColor] = useState("");
  const [load, setLoad] = useState("");
  const [isHandleConditionCalled, setIsHandleConditionCalled] = useState(false);

  const listProduct = () => {
    getProduct(condition).then((res) => {
      if (res.data.success) {
        setData(res.data.data.listItem);
      } else {
        setData([]);
      }
    });
  };

  function onValueChange(e) {
    setManufacturer(e.currentTarget.value);
    const newCondition = { ...condition, manufacturer: e.currentTarget.value };
    setCondition(newCondition);
  }

  function onPriceChange(e) {
    setPrice(e.currentTarget.value);
    var priceSplit = e.currentTarget.value.split(",");
    const newCondition = {
      ...condition,
      priceFrom: priceSplit[0],
      priceTo: priceSplit[1],
    };
    setCondition(newCondition);
  }

  function onColorChange(e) {
    setColor(e.currentTarget.value);
    const newCondition = { ...condition, color: e.currentTarget.value };
    setCondition(newCondition);
  }

  function getListProduct() {
    const productList = data?.map((item) => (
      <Col className="gutter-dien-thoai" span={6}>
        <div>
          <Link to={"/prod/" + item["productId"]}>
            <img src={item["image"]} alt="anh-1" className="anh" />
          </Link>
          <h4>{item["productName"]}</h4>
          <ul className="text-1">
            <h3 className="text-2">
              <NumericFormat
                value={item["price"]}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />{" "}
              đ
            </h3>
            <del>
              <NumericFormat
                value={item["price"]}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />{" "}
              đ
            </del>
          </ul>
        </div>
      </Col>
    ));

    return <Row gutter={22}>{productList}</Row>;
  }

  useEffect(() => {
    listProduct();
    
    
  }, [condition]);

  // const handleCondition = () => {
  //   const productName = Cookies.get("data");
  //   console.log(productName);

  //   setCondition({
  //     ...condition,
  //     productName: productName,
  //   });
  // };

  const handleCondition = () => {
    const productName = Cookies.get("data");
    console.log(productName);

    setCondition((prevCondition) => ({
      ...prevCondition,
      productName: productName,
    }));
    Cookies.clear();
  };
  return (
    <div>
      <Header />{" "}
      <div className="content-line-1">
        <Carousel autoplay>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/13/ip-pc.png"
            alt="anh-1"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/01/showcase-redmi-buds-4-lite-web-01.jpg"
            alt="anh-2"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/03/20/xiaomi-13-series-01.jpg"
            alt="anh-3"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/14/galaxy-z-fold4-z-flip4-02.jpg"
            alt="anh-4"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/web-galaxy-s23-ultra-03.jpg"
            alt="anh-5"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/15/web-c55.png"
            alt="anh-6"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/taba8-web-1.jpg"
            alt="anh-7"
          />
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/10/oppo-find-n2-flip-web.jpg"
            alt="anh-8"
          />
        </Carousel>
      </div>
      <div className="content-dt-1">
        <div className="content-dt-line">
          <div>
            <h3 className="dt-text-1">Hãng sản xuất {manufacturer}</h3>
            <Row className="dt-line-1">
              <Col span={9}>
                <Radio
                  name="manufacturer"
                  checked={manufacturer === ""}
                  onClick={onValueChange}
                  value=""
                >
                  Tất cả
                </Radio>
              </Col>
              <Col span={9}>
                <Radio
                  name="manufacturer"
                  checked={manufacturer === "Apple"}
                  onClick={onValueChange}
                  value="Apple"
                >
                  Apple
                </Radio>
              </Col>
            </Row>

            <Row className="dt-line-1">
              <Col span={9}>
                <Radio
                  name="manufacturer"
                  checked={manufacturer === "SamSung"}
                  onClick={onValueChange}
                  value="SamSung"
                >
                  Samsung
                </Radio>
              </Col>
              <Col span={9}>
                <Radio
                  name="manufacturer"
                  checked={manufacturer === "Oppo"}
                  onClick={onValueChange}
                  value="Oppo"
                >
                  Oppo
                </Radio>
              </Col>
            </Row>

            <Row className="dt-line-1">
              <Col span={9}>
                <Radio
                  name="manufacturer"
                  checked={manufacturer === "Realme"}
                  onClick={onValueChange}
                  className="dt-text-2"
                  value="Realme"
                >
                  Realme
                </Radio>
              </Col>
              <Col span={9}>
                <Radio
                  name="manufacturer"
                  checked={manufacturer === "Redmi"}
                  onClick={onValueChange}
                  className="dt-text-2"
                  value="Redmi"
                >
                  Redmi
                </Radio>
              </Col>
            </Row>
          </div>

          <div>
            <h3 className="dt-text-1">Mức giá {price}</h3>
            <Row className="dt-line-1">
              <Col span={12}>
                <Radio
                  name="price"
                  checked={price === "0,100000000"}
                  onClick={onPriceChange}
                  value="0,100000000"
                >
                  Tất cả
                </Radio>
              </Col>
            </Row>

            <Row className="dt-line-1">
              <Col span={12}>
                <Radio
                  name="price"
                  checked={price === "0,2000000"}
                  onClick={onPriceChange}
                  value="0,2000000"
                >
                  Dưới 2 triệu
                </Radio>
              </Col>
            </Row>

            <Row className="dt-line-1">
              <Col span={12}>
                <Radio
                  className="dt-text-2"
                  checked={price === "2000000,7000000"}
                  onClick={onPriceChange}
                  name="price"
                  value="2000000,7000000"
                >
                  Từ 2 - 7 triệu
                </Radio>
              </Col>
            </Row>

            <Row className="dt-line-1">
              <Col span={12}>
                <Radio
                  className="dt-text-2"
                  name="price"
                  checked={price === "7000000,13000000"}
                  onClick={onPriceChange}
                  value="7000000,13000000"
                >
                  Từ 7 - 13 triệu
                </Radio>
              </Col>
            </Row>

            <Row className="dt-line-1">
              <Col span={12}>
                <Radio
                  className="dt-text-2"
                  name="price"
                  checked={price === "13000000,100000000"}
                  onClick={onPriceChange}
                  value="13000000,100000000"
                >
                  Trên 13 triệu
                </Radio>
              </Col>
            </Row>
          </div>

          <div>
            <h3 className="dt-text-1">Màu sắc {color}</h3>
            <Row className="dt-line-1">
              <Col span={9}>
                <Radio
                  name="color"
                  checked={color === ""}
                  onClick={onColorChange}
                  value=""
                >
                  Tất cả
                </Radio>
              </Col>
              <Col span={9}>
                <Radio
                  name="color"
                  checked={color === "Red"}
                  onClick={onColorChange}
                  value="Red"
                >
                  Đỏ
                </Radio>
              </Col>
            </Row>
            <Row className="dt-line-1">
              <Col span={9}>
                <Radio
                  className="dt-text-2"
                  name="color"
                  checked={color === "Black"}
                  onClick={onColorChange}
                  value="Black"
                >
                  Đen
                </Radio>
              </Col>
              <Col span={9}>
                <Radio
                  className="dt-text-2"
                  name="color"
                  checked={color === "White"}
                  onClick={onColorChange}
                  value="White"
                >
                  Trắng
                </Radio>
              </Col>
            </Row>
            <Row className="dt-line-1">
              <Col span={9}>
                <Radio
                  className="dt-text-2"
                  name="color"
                  checked={color === "Gold"}
                  onClick={onColorChange}
                  value="Gold"
                >
                  Vàng
                </Radio>
              </Col>
              <Col span={9}>
                <Radio
                  className="dt-text-2"
                  name="color"
                  checked={color === "Green"}
                  onClick={onColorChange}
                  value="Green"
                >
                  Xanh lá
                </Radio>
              </Col>
            </Row>
          </div>
        </div>
        <div className="content-dt-line-1">
          <div className="content-dt-text-1">
            <h3>Điện thoại</h3>
            <div className="content-dt-text-2">
              <Link to={"/iphone"}>Iphone</Link>
              {/* <a href='/iphone'><h4>iPhone</h4></a> */}
              <Link to="/sam-sung">
                <h4 className="sam-sung">SamSung</h4>
              </Link>
              <Link to="/oppo">
                <h4 className="Op-po">Oppo</h4>
              </Link>
              <Link to="/realme">
                <h4 className="realme">Realme</h4>
              </Link>
              <Link to="/redmi">
                <h4 className="redmi">Redmi</h4>
              </Link>
            </div>
          </div>

          <div className="content-line-dt">{getListProduct()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DienThoai;
