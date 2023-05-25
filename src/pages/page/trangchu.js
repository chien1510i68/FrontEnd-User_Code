import React from 'react'
import './style.css'
import { Col, Row, Carousel } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { AppleOutlined } from '@ant-design/icons'
import Header from '../../components/layout/layoutPage/header'
import Footer from '../../components/layout/layoutPage/footer'
import { useState } from 'react'
import { getAllProduct } from '../../api/axios'
import { useEffect } from 'react'
import { NumericFormat } from 'react-number-format';

function Trangchu() {
  //api 
  const navigate = useNavigate('')
  const [data, setData] = useState([]);
  const [condition, setCondition] = useState('');

  const listProduct = () => {
    getAllProduct().then((res) => {
      setData(res.data.listItem);
    });
  };

  function getListProduct() {
    const productList = data.map(item =>
      <Col className="gutter-row-1" span={4}>
        <div>
          <Link to={'/prod/'+item["productId"]} >
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
  }, [condition]);

  return (
    <div>
      <Header />
      <div className='content-line-1'>
        <Carousel autoplay>
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/13/ip-pc.png' alt='anh-1' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/01/showcase-redmi-buds-4-lite-web-01.jpg' alt='anh-2' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/03/20/xiaomi-13-series-01.jpg' alt='anh-3' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/14/galaxy-z-fold4-z-flip4-02.jpg' alt='anh-4' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/web-galaxy-s23-ultra-03.jpg' alt='anh-5' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/15/web-c55.png' alt='anh-6' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/taba8-web-1.jpg' alt='anh-7' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/10/oppo-find-n2-flip-web.jpg' alt='anh-8' />
        </Carousel>
      </div>

      <div className='content-line-2' onClick={() => navigate("/user/addProduct")}>
        <Row gutter={22}>
          <Col className="gutter-row" span={4}>
            <div>
              <h4>OPPO Find N2 Flip</h4>
              <h5>Sự lựa chọn hoàn hảo</h5>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <h4>Mở bán Realme C55</h4>
              <h5>Chụp chuyên sâu - Nhớ siêu lâu</h5>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <h4>Apple Iphone 14 Pro Max</h4>
              <h5>Giá chỉ từ 25.590.000 đ</h5>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <h4>Xiaomi 13 seri</h4>
              <h5>Pin cực trâu</h5>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <h4>Samsung Galaxy S23 Series</h4>
              <h5>Cảm hứng từ thiên nhiên</h5>
            </div>
          </Col>
        </Row>
      </div>

      <div className='content-line-3'>
        <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/taba8-chuyenmuc.jpg' alt='' />
      </div>

      <div className='content-line-5'>
        <h3 className='text-3'>Sản phẩm nổi bật</h3>
      </div>

      <div className='content-line-4'>
        {getListProduct()}
      </div>


      <div className='content-anh'>
        <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/11/tv-xiaomi.png' alt='anh' width={'1200px'} />
      </div>

      <div className='content-line-6'>
        <h3 className='text-3'>TIN CÔNG NGHỆ</h3>
      </div>

      <div className='content-line-7'>
        <Row gutter={22}>
          <Col className="gutter-row-2" span={7}>
            <div className='line-1'>
              <img src='https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2023/04/z4242009841867_3418197952ad7aacb409a02468104bfc-218x150.jpg' alt='anh-1' className='anh1' />
              <h4>Nên xóa bộ nhớ cache iPhone của mình để không hối hận</h4>
            </div>
          </Col>
          <Col className="gutter-row-2" span={7}>
            <div className='line-1'>
              <img src='https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2023/04/lam-sach-tai-nghe-218x150.jpg' alt='anh-1' className='anh1' />
              <h4>Hướng dẫn làm sạch tai nghe AirPods đúng cách để tăng tuổi thọ cho thiết bị</h4>
            </div>
          </Col>
          <Col className="gutter-row-2" span={7}>
            <div className='line-1'>
              <img src='https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2023/04/Xiaomi-Pad-6-1-218x150.jpg' alt='anh-1' className='anh1' />
              <h4>Bạn đã biết dùng ChatGPT chưa? Đừng bỏ lỡ cách sử dụng AI chatbot đang được bàn tán</h4>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default Trangchu