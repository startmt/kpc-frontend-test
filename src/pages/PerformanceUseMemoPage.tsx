import React, { Fragment, useMemo } from "react";
import { useEmployee } from "../features/exampleAsync/use-employee-store";
const PerformanceUseMemoPage: React.FC = () => {
  const employee = useEmployee();
  useMemo(() => {
    console.log("no memo");
    console.log(employee.employeeData);
  }, [employee.employeeData]);
  return (
    <Fragment>
      <h1>Test Memorized</h1>
      <button
        onClick={() => {
          employee.handleRefresh();
        }}
      >
       Refresh
      </button>
      {employee.employeeData?.map((employ) => {
        return <p>{employ["first"]}</p>;
      })}
    </Fragment>
  );
};

export default PerformanceUseMemoPage;
