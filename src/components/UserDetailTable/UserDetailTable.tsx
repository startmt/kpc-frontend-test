import { Table, Form } from "antd";
import React from "react";
import { FormInstance } from "antd/lib/form";
import { EditableCell } from "../EditableInput";
type UserDetailTableProps = {
  columns: any;
  dataSource: any[];
};

const UserDetailTable: React.FC<UserDetailTableProps> = ({
  columns,
  dataSource,
}) => {
  return (
    <Table
      rowSelection={{}}
      pagination={{ position: ["topRight"] }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default UserDetailTable;
