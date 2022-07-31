export const idlFactory = ({ IDL }) => {
  const TokenId = IDL.Nat;
  const ApiError = IDL.Variant({
    'InvalidAddress' : IDL.Null,
    'InvalidTokenId' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Null,
  });
  const BalanceResult = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : ApiError });
  const Customer = IDL.Record({
    'sex' : IDL.Bool,
    'name' : IDL.Text,
    'birthday' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const metadata = IDL.Record({
    'url' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  const MintResult = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : ApiError });
  const TxReceipt = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : ApiError });
  const Dip721 = IDL.Service({
    'approve' : IDL.Func([TokenId, IDL.Principal], [], []),
    'balanceOf' : IDL.Func([IDL.Principal], [BalanceResult], ['query']),
    'create_account' : IDL.Func([Customer], [IDL.Bool], []),
    'delete_account' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'getApproved' : IDL.Func([TokenId], [IDL.Principal], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwnerCanister' : IDL.Func([], [IDL.Principal], ['query']),
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'getTokenInfo' : IDL.Func([TokenId], [IDL.Opt(metadata)], ['query']),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ['query'],
      ),
    'mint' : IDL.Func([metadata], [MintResult], []),
    'ownerOf' : IDL.Func([TokenId], [IDL.Opt(IDL.Principal)], ['query']),
    'read_account' : IDL.Func([IDL.Nat], [IDL.Opt(Customer)], []),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [], []),
    'transfer' : IDL.Func([TokenId, IDL.Principal], [TxReceipt], []),
    'transferFrom' : IDL.Func([IDL.Principal, IDL.Principal, IDL.Nat], [], []),
    'update_account' : IDL.Func([IDL.Nat, Customer], [IDL.Bool], []),
  });
  return Dip721;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
