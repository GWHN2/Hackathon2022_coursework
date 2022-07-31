import { HttpAgent } from "@dfinity/agent";

export type SessionData = {
  agent: HttpAgent;
  principalId: string;
  accountId: string;
} | null;
