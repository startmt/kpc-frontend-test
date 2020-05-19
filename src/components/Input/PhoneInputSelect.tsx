import React, { Fragment } from "react";
import { Select, Form, Input, Avatar } from "antd";

const phoneOption = [
  {
    value: "+66",
    text: "+66",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png",
  },
];
type PhoneInputSelectProps = {
  phoneCode?: string;
  phoneNumber?: string;
};

const PhoneInputSelect: React.FC<PhoneInputSelectProps> = ({
  phoneCode = "+66",
  phoneNumber,
}) => {
  const prefixSelector = (
    <Fragment>
      <Form.Item
        style={{ display: "inline-block" }}
        initialValue={phoneCode || "+66"}
        name="phonecode"
        noStyle
      >
        <Select style={{ width: 100 }}>
          {phoneOption.map((option) => (
            <Select.Option value={option.value}>
              <Avatar shape="square" size="small" src={option.image} />
              {option.text}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Fragment>
  );
  return (
    <Form.Item
      name="phone"
      label="Phone Number"
      initialValue={phoneNumber || ""}
      rules={[{ required: true, message: "Please input your phone number!" }]}
    >
      <Input
        addonBefore={prefixSelector}
        style={{ width: "100%" }}
        maxLength={9}
        minLength={9}
      />
    </Form.Item>
  );
};

export default PhoneInputSelect;
