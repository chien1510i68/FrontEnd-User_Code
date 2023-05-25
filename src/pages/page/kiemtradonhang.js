import React, { useEffect, useState } from "react";
import { Button, Input, Table, message } from "antd";
import Header from "../../components/layout/layoutPage/header";
import Footer from "../../components/layout/layoutPage/footer";
import Cookies from "js-cookie";
import { getOrderByEmail } from "../../api/axios";

function KiemTraDonHang() {
  const [listOrder, setListOrder] = useState([]);
  const handleGetInfor = () => {
    const dataUser = JSON.parse(Cookies.get("dataUser"));
    // console.log(dataUser.data.email);
    getOrderByEmail({ email: dataUser.data.email }).then((res) => {
      // console.log( res.data.data.listItem );
      setListOrder(res.data.data.listItem);
    });
    console.log(listOrder);
  };
  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "orderId",
      //   align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      //   align: "center",
    },
    {
      title: "Tổng thanh toán",
      dataIndex: "totalValueOrder",
      align: "center",
    },

    {
      title: "Số lượng",
      dataIndex: "quantity",

      align: "center",
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "orderCreationDate",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "statusId",
      align: "center",
      // render : (record)=>{
      //   if(record.statusId == 1){
      //     message.info("1")
      //   }
      // }
    },
  ];
  useEffect(() => {
    handleGetInfor();
  }, []);
  return (
    <div>
      <Header />
      {/* <Button onClick={handleGetInfor}>Click me</Button> */}
      <div className="kiem-tra-don-hang">
        <h2 className="my-[50px] text-[28px] text-center">Danh sách đơn hàng của bạn</h2>

        <Table
          // rowSelection={rowSelection}
          className="mx-[40px]"
          columns={columns}
          dataSource={listOrder}
          pagination={{
            defaultCurrent: 1,

            // showSizeChanger: true,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default KiemTraDonHang;
