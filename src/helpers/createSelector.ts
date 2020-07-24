import { is } from "immutable";
import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash";

export const createSelector = createSelectorCreator(
  defaultMemoize,
  immutableMemoizeCheck,
  is
);

function immutableMemoizeCheck(currentVal: any, previousVal: any) {
  return isEqual(currentVal, previousVal);
}
