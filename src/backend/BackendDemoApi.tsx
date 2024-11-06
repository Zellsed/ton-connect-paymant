import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { backendApi } from "./backend-api";
import { useState } from "react";
import "./backend.css";

interface TransactionData {
  addressSender: string | null;
  addressTo: string | null;
  RawAddressTo: string | null;
  transactionHash: string | null;
  transactionLt: string | null;
  value: string | null;
  message: string | null;
}

export const BackendDemoApi = () => {
  const wallet = useTonWallet();
  const rawAddress = useTonAddress(false);
  const addressWallet = wallet?.account?.address;

  const [data, setData] = useState<TransactionData | null>(null);
  const [sender, setSender] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [addressTo, setAddressTo] = useState<string | null>(null);
  const [transH, setTransH] = useState<string | null>(null);
  const [transL, setTransL] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [mess, setMess] = useState<string | null>(null);

  const handleTransactionClick = async () => {
    if (data) {
      setData(null);
    } else if (addressWallet) {
      const transaction = await backendApi.getTransaction(addressWallet);

      const addressSender = await transaction?.addressSender;
      setSender(addressSender);

      const addressTo = await transaction?.addressTo;
      setTo(addressTo);

      const RawAddressTo = await backendApi.getAddress(addressTo);
      setAddressTo(RawAddressTo);

      const transactionHash = await transaction?.transactionHash;
      setTransH(transactionHash);

      const transactionLt = await transaction?.transactionLt;
      setTransL(transactionLt);

      const value = await transaction?.value;
      setValue(value);

      const message = await transaction?.message;
      setMess(message);

      const data: TransactionData = {
        addressSender,
        addressTo,
        RawAddressTo,
        transactionHash,
        transactionLt,
        value,
        message,
      };
      setData(data);
    } else {
      console.warn("Wallet address is not available.");
    }
  };

  return (
    <div>
      <button onClick={handleTransactionClick}>Transaction</button>
      {data && (
        <pre className="type">
          <strong>Address Sender: </strong>
          {sender}
          <br />
          <br />
          <strong>Raw Address Sender: </strong>
          {rawAddress}
          <br />
          <br />
          <strong>Address To: </strong>
          {to}
          <br />
          <br />
          <strong>Raw Address To: </strong>
          {addressTo}
          <br />
          <br />
          <strong>Transaction Hash: </strong>
          {transH}
          <br />
          <br />
          <strong>Transaction Lt: </strong>
          {transL}
          <br />
          <br />
          <strong>Value: </strong>
          {value}
          <br />
          <br />
          <strong>Message: </strong>
          {mess}
        </pre>
      )}
    </div>
  );
};
