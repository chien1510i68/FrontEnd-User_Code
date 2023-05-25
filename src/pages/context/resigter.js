import React from 'react'
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/axios';

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 }
  },
};

function Resigter(userData) {
  const navigate = useNavigate();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    values["isSupperAdmin"] = true;
    console.log(values);
    register(values).then((res) => {
      if (res.data?.success === true) {
        alert("Đăng ký thành công")
        navigate("/login");
      }
    });
  }

  return (
    <div className='resigter-content'>
      <div className='resigter-line'>
        <h2 className='resigter-text'>Đăng kí tài khoản Smartphone</h2>
        <div className='resigter-line-2'>
          <div style={{ marginTop: '25px' }}>
            <Form
              name="basic" labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item name="userName" label="Họ tên"
                rules={[{ required: true, message: 'Vui lòng nhập username!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email"
                rules={[{ type: 'email', message: 'Email không đúng định dạng!' },
                {
                  required: true,
                  message: 'Vui lòng nhập Email!',
                }]}>
                <Input />
              </Form.Item>

              <Form.Item name="phoneNumber" label="Số điện thoại"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]} >
                <Input />
              </Form.Item>

              <Form.Item name="address" label="Địa chỉ"
                rules={[{ required: true, message: 'Vui lòng nhập address!' }]} >
                <Input />
              </Form.Item>

              <Form.Item name="password" label="Mật khẩu" hasFeedback
                rules={[{ required: true, message: 'Vui lòng nhập password!' }]} >
                <Input.Password />
              </Form.Item>

              <Form.Item
                hasFeedback
                name="confirmPassword"
                label="Xác nhận mật khẩu"
                dependencies={['password']}
                rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('2 Mật khẩu bạn đã nhập không khớp!');
                  },
                }),]}
              >
                <Input.Password />
              </Form.Item>
              <div className='resigter-line-3'>
                <h5 style={{ fontWeight: 'unset' }}>Đã có tài khoản ?</h5>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <h5 className='resigter-text-1'>Đăng nhập tại đây</h5>
                </Link>
              </div>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{ marginTop: '30px' }}>
                  Đăng kí
                </Button>
              </Form.Item>
            </Form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Resigter