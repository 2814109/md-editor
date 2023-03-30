import { selector } from "recoil";
import { ActionTypeState } from "~/recoil/atoms/actionType";

export const actionTypeSelector = selector({
  key: "actionTypeSelector",
  get: ({ get }) => get(ActionTypeState),
  set: ({ set }, newValue) => {
    set(ActionTypeState, newValue);
  },
});
