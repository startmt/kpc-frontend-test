import { Table } from "antd";
import React from "react";
import { UserProps } from "../../features/user/slice";
import { TableRowSelection } from "antd/lib/table/interface";
type UserDetailTableProps = {
  columns: any;
  dataSource: any[];
};
const rowSelection: TableRowSelection<any> | undefined = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: UserProps) => ({}),
};
const UserDetailTable: React.FC<UserDetailTableProps> = ({
  columns,
  dataSource,
}) => {
  return (
    <Table
      rowSelection={{ type: "checkbox", ...rowSelection }}
      pagination={{ position: ["topRight"] }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default UserDetailTable;
