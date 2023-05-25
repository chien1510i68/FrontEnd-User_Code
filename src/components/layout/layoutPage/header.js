import React from "react";
import { Dropdown, Input, Select } from "antd";
import {
  CarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
// import { getProduct } from "";
import { getProduct } from "../../../api/axios";
import Cookies from "js-cookie";
import "./header.css";

function Header(props) {
  const navigate = useNavigate();
  const { Option } = Select;
  const { Search } = Input;
  const [condition, setCondition] = useState({
    page: 0,
    size: 20,
  });
  const [searchKey, setSearchKey] = useState("");
  const [productsOnChange, setProductsOnChange] = useState([]);
  const [item, setItem] = useState([]);
  const onSearch = (value) => {
    // console.log(value);
    // props.onSearch(value);
    // navigate("/search", { state: value });
    Cookies.set("data", value);
  };

  const onSearchChange = (e) => {
    let arr = [];
    // console.log(e.currentTarget.value);
    setSearchKey(e.currentTarget.value);
    console.log({ page: 0, size: 20, productName: e.currentTarget.value });
    getProduct({
      page: 0,
      size: 20,
      productName: e.currentTarget.value,
    })
      .then((res) => {
        if (res.data.success) {
          setProductsOnChange(res.data.data.listItem);
          // console.log(productsOnChange);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(productsOnChange);

    {
      const options = productsOnChange.map((i) => ({
        key: i.productId,
        label: i.productName,
        productId: i.productId,
      }));

      setItem(options);
    }
  };
  console.log(item);

  return (
    <div className="header">
      <div className="header-line">
        <h3 className="header-text-one">
          Chào mừng đến với thế giới smartphone với muôn ngàn ưu đãi
        </h3>
      </div>
      <div className="header-line-1">
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/344287970_1865581070472074_2327929001103548366_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=13sgCU1zkEcAX_EXbYo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQxR6rHOFlTCYj1H-xNpugz6pBfeVoBEJOD8scV5pw-BQ&oe=647C9A4F"
              alt="Logo"
              className="Lo-go"
            />
          </Link>
        </div>
        <h2 className="header-text">Smart</h2>
        <h2 className="header-text-1">phone</h2>

        <div className="grid">
          <Input.Search
            className="input relative"
            placeholder="Hôm nay bạn cần gì"
            value={searchKey}
            onChange={onSearchChange}
            onSearch={onSearch}
          />

          <ul className="mt-2 absolute top-[75px] rounded-[5px] z-1000 h-[100px] overflow-y-auto">
            {item.map((i) => (
              <>
                <Link to={`/prod/${i.key}`}>
                  <li className="border-b-[1px] border-[#d9d9d9] bg-[#c9cfd5] hover:bg-[#cad9e5] py-[3px] px-[4px] text-[12px] ml-[70px] w-[30vw] ">
                    {i.label}
                  </li>
                </Link>
              </>
            ))}
          </ul>
        </div>
        <Link to={"/kiem-tra-don-hang"}>
          <putton className={"putton-one"}>
            <CarOutlined className={"icon"} />
            Kiểm tra đơn hàng
          </putton>
        </Link>
        <Link to={"/gio-hang"}>
          <ShoppingCartOutlined className="icon-1" />
        </Link>
        <a href="/login">
          <UserOutlined className="icon-2" />
        </a>
      </div>
      <div className="header-menu">
        <Link to="/dien-thoai">
          <h3 className="text-header" activeHeading>
            ĐIỆN THOẠI
          </h3>
        </Link>
        <Link to="/iphone">
          <h3 className="text-header" activeHeading>
            IPHONE
          </h3>
        </Link>
        <Link to="/sam-sung">
          <h3 className="text-header" activeHeading>
            SAMSUNG
          </h3>
        </Link>
        <Link to="/oppo">
          <h3 className="text-header" activeHeading>
            OPPO
          </h3>
        </Link>
        <Link to="/realme">
          <h3 className="text-header" activeHeading>
            REALME
          </h3>
        </Link>
        <Link to="/redmi">
          <h3 className="text-header" activeHeading>
            REDMI
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
