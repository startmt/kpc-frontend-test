import { Table } from "antd";
import React, { useState } from "react";
import { TableRowSelection } from "antd/lib/table/interface";
import { TableProps } from "antd/lib/table";
import TableHeader from "./TableHeader";
import { UserProps } from "../../features/user/model";
import { useUser } from "../../features/user/use-user-store";

interface UserDetailTableProps extends TableProps<UserProps> { }

const UserDetailTable: React.FC<UserDetailTableProps> = ({
  dataSource,
  ...rest
}) => {
  const [selectedRow, setSelectedRow] = useState([]);
  const [key, setKey] = useState([]);
  const [current, setCurrent] = useState(1);
  const { handleDeleteUser } = useUser()
  const handlePagination = (page: number, pageSize?: number | undefined) => {
    setCurrent(page);
  };

  const rowSelection: TableRowSelection<any> | undefined = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      setSelectedRow(selectedRows);
      setKey(selectedRowKeys);
    },
    selectedRowKeys: key,
  };
  const handleSelectedDelete = () => {
    selectedRow.map((item: UserProps) =>
      handleDeleteUser(item.key)
    );
  };
  const getData = (current: number) => {
    const data =
      dataSource ||
      [].sort((prev: UserProps, next: UserProps) => prev.key - next.key);
    return data.slice((current - 1) * 5, (current - 1) * 5 + 5);
  };
  return (
    <Table
      title={() => {
        return (
          <TableHeader
            deleteButton={{ onClick: handleSelectedDelete }}
            pagination={{
              onChange: handlePagination,
              current: current,
              total: dataSource?.length,
              pageSize: 5,
            }}
          />
        );
      }}
      dataSource={getData(current)}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      pagination={false}
      {...rest}
    />
  );
};

export default UserDetailTable;
