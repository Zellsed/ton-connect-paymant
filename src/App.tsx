// import { TonConnectButton } from "@tonconnect/ui-react";
// import { Addressinfo } from "./Addressinfo";
// import { Walletinfo } from "./Walletinfo";
// import { SendTx } from "./SendTx";
// import { BackendDemoApi } from "./backend/BackendDemoApi";

// function App() {
//   return (
//     <div>
//       <div style={{ color: "white" }}>
//         <header
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <h2 style={{ margin: 0 }}>My Dapp</h2>
//           <TonConnectButton />
//         </header>
//         <div style={{ height: "140px" }}>
//           <Addressinfo />
//           <Walletinfo />
//         </div>
//         <SendTx />
//       </div>
//       <BackendDemoApi />
//     </div>
//   );
// }

// export default App;

import { TonConnectButton } from "@tonconnect/ui-react";
import { Addressinfo } from "./Addressinfo";
import { Walletinfo } from "./Walletinfo";
import { SendTx } from "./SendTx";
import { BackendDemoApi } from "./backend/BackendDemoApi";

function App() {
  return (
    <div>
      <div style={{ color: "white" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0 }}>My Dapp</h2>
          <TonConnectButton />
        </header>
        <div
          style={{
            height: "260px",
            maxWidth: "500px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <Addressinfo />
          <Walletinfo />
        </div>
        <br />
        <SendTx />
      </div>
      <BackendDemoApi />
    </div>
  );
}

export default App;
