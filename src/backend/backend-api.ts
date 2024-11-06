class BackendApi {
  MAINNET_API_BASE: string = "https://toncenter.com/api/v2/";
  TESTNET_API_BASE: string = "https://testnet.toncenter.com/api/v2/";

  async getTransaction(address: string) {
    const response = await fetch(
      `${this.TESTNET_API_BASE}getTransactions?address=${address}&limit=1&archival=true`,
      {
        method: "GET",
      }
    );

    const transactionData = await response.json();

    const addressSender = transactionData.result[0].address.account_address;
    const addressTo = transactionData.result[0].out_msgs[0].destination;
    const transactionHash = transactionData.result[0].transaction_id.hash;
    const transactionLt = transactionData.result[0].transaction_id.lt;
    const value = transactionData.result[0].out_msgs[0].value;
    const message = transactionData.result[0].out_msgs[0].message;

    return {
      addressSender,
      addressTo,
      transactionHash,
      transactionLt,
      value,
      message,
    };
  }

  async getAddress(address: string) {
    const response = await fetch(
      `${this.TESTNET_API_BASE}unpackAddress?address=${address}`,
      {
        method: "GET",
      }
    );

    const transactionData = await response.json();

    return transactionData.result;
  }
}

export const backendApi = new BackendApi();
