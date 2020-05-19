import React from "react";
import { Row, Button, Pagination } from "antd";
import { PaginationProps } from "antd/lib/pagination";
import { ButtonProps } from "antd/lib/button";

type TableHeader = {
  deleteButton: ButtonProps;
  pagination: PaginationProps;
};
const TableHeader: React.FC<TableHeader> = ({ deleteButton, pagination }) => {
  return (
    <Row justify="space-between" gutter={16}>
      <Button type="primary" danger {...deleteButton}>
        DELETE
      </Button>
      <Pagination {...pagination} />
    </Row>
  );
};

export default TableHeader;
