import { is } from "immutable";
import { createSelectorCreator, defaultMemoize } from "reselect";

export const createSelector = createSelectorCreator(
  defaultMemoize,
  immutableMemoizeCheck,
  is
);

function immutableMemoizeCheck(currentVal: any, previousVal: any) {
  return currentVal.equals(previousVal)
}
