import Array "mo:base/Array";
import Error "mo:base/Error";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Trie "mo:base/Trie";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import P "mo:base/Prelude";
import Principal "mo:base/Principal";
import Etc "Etc";
import Time "mo:base/Time";
import Prelude "mo:base/Prelude";
import TrieSet "mo:base/TrieSet";
import Buffer "mo:base/Buffer";
shared(msg) actor class Dip721() = this{
  // private stable var owner : Principal = _owner;
    private stable var owner: Principal = Principal.fromText("2rhlo-33g5s-ivdiz-fx452-4hlp7-bpgzy-jl2p5-kyuai-ezpfb-shsm7-oae");
  private stable var name: Text =  "MyDIP721";
private stable var symbol: Text = "MDIP";
  public type Customer = {
        name : Text;
        birthday : Text;
        phone : Text;
        sex : Bool;
        address : Text;
  };
  private stable var customers : Trie.Trie<Nat,Customer> = Trie.empty();
  private stable var next : Nat = 0;
  private func key(x:Nat) : Trie.Key<Nat>{
    return {
      key = x; hash = Hash.hash(x);
    };
  };
  public func create_account(c : Customer) : async Bool{
    next += 1;
    let id = next;
    let(newCustomers, existing) = Trie.put(
      customers,
      key(id),
      Nat.equal,c
    );
    switch(existing){
      case (null){
        customers := newCustomers;
      };
      case (?v){
        return false;
      };
    };
    return true;
  };
  public func read_account(id : Nat) : async ?Customer{
    let result = Trie.find(
      customers,
      key(id),
      Nat.equal
    );
    return result;
  };
  public func update_account(id : Nat, c : Customer) : async Bool{
    let result = Trie.find(
      customers,
      key(id),
      Nat.equal
    );
    switch(result){
      case (null){
        return false;
      };
      case (?v){
        customers := Trie.replace(customers, key(id),Nat.equal,?c).0;
      };
    };
    return true;
  };
  public func delete_account(id: Nat) : async Bool{
    let result = Trie.find(
      customers,
      key(id),
      Nat.equal
    );
    switch(result){
      case (null){
        return false;
      };
      case (?v){
        customers := Trie.replace(customers, key(id),Nat.equal,null).0;
      };
    };
    return true;
  };

  //start of minting, transfering nft
  private type TokenAddress = Principal;
    private type TokenId = Nat;

    private stable var TokenCounter : Nat = 0;

    private stable var tokenIdToMetadataTmp: [(TokenId, Etc.metadata)] = [];
    private stable var tokenIdToOwnerTmp: [(TokenId, Principal)] = [];
    private stable var balancesTmp: [(Principal, Nat)] = [];
    private stable var tokenIdToApproveTmp: [(TokenId, Principal)] = [];
    private stable var addressApproveAllTmp: [(Principal, [Principal])] = [];

    private let tokenIdToMetadata: HashMap.HashMap<TokenId, Etc.metadata> = HashMap.fromIter<TokenId, Etc.metadata>(tokenIdToMetadataTmp.vals(), 0, Nat.equal, Hash.hash);
    private let tokenIdToOwner: HashMap.HashMap<TokenId, Principal> = HashMap.fromIter<TokenId, Principal>(tokenIdToOwnerTmp.vals(), 0, Nat.equal, Hash.hash);
    private let balances: HashMap.HashMap<Principal, Nat> = HashMap.fromIter(balancesTmp.vals(), 0, Principal.equal, Principal.hash);
    private let tokenIdToApprove: HashMap.HashMap<TokenId, Principal> = HashMap.fromIter(tokenIdToApproveTmp.vals(), 0, Nat.equal, Hash.hash);
    private let addressApproveAll: HashMap.HashMap<Principal, [Principal]> = HashMap.fromIter(addressApproveAllTmp.vals(), 0, Principal.equal, Principal.hash);

    public query func getName(): async Text {
        return name;
    };

    public query func getSymbol(): async Text {
        return symbol;
    };

    public query func getOwnerCanister(): async Principal {
        return owner;
    };
    public query func balanceOf(address: Principal): async Etc.BalanceResult {
        switch(balances.get(address)) {
            case(null) return #Ok(0);
            case(?balance) return #Ok(balance);
        };
    };

    public query func ownerOf(tokenId: TokenId) : async ?Principal {
       return _ownerOf(tokenId);
    };

    public query func getTokenInfo(tokenId: TokenId): async ?Etc.metadata {
        return tokenIdToMetadata.get(tokenId);
    };

    public shared(msg) func approve(tokenId: TokenId, to: Principal) : async () {
        switch(tokenIdToOwner.get(tokenId)) {
            case (null) {throw Error.reject("No Owner of token")};
            case (?owner) {
                assert owner == msg.caller;
                assert owner != to;
                assert not _isApprovedForAll(owner, to);
                _approve(tokenId, to);
            };
        };
    };

    public shared(msg) func setApprovalForAll(to: Principal, isApprove: Bool) : async () {
        assert msg.caller != to;

        switch(isApprove) {
            case true {
                switch(addressApproveAll.get(msg.caller)) {
                    case (null) {
                        addressApproveAll.put(msg.caller, [to]);
                    };
                    case (?list) {
                        var arr = Array.filter<Principal>(list, func (a) { a != to});
                        arr := Array.append<Principal>(arr, [to]);
                        addressApproveAll.put(msg.caller, arr);
                    }; 
                };
            };
            case false {
                switch(addressApproveAll.get(msg.caller)) {
                    case (null) {
                        addressApproveAll.put(msg.caller, []);
                    };
                    case (?list) {
                        var arr = Array.filter<Principal>(list, func (a) { a != to});
                        addressApproveAll.put(msg.caller, arr);
                    }; 
                };
            };
        };
    };

    public query func getApproved(tokenId: TokenId): async Principal {
        switch(tokenIdToApprove.get(tokenId)) {
            case (null) {throw Error.reject("Token has not approve yet")};
            case (?to) {return to}
        }
    };

    public query func isApprovedForAll(owner: Principal, to: Principal): async Bool {
        return _isApprovedForAll(owner, to);
    };

    public shared(msg) func transfer(tokenId: TokenId, to: Principal): async Etc.TxReceipt {
       _transfer(msg.caller, to, tokenId);
       return #Ok(true);
    };

    public shared(msg) func transferFrom(from : Principal, to : Principal, tokenId : Nat) : async () {
		assert _isApprovedOrOwner(msg.caller, tokenId);
		
		_transfer(from, to, tokenId);
	};

    public shared(msg) func mint(metadata: Etc.metadata) : async Etc.MintResult {
		TokenCounter += 1;
		_mint(msg.caller, TokenCounter, metadata);
		return #Ok(TokenCounter);
	};

    //Internal

    private func _isApprovedForAll(owner: Principal, to: Principal): Bool {
        switch(addressApproveAll.get(owner)) {
            case(null) return false;
            case (?list) {
                for (p in list.vals()) {
                    if (p == to) {
                        return true;
                    };
                };
                return false;
            };
        };
    };

    private func _approve(tokenId: TokenId, to: Principal) : () {
        tokenIdToApprove.put(tokenId, to);
    };

    private func _ownerOf(tokenId: TokenId) : ?Principal {
        return tokenIdToOwner.get(tokenId);
    };

    private func _isOwnerOf(tokenId: TokenId, _owner: Principal): Bool {
        switch(tokenIdToOwner.get(tokenId)) {
            case(null) return false;
            case(?owner){ if(owner == _owner) {
                return true
            }else{
                return false;
            };
        };
        };
    };

    private func _transfer(from : Principal, to : Principal, tokenId : Nat) : () {
		assert _exists(tokenId);
		assert _isOwnerOf(tokenId, from);
		
		_removeApprove(tokenId);
		
		_decrementBalance(from);
		_incrementBalance(to);
		tokenIdToOwner.put(tokenId, to);
	};

    private func _exists(tokenId : Nat) : Bool {
		return Option.isSome(tokenIdToMetadata.get(tokenId));
	};

    private func _incrementBalance(address : Principal) {
		switch (balances.get(address)) {
			case (?v) {
				balances.put(address, v + 1);
			};
			case null {
				balances.put(address, 1);
			}
		}
	};
	
	private func _decrementBalance(address : Principal) {
		switch (balances.get(address)) {
			case (?v) {
				balances.put(address, v - 1);
			};
			case null {
				balances.put(address, 0);
			}
		}
	};

    private func _removeApprove(tokenId : Nat) : () {
		ignore tokenIdToApprove.remove(tokenId);
	};

    private func _isApprovedOrOwner(spender : Principal, tokenId : Nat) : Bool {
		assert _exists(tokenId);
		let owner = _unwrap(_ownerOf(tokenId));
		return spender == owner or _hasApprovedAndSame(tokenId, spender) or _isApprovedForAll(owner, spender);
	};

    private func _hasApprovedAndSame(tokenId : Nat, spender : Principal) : Bool {
		switch(_getApproved(tokenId)) {
			case (?v) {
				return v == spender;
			};
			case null { return false }
		}
	};

    private func _getApproved(tokenId : Nat) : ?Principal {
		assert _exists(tokenId) == true;
		switch(tokenIdToApprove.get(tokenId)) {
			case (?v) { return ?v };
			case null {
				return null;
			};
		}
	};

    private func _mint(to : Principal, tokenId : Nat, metadata : Etc.metadata) : () {
		assert not _exists(tokenId);
		
		_incrementBalance(to);
		tokenIdToOwner.put(tokenId, to);
		tokenIdToMetadata.put(tokenId,metadata)
	};

    private func _unwrap<T>(x : ?T) : T {
		switch x {
			case null { P.unreachable() };
			case (?x_) { x_ };
		}
	};

    private func _burn(tokenId : Nat) {
		let owner = _unwrap(_ownerOf(tokenId));
		
		_removeApprove(tokenId);
		_decrementBalance(owner);
		
		ignore tokenIdToOwner.remove(tokenId);
	};
	
	system func preupgrade() {
		tokenIdToMetadataTmp := Iter.toArray(tokenIdToMetadata.entries());
		tokenIdToOwnerTmp := Iter.toArray(tokenIdToOwner.entries());
		balancesTmp := Iter.toArray(balances.entries());
		tokenIdToApproveTmp := Iter.toArray(tokenIdToApprove.entries());
		addressApproveAllTmp := Iter.toArray(addressApproveAll.entries());
	};
	
	system func postupgrade() {
		tokenIdToMetadataTmp := [];
		tokenIdToOwnerTmp := [];
		balancesTmp := [];
		tokenIdToApproveTmp := [];
		addressApproveAllTmp := [];
	};
}