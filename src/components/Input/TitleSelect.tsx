import React from "react";
import { Select, Form } from "antd";

type TitleSelectProps = {
  data?: "Mr." | "Mrs.";
};
const TitleSelect: React.FC<TitleSelectProps> = ({ data }) => {
  return (
    <Form.Item
      name="title"
      label="Title"
      initialValue={data || "Mr."}
      rules={[{ required: true, message: "Title is required" }]}
    >
      <Select placeholder="Select Title">
        <Select.Option value="Mr.">Mr.</Select.Option>
        <Select.Option value="Mrs.">Mrs.</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default TitleSelect;
