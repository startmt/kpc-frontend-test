import { Table } from "antd";
import React from "react";
import { TableProps } from "antd/lib/table";
import TableHeader from "./TableHeader";
import { UserProps } from "../../features/user/model";
import { useUserDetailTable } from "./use-user-detail-table";

interface UserDetailTableProps extends TableProps<UserProps> { }

const UserDetailTable: React.FC<UserDetailTableProps> = ({
  dataSource,
  ...rest
}) => {
  const { handlePagination, current, handleSelectedDelete, getData, rowSelection } = useUserDetailTable(dataSource)
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

export default React.memo(UserDetailTable);
