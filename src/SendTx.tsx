import {
  useIsConnectionRestored,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useState } from "react";

export const SendTx = () => {
  const isConnectionRestored = useIsConnectionRestored();
  const wallet = useTonWallet();

  const [tonConnectUI] = useTonConnectUI();
  const [txInProgress, setTxInProgress] = useState(false);

  let content: string;

  switch (true) {
    case !isConnectionRestored:
      content = "Loading...";
      break;
    case txInProgress:
      content = "Tx in progress";
      break;
    case !!wallet:
      content = "Send transaction";
      break;
    default:
    case !wallet:
      content = "Connect wallet";
      break;
  }

  const onClick = async () => {
    if (!wallet) {
      tonConnectUI.connectWallet();
    } else {
      setTxInProgress(true);
      try {
        await tonConnectUI.sendTransaction({
          validUntil: Math.floor(Date.now() / 1000) + 360,
          messages: [
            {
              amount: "1000000",
              address: "0QAOyafzfjvXFfqD-VJVXRA8bq7miPpmWSFOI_1qbhKXhrxd",
              //   address:
              //     "0:0ec9a7f37e3bd715fa83f952555d103c6eaee688fa6659214e23fd6a6e129786",
            },
          ],
        });
      } catch (e) {
        console.log(e);
      }
      setTxInProgress(false);
    }
  };

  return (
    <button
      style={{ marginBottom: "20px" }}
      disabled={!isConnectionRestored}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
