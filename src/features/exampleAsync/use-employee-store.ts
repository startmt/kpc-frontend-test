import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "./slice";
import { useEffect, useCallback } from "react";
import { selectEmployeeData } from "./employee-selector";

//create hook from store
export const useEmployee = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

  const employeeData = useSelector(selectEmployeeData());
  const handleRefresh = () => {
    dispatch(getEmployee());
  };
  return {
    employeeData,
    handleRefresh,
  };
};
