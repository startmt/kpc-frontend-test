import React from "react";
import { Select, Form } from "antd";
type NationalitySelectProps = {
  data?: "thai" | "american" | "laos";
};
const NationalitySelect: React.FC<NationalitySelectProps> = ({ data }) => {
  return (
    <Form.Item
      wrapperCol={{ span: 24, offset: 1 }}
      name="nationality"
      label="Nationality"
      initialValue={data}
      rules={[{ required: true, message: "Nationality is required" }]}
    >
      <Select placeholder="--- Please select ----">
        <Select.Option value="thai">ไทย</Select.Option>
        <Select.Option value="american">อเมริกา</Select.Option>
        <Select.Option value="laos">ลาว</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default NationalitySelect;
