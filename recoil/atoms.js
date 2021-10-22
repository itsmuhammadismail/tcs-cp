import { atom } from "recoil";

export const countriesState = atom({
  key: "countriesState",
  default: [],
});

export const citiesState = atom({
  key: "citiesState",
  default: [],
});

export const costcentersState = atom({
  key: "costcentersState",
  default: [],
});
