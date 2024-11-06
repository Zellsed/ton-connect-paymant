import { useTonAddress } from "@tonconnect/ui-react";

export const Addressinfo = () => {
  const address = useTonAddress();
  const rawAddress = useTonAddress(false);

  if (!address) {
    return null;
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>Address: {address}</div>
      <br />
      <div>Raw Address: {rawAddress}</div>
    </div>
  );
};
