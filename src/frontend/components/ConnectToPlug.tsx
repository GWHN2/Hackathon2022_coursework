import { PrincipalClass } from "@dfinity/candid/lib/cjs/idl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { canisterId } from "../../declarations/hello";
import logo from "../../public/images/plug.png";
import { ConnectedPlugState, SessionDataState } from "../data/globalState";
import { SessionData } from "../data/type";
import { host, makeHelloActor } from "../service/actor-locator";
import { shortenAddress } from "../utils/stringsFunction";

const ConnectToPlug = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [sessionData, setSessionData] =
    useRecoilState<SessionData>(SessionDataState);
  const [balance, setBalance] = useState("");
  const helloActor = makeHelloActor();

  useEffect(() => {
    (async () => {
      try {
        const result = await window.ic.plug.isConnected();
        setIsConnected(result);
        if (result) {
          const sessionData: SessionData =
            window.ic.plug.sessionManager.sessionData;
          setSessionData(sessionData);
        }
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await window.ic.plug.requestBalance();
        setBalance(result);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [sessionData?.principalId]);

  console.log("balance", balance);

  const handleClick = async () => {
    try {
      if (!isConnected) {
        const whitelist = [canisterId];
        const onConnectionUpdate = async () => {};
        const publicKey = await window.ic.plug.requestConnect({
          whitelist,
          host,
          onConnectionUpdate,
          timeout: 50000,
        });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div
      className="p-1 cursor-pointer rounded-xl plug-gradient"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="p-1 font-semibold bg-white rounded-lg">
        {isConnected ? (
          <span>{shortenAddress(sessionData?.accountId || "", 10)}</span>
        ) : (
          <div className="flex flex-row items-center">
            <div className="relative w-6 h-6">
              <Image
                src={logo}
                alt="plug logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Connect to Plug
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectToPlug;
