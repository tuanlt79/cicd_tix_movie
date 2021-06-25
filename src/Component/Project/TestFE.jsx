import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorProduct, getAllDetail } from "../../Action/PhimAction";
import { Table, Image, Input, Select, Modal, Button } from "antd";
import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons";

import { useState } from "react";
export default function TestFE() {
  const dispatch = useDispatch();
  const arrSP = useSelector((state) => state.PhimReducer.arrSP);
  const colorSP = useSelector((state) => state.PhimReducer.colorSP);
  console.log(colorSP);

  useEffect(() => {
    dispatch(getAllDetail());
  }, []);
  useEffect(() => {
    dispatch(colorProduct());
  }, []);
  const [dsSP, setDSSP] = useState(null);
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // function onChange(value) {
  //   console.log(`selected ${value}`);
  // }

  // function onBlur() {
  //   console.log("blur");
  // }

  // function onFocus() {
  //   console.log("focus");
  // }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (item) => <div style={{ fontWeight: "bold" }}>{item}</div>,
    },
    {
      title: "Error Description ",
      dataIndex: "errorDescription",
    },
    {
      title: "Product Image",
      dataIndex: "image",
      render: (item) => {
        return <Image key={item} width={100} src={item} />;
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      render: (item) => {
        return <Input value={item} placeholder={item} />;
      },
    },

    {
      title: "SKU",
      dataIndex: "sku",
      render: (item) => {
        return <Input value={item} />;
      },
    },
    {
      title: "Color",
      dataIndex: "color",
      render: (item) => {
        return (
          <Select
            defaultValue={item}
            placeholder="Select value"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value={item}>{item}</Option>
          </Select>
        );
      },
    },
  ];
  return (
    <section>
      <Button type="primary" onClick={showModal}>
        <UploadOutlined />
        Submit
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
      <div className="">
        <Table
          columns={columns}
          className="table manager__Product"
          dataSource={dsSP ? dsSP : arrSP}
        />
      </div>
    </section>
  );
}
