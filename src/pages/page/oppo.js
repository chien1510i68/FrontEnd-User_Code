import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../components/layout/layoutPage/header'
import Footer from '../../components/layout/layoutPage/footer'
import { getProduct } from '../../api/axios'
import { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';

function Oppo() {
  const [data, setData] = useState([]);
  const condition = {
    "page": 0,
    "size": 20,
    "manufacturer": "Oppo"
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
      <div className='content-oppo-line'>
        <h2 className='oppo-text'>OPPO</h2>
      </div>

      <div className='content-line-4'>
        {getListProduct()}
        {/* <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <Link to={'/reno8T'}>
                <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/03/01/image-removebg-preview-1.png' alt='anh-1' className='anh' />
              </Link>
              <h4>OPPO A76 - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>5,090,000₫</h3><del>5,990,000₫</del>
              </ul>
            </div>
          </Col>

          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/Reno4%20(2).png' alt='anh-2' className='anh' />
              <h4>Oppo Reno4 - Chính Hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>6,450,000₫</h3><del>8,490,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/19/a54-combo-product-blue.png' alt='anh-3' className='anh' />
              <h4>OPPO A54 - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>4,190,000₫</h3><del>4,690,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/28/image-removebg-preview-3.png' alt='anh-4' className='anh' />
              <h4>OPPO A55 - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>3,950,000₫</h3><del>4,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/11/19/image-removebg-preview-6.png' alt='anh-5' className='anh' />
              <h4>OPPO A95 - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>5,390,000₫</h3><del>6,990,000₫</del>
              </ul>
            </div>
          </Col>
        </Row> */}
      </div>

      {/* <div className='content-line-4'>
        <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/07/28/image-removebg-preview-19.png' alt='anh-1' className='anh' />
              <h4>OPPO A96 4G - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>5,990,000₫</h3><del>6,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/Find%20X2%20-%20Black%20(2).png' alt='anh-2' className='anh' />
              <h4>Oppo Find X2 - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>17,750,000₫</h3><del>21,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/Reno4%20Pro%20-%20White.png' alt='anh-3' className='anh' />
              <h4>Oppo Reno4 Pro - Chính Hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>9,790,000₫</h3><del>11,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/reno7-3.png' alt='anh-4' className='anh' />
              <h4>OPPO Reno7 5G - Chính Hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>7,990,000₫</h3><del>11,590,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/18/image-removebg-preview-8.png' alt='anh-5' className='anh' />
              <h4>OPPO Reno7 4G - Chính Hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>6,550,000₫</h3><del>7,990,000₫</del>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className='content-line-4'>
        <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/09/28/combo-product-reno8-pro-green-removebg-preview.png' alt='anh-1' className='anh' />
              <h4>OPPO Reno8 Pro - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>17,490,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/02/combo-product-reno8-5g-gold.png' alt='anh-2' className='anh' />
              <h4>Reno8 5G - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>11,990,000₫</h3><del>13,290,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/A12%20(3).png' alt='anh-3' className='anh' />
              <h4>Oppo A12 - 3GB/32GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>2,550,000₫</h3><del>2,990,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/A53%20-%20Front.png' alt='anh-4' className='anh' />
              <h4>Oppo A53 - 4GB/128GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>3,950,000₫</h3>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/A92%20-%20Black%20(2).png' alt='anh-5' className='anh' />
              <h4>Oppo A92 - 8GB/128GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>5,850,000₫</h3><del>6,490,000₫</del>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className='content-line-4'>
        <Row gutter={22}>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/11/09/a93_637405189286405122.png' alt='anh-1' className='anh' />
              <h4>Oppo A93 - 8GB/128GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>5,590,000₫</h3><del>7,490,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/07/01/a57-1.png' alt='anh-2' className='anh' />
              <h4>OPPO A57 4GB/64GB - chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>3,950,000₫</h3><del>23,490,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/12/02/image-removebg-preview-9.png' alt='anh-3' className='anh' />
              <h4>OPPO A16K 3GB/32GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>2,550,000₫</h3><del>3,690,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/02/combo-product-reno8-z-gold.png' alt='anh-4' className='anh' />
              <h4>Reno8 Z 5G - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>7,890,000₫</h3><del>9,790,000₫</del>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row-1" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/28/7z.png' alt='anh-5' className='anh' />
              <h4>OPPO Reno7 Z 5G - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>7,390,000₫</h3><del>9,990,000₫</del>
              </ul>
            </div>
          </Col>
        </Row>
      </div> */}
      <Footer />
    </div>
  )
}

export default Oppo