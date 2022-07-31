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
