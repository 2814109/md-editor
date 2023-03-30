import { atom } from "recoil";

type ActionType = "create" | "delete" | "init";
export const ActionTypeState = atom<ActionType>({
  key: "ActionTypeState",
});
