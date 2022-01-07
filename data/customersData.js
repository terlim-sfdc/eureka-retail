// Sample Customer Data
// This is no longer in used as it is connected to live API data from Salesforce.

const customersData = [
  {
    id: 1,
    name__c: "Amanda Raines",
    phone__c: "83992742",
    email_cc: "araines@gmail.com",
    address__c: "11 Leonie Hill #12-03, Singapore 239488",
    joindate__c: "11 May 2019",
    membership__c: "gold",
    totalspent__c: "8583.50",
    recommendedItems: [
      {
        id: 1,
        title: "Chain Strap Heeled Sandals - Black",
        source: require("../assets/images/products/ChainStrapHeeledSandals.png"),
        probability: 92,
      },
      {
        id: 2,
        title: "Snap Button Mini Short Wallet",
        source: require("../assets/images/products/SnapButtonMiniShortWallet.png"),
        probability: 73,
      },
      {
        id: 3,
        title: "Metallic Accent Millee Flats",
        source: require("../assets/images/products/MetallicAccentMilleFlats.png"),
        probability: 65,
      },
    ],
  },
  {
    id: 2,
    name__c: "Terence Lim",
    phone__c: "91234501",
    email__c: "terencelim@outlook.com",
    address__c: "11 Leonie Hill #12-03, Singapore 239488",
    joindate__c: "11 Jan 2010",
    membership__c: "silver",
    totalspent__c: "853.50",
    recommendedItems: [
      {
        id: 1,
        title: "Chain Strap Heeled Sandals - Black",
        source: require("../assets/images/products/ChainStrapHeeledSandals.png"),
        probability: 92,
      },
      {
        id: 2,
        title: "Snap Button Mini Short Wallet",
        source: require("../assets/images/products/SnapButtonMiniShortWallet.png"),
        probability: 73,
      },
      {
        id: 3,
        title: "Metallic Accent Millee Flats",
        source: require("../assets/images/products/MetallicAccentMilleFlats.png"),
        probability: 65,
      },
    ],
  },
  {
    id: 3,
    name__c: "Ji Soo Kim",
    phone__c: "83293002",
    email__c: "jisoo@gmail.com",
    address__c: "11 Leonie Hill #12-03, Singapore 239488",
    joindate__c: "11 Jan 2010",
    membership__c: "bronze",
    totalspent__c: "853.50",
    recommendedItems: [
      {
        id: 1,
        title: "Chain Strap Heeled Sandals - Black",
        source: require("../assets/images/products/ChainStrapHeeledSandals.png"),
        probability: 92,
      },
      {
        id: 2,
        title: "Snap Button Mini Short Wallet",
        source: require("../assets/images/products/SnapButtonMiniShortWallet.png"),
        probability: 73,
      },
      {
        id: 3,
        title: "Metallic Accent Millee Flats",
        source: require("../assets/images/products/MetallicAccentMilleFlats.png"),
        probability: 65,
      },
    ],
  },
  {
    id: 4,
    name__c: "Ian Douglas",
    phone__c: "93293232",
    email__c: "iandouglas@salesforce.com",
    address__c: "20 Seald Road, Singapore 239488",
    joindate__c: "11 Jan 2013",
    membership__c: "gold",
    totalspent__c: "1823.30",
    recommendedItems: [
      {
        id: 1,
        title: "Chain Strap Heeled Sandals - Black",
        source: require("../assets/images/products/ChainStrapHeeledSandals.png"),
        probability: 92,
      },
      {
        id: 2,
        title: "Snap Button Mini Short Wallet",
        source: require("../assets/images/products/SnapButtonMiniShortWallet.png"),
        probability: 73,
      },
      {
        id: 3,
        title: "Metallic Accent Millee Flats",
        source: require("../assets/images/products/MetallicAccentMilleFlats.png"),
        probability: 65,
      },
    ],
  },
];

export default customersData;
