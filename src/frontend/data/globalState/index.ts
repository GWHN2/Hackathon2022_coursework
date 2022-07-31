import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { SessionData } from "../type";

const { persistAtom } = recoilPersist();

export const ConnectedPlugState = atom({
  key: "ConnectedPlugState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const SessionDataState = atom({
  key: "SessionDataState",
  default: {} as SessionData,
});

export const CountIDState = atom({
  key: "CountIDState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const DataState = atom({
  key: "DataState",
  default: [] as any[],
  effects_UNSTABLE: [persistAtom],
});
