import { Table, Grid, Row, Col, Button, Pagination } from "antd";
import React, { useState } from "react";
import { UserProps, deleteUser } from "../../features/user/slice";
import { TableRowSelection } from "antd/lib/table/interface";
import { TableProps } from "antd/lib/table";
import { useDispatch } from "react-redux";

interface UserDetailTableProps extends TableProps<UserProps> {}
const TableHeader = (onDelete: () => void, disabled: boolean) => {
  return (
    <Row justify="space-between" gutter={16}>
      <Button type="primary" danger onClick={onDelete} disabled={disabled}>
        DELETE
      </Button>
    </Row>
  );
};

const UserDetailTable: React.FC<UserDetailTableProps> = ({ ...rest }) => {
  const [selectedRow, setSelectedRow] = useState([]);
  const [key, setKey] = useState([]);
  const dispatch = useDispatch();
  const rowSelection: TableRowSelection<any> | undefined = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      setSelectedRow(selectedRows);
      setKey(selectedRowKeys);
    },
    selectedRowKeys: key,
  };
  const handleSelectedDelete = () => {
    selectedRow.map((item: UserProps) =>
      dispatch(deleteUser({ key: item.key }))
    );
  };
  return (
    <Table
      title={(currentPageData) => {
        return TableHeader(handleSelectedDelete, key.length === 0);
      }}
      pagination={{
        position: ["topRight"],
        pageSize: 5,
      }}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      {...rest}
    />
  );
};

export default UserDetailTable;
