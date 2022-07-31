import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type ApiError = { 'InvalidAddress' : null } |
  { 'InvalidTokenId' : null } |
  { 'Unauthorized' : null } |
  { 'Other' : null };
export type BalanceResult = { 'Ok' : bigint } |
  { 'Err' : ApiError };
export interface Customer {
  'sex' : boolean,
  'name' : string,
  'birthday' : string,
  'address' : string,
  'phone' : string,
}
export interface Dip721 {
  'approve' : ActorMethod<[TokenId, Principal], undefined>,
  'balanceOf' : ActorMethod<[Principal], BalanceResult>,
  'create_account' : ActorMethod<[Customer], boolean>,
  'delete_account' : ActorMethod<[bigint], boolean>,
  'getApproved' : ActorMethod<[TokenId], Principal>,
  'getName' : ActorMethod<[], string>,
  'getOwnerCanister' : ActorMethod<[], Principal>,
  'getSymbol' : ActorMethod<[], string>,
  'getTokenInfo' : ActorMethod<[TokenId], [] | [metadata]>,
  'isApprovedForAll' : ActorMethod<[Principal, Principal], boolean>,
  'mint' : ActorMethod<[metadata], MintResult>,
  'ownerOf' : ActorMethod<[TokenId], [] | [Principal]>,
  'read_account' : ActorMethod<[bigint], [] | [Customer]>,
  'setApprovalForAll' : ActorMethod<[Principal, boolean], undefined>,
  'transfer' : ActorMethod<[TokenId, Principal], TxReceipt>,
  'transferFrom' : ActorMethod<[Principal, Principal, bigint], undefined>,
  'update_account' : ActorMethod<[bigint, Customer], boolean>,
}
export type MintResult = { 'Ok' : bigint } |
  { 'Err' : ApiError };
export type TokenId = bigint;
export type TxReceipt = { 'Ok' : boolean } |
  { 'Err' : ApiError };
export interface metadata {
  'url' : string,
  'name' : string,
  'description' : string,
}
export interface _SERVICE extends Dip721 {}
