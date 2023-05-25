import React from 'react'
import { Row, Col } from 'antd'
import './style.css'
import Header from '../../components/layout/layoutPage/header'
import Footer from '../../components/layout/layoutPage/footer'
import { getProduct } from '../../api/axios'
import { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom'

function SamSung() {
  const [data, setData] = useState([]);
  const condition = {
    "page": 0,
    "size": 20,
    "manufacturer": "SamSung"
  };
  const listProduct = () => {
    getProduct(condition).then((res) => {
      setData(res.data.data.listItem);
    });
  };

  function getListProduct() {
    const productList = data?.map(item =>
      <Col className="gutter-row-1" span={4}>
        <div>
          <Link to={'/prod/' + item["productId"]} >
            <img src={item["image"]} alt='anh-1' className='anh' />
          </Link>
          <h4>{item["productName"]}</h4>
          <ul className='text-1'>
            <h3 className='text-2'>
              <NumericFormat value={item["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ
            </h3>
            <del><NumericFormat value={item["price"]} displayType={'text'} thousandSeparator={true} prefix={''} /> đ</del>
          </ul>
        </div>
      </Col>
    )

    return (
      <Row gutter={22}>
        {productList}
      </Row>
    );
  }

  useEffect(() => {
    listProduct();
  }, []);

  return (
    <div>
      <Header />
      <div className='content-samsung-line'>
        <h2 className='samsung-text'>SAMSUNG</h2>
      </div>

      <div className='content-line-4'>
        {getListProduct()}
      </div>
      <Footer />
    </div>
  )
}

export default SamSung