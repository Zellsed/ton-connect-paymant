import { useTonWallet } from "@tonconnect/ui-react";

interface TonWallet {
  imageUrl: string;
  name: string;
}

export const Walletinfo = () => {
  const wallet = useTonWallet();

  if (!wallet || !("imageUrl" in wallet) || !("name" in wallet)) {
    return null;
  }

  const typedWallet = wallet as TonWallet;

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <img src={typedWallet.imageUrl} height="30px" width="30px" />
      {typedWallet.name}
    </div>
  );
};
