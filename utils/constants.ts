import NFTAbi from "./NFTabi.json";
import { NFTMetaData } from "./interfaces";
export const abi = NFTAbi.abi;

export const zoraCommissonID: string =
  "0x84b254Eab8E9B78c6d3e6AB0b051B06D248Fe42E";
export const baseCommissonID: string =
  "0xeB9561570D5912378f918915799E38de5aE99CE1 ";
export const lineaCommissonID: string =
  "0x8534c2373B035A940BdCc60860b03D433E435fA8";

export function truncateWalletAddress(
  walletAddress: any,
  startLength = 6,
  endLength = 4
) {
  // Validate input
  if (
    typeof walletAddress !== "string" ||
    walletAddress.length < startLength + endLength
  ) {
    console.error("Invalid wallet address or length parameters");
    return walletAddress + "Chain" + chainId;
  }

  // Truncate and add ellipsis
  const truncatedStart = walletAddress.slice(0, startLength);
  const truncatedEnd = walletAddress.slice(-endLength);

  return `${truncatedStart}...${truncatedEnd}`;
}

export const baseNFTData: NFTMetaData[] = [
  {
    id: 1,
    name: "Boost on Base #1",
    img: require("../assets/nftAssets/base_01.jpg"),
    price: 0.00001,
    address: "0xaD82dc1dF94Bebbd2be99957bb426eFB658e19Ba",
  },
  {
    id: 2,
    name: "Boost on Base #2",
    img: require("../assets/nftAssets/base_02.jpg"),
    price: 0.00001,
    address: "0x500A816FF98bf398920A0b953db2faeAFF6803e1",
  },
  {
    id: 3,
    name: "Boost on Base #3",
    img: require("../assets/nftAssets/base_03.jpg"),
    price: 0.00001,
    address: "0xA6165510b2C65E701Abf7A0B97671ba030cC9114",
  },
  {
    id: 4,
    name: "Boost on Base #4",
    img: require("../assets/nftAssets/base_04.jpg"),
    price: 0.00001,
    address: "0xFf985EdEB7Df4143393fd18F8F84fB8a2D3bb0DF",
  },
  {
    id: 5,
    name: "Boost on Base #5",
    img: require("../assets/nftAssets/base_05.jpg"),
    price: 0.00001,
    address: "0x8a84F709DE780409687ba9Bc1dcC5FbFf7Bb33DA",
  },
  {
    id: 6,
    name: "Boost on Base #6",
    img: require("../assets/nftAssets/base_06.jpg"),
    price: 0.00001,
    address: "0x292971475E31FF76202a0BBADCc37257989230E0",
  },
  {
    id: 7,
    name: "Boost on Base #7",
    img: require("../assets/nftAssets/base_07.jpg"),
    price: 0.00001,
    address: "0x1FaAD79960f94A7bF779595977AfD50513B82B1E",
  },
  {
    id: 8,
    name: "Boost on Base #8",
    img: require("../assets/nftAssets/base_08.jpg"),
    price: 0.00001,
    address: "0xD7e0f7001E31BF88e9a9ef564E5eF11818e03B55",
  },
  {
    id: 9,
    name: "Boost on Base #9",
    img: require("../assets/nftAssets/base_09.jpg"),
    price: 0.00001,
    address: "0xc3AFd9d9f79dE4F838C265f3B85b13d025f6bA75",
  },
  {
    id: 10,
    name: "Boost on Base #10",
    img: require("../assets/nftAssets/base_10.jpg"),
    price: 0.00001,
    address: "0x1d64e9F4aDfc2DBEB9e711e511b5fA6518c42460",
  },
  {
    id: 11,
    name: "Boost on Base #11",
    img: require("../assets/nftAssets/base_11.jpg"),
    price: 0.00001,
    address: "0x0317f26291CB7F1CF1ad92487aA871477f7b9130",
  },
  {
    id: 12,
    name: "Boost on Base #12",
    img: require("../assets/nftAssets/base_12.jpg"),
    price: 0.00001,
    address: "0xA98FeD32c9De96B386b714B3698064fe53a184EB",
  },
  {
    id: 13,
    name: "Boost on Base #13",
    img: require("../assets/nftAssets/base_13.jpg"),
    price: 0.00001,
    address: "0xC8C0E59AB7283BF3E2b123Aa1Ab484431D7a287e",
  },
  {
    id: 14,
    name: "Boost on Base #14",
    img: require("../assets/nftAssets/base_14.jpg"),
    price: 0.00001,
    address: "0x59CB12701e10E50436802B7499f15892d9E2E0B6",
  },
  {
    id: 15,
    name: "Boost on Base #15",
    img: require("../assets/nftAssets/base_15.jpg"),
    price: 0.00001,
    address: "0x94F6FdeF3ec45C53B8805927859376433109072C",
  },
  {
    id: 16,
    name: "Boost on Base #16",
    img: require("../assets/nftAssets/base_16.jpg"),
    price: 0.00001,
    address: "0xD8D83c4E9267C2Af2B3f77Df14Be8be3Dcd5eDBC",
  },
  {
    id: 17,
    name: "Boost on Base #17",
    img: require("../assets/nftAssets/base_17.jpg"),
    price: 0.00001,
    address: "0x3F03B26fE66788985CE8F765eC840fEC7cad1071",
  },
  {
    id: 18,
    name: "Boost on Base #18",
    img: require("../assets/nftAssets/base_18.jpg"),
    price: 0.00001,
    address: "0xB16a4E604EADfA45b0daEd4f3369142C1A86fd83",
  },
  {
    id: 19,
    name: "Boost on Base #19",
    img: require("../assets/nftAssets/base_19.jpg"),
    price: 0.00001,
    address: "0xFc4A1Fd28D030e13A282F5367D46e1885E83913c",
  },
  {
    id: 20,
    name: "Boost on Base #20",
    img: require("../assets/nftAssets/base_20.jpg"),
    price: 0.00001,
    address: "0xfF461bB1b552ce2A5aCBb19F8778C7e117845Fd1",
  },
  {
    id: 21,
    name: "Boost on Base #21",
    img: require("../assets/nftAssets/base_21.jpg"),
    price: 0.00001,
    address: "0x2949a85b845a069c7a7a438da2152b1d93ee9bd2",
  },
  {
    id: 22,
    name: "Boost on Base #22",
    img: require("../assets/nftAssets/base_22.jpg"),
    price: 0.00001,
    address: "0xab5C6459F4E666998805940A24A0B37827C1f5E1",
  },
  {
    id: 23,
    name: "Boost on Base #23",
    img: require("../assets/nftAssets/base_23.jpg"),
    price: 0.00001,
    address: "0x4d8c7917d87583ffb03f9c834815519f1386ddd3",
  },
  {
    id: 24,
    name: "Boost on Base #24",
    img: require("../assets/nftAssets/base_24.jpg"),
    price: 0.00001,
    address: "0x5b12E1F7288A2d3B56C8F7DeFD4B0B41D47ba2c8",
  },
  {
    id: 25,
    name: "Boost on Base #25",
    img: require("../assets/nftAssets/base_25.jpg"),
    price: 0.00001,
    address: "0xF35D6b156aA127CfD44f1D395A41506dA21d7e97",
  },
  {
    id: 26,
    name: "Boost on Base #26",
    img: require("../assets/nftAssets/base_26.jpg"),
    price: 0.00001,
    address: "0xd554FB9F02d6247eE598b28e94E2DD8B6d647A30",
  },
  {
    id: 27,
    name: "Boost on Base #27",
    img: require("../assets/nftAssets/base_27.jpg"),
    price: 0.00001,
    address: "0xb85b8849fafba8bf34470362663be7a869b7331e",
  },
  {
    id: 28,
    name: "Boost on Base #28",
    img: require("../assets/nftAssets/base_28.jpg"),
    price: 0.00001,
    address: "0x3990c31e0956fb6d4a6fd787d98198e83723572c",
  },
  {
    id: 29,
    name: "Boost on Base #29",
    img: require("../assets/nftAssets/base_29.jpg"),
    price: 0.00001,
    address: "0xe68a389b46ff309d3286a040a315887f437fe2f7",
  },
];

export const baseAddresses = [
  "0xaD82dc1dF94Bebbd2be99957bb426eFB658e19Ba",
  "0x500A816FF98bf398920A0b953db2faeAFF6803e1",
  "0xA6165510b2C65E701Abf7A0B97671ba030cC9114",
  "0xFf985EdEB7Df4143393fd18F8F84fB8a2D3bb0DF",
  "0x8a84F709DE780409687ba9Bc1dcC5FbFf7Bb33DA",
  "0x292971475E31FF76202a0BBADCc37257989230E0",
  "0x1FaAD79960f94A7bF779595977AfD50513B82B1E",
  "0xD7e0f7001E31BF88e9a9ef564E5eF11818e03B55",
  "0xc3AFd9d9f79dE4F838C265f3B85b13d025f6bA75",
  "0x1d64e9F4aDfc2DBEB9e711e511b5fA6518c42460",
  "0x0317f26291CB7F1CF1ad92487aA871477f7b9130",
  "0xA98FeD32c9De96B386b714B3698064fe53a184EB",
  "0xC8C0E59AB7283BF3E2b123Aa1Ab484431D7a287e",
  "0x59CB12701e10E50436802B7499f15892d9E2E0B6",
  "0x94F6FdeF3ec45C53B8805927859376433109072C",
  "0xD8D83c4E9267C2Af2B3f77Df14Be8be3Dcd5eDBC",
  "0x3F03B26fE66788985CE8F765eC840fEC7cad1071",
  "0xB16a4E604EADfA45b0daEd4f3369142C1A86fd83",
  "0xFc4A1Fd28D030e13A282F5367D46e1885E83913c",
  "0xfF461bB1b552ce2A5aCBb19F8778C7e117845Fd1",
  "0x2949a85b845a069c7a7a438da2152b1d93ee9bd2",
  "0xab5C6459F4E666998805940A24A0B37827C1f5E1",
  "0x4d8c7917d87583ffb03f9c834815519f1386ddd3",
  "0x5b12E1F7288A2d3B56C8F7DeFD4B0B41D47ba2c8",
  "0xF35D6b156aA127CfD44f1D395A41506dA21d7e97",
  "0xd554FB9F02d6247eE598b28e94E2DD8B6d647A30",
  "0xb85b8849fafba8bf34470362663be7a869b7331e",
  "0x3990c31e0956fb6d4a6fd787d98198e83723572c",
  "0xe68a389b46ff309d3286a040a315887f437fe2f7",
];

export const lineaNFTS: NFTMetaData[] = [
  {
    id: 1,
    name: "Boost on Linea #1",
    img: require("../assets/lineaAssets/BOL_01.jpg"),
    price: 0.00001,
    address: "0x9d33fc8c822d669fff591c8a16585ebf22726a81",
  },
  {
    id: 2,
    name: "Boost on Linea #2",
    img: require("../assets/lineaAssets/BOL_02.jpg"),
    price: 0.00001,
    address: "0xa6cfc974da791ee206d8668063b71d3057197835",
  },
  {
    id: 3,
    name: "Boost on Linea #3",
    img: require("../assets/lineaAssets/BOL_03.jpg"),
    price: 0.00001,
    address: "0x9d5f5c109521b34c43a5c8d97caa62901f0b25cc",
  },
  {
    id: 4,
    name: "Boost on Linea #4",
    img: require("../assets/lineaAssets/BOL_04.jpg"),
    price: 0.00001,
    address: "0xf7693feb35035a12a327db49aa428f16437c40d2",
  },
  {
    id: 5,
    name: "Boost on Linea #5",
    img: require("../assets/lineaAssets/BOL_05.jpg"),
    price: 0.00001,
    address: "0xc05eb6a3fd6f5931aac9f1864fdd80da8ce8b356",
  },
  {
    id: 6,
    name: "Boost on Linea #6",
    img: require("../assets/lineaAssets/BOL_06.jpg"),
    price: 0.00001,
    address: "0xd49861cf3a282b45536007c8e5fc70c4092e0b22",
  },
  {
    id: 7,
    name: "Boost on Linea #7",
    img: require("../assets/lineaAssets/BOL_07.jpg"),
    price: 0.00001,
    address: "0x8dcf54934a684887d09f6c1e4bf876171008f6fc",
  },
  {
    id: 8,
    name: "Boost on Linea #8",
    img: require("../assets/lineaAssets/BOL_08.jpg"),
    price: 0.00001,
    address: "0x071942252caa6aee47866c1ff4c8d8cd97f00f7e",
  },
  {
    id: 9,
    name: "Boost on Linea #9",
    img: require("../assets/lineaAssets/BOL_09.jpg"),
    price: 0.00001,
    address: "0xc223bdfdc85ee7a7a064c52fd3c3b1670e3a07ff",
  },
  {
    id: 10,
    name: "Boost on Linea #10",
    img: require("../assets/lineaAssets/BOL_10.jpg"),
    price: 0.00001,
    address: "0x0d3eaeee79ebadb2bb01f7464f2bbdfa413b7281",
  },
  {
    id: 11,
    name: "Boost on Linea #11",
    img: require("../assets/lineaAssets/BOL_11.jpg"),
    price: 0.00001,
    address: "0x47d292ba2b74beb563846518f1b357dbdee375e7",
  },
  {
    id: 12,
    name: "Boost on Linea #12",
    img: require("../assets/lineaAssets/BOL_12.jpg"),
    price: 0.00001,
    address: "0xd434a204064c7fd31153ce57c5801c3ce5a4c390",
  },
  {
    id: 13,
    name: "Boost on Linea #13",
    img: require("../assets/lineaAssets/BOL_13.jpg"),
    price: 0.00001,
    address: "0xeb4f9b06ab9626684306d9400a05b09ae1b0979a",
  },
  {
    id: 14,
    name: "Boost on Linea #14",
    img: require("../assets/lineaAssets/BOL_14.jpg"),
    price: 0.00001,
    address: "0xe053da9f6efeb74a54cd3bd6dcb36926f317c9e4",
  },
  {
    id: 15,
    name: "Boost on Linea #15",
    img: require("../assets/lineaAssets/BOL_15.jpg"),
    price: 0.00001,
    address: "0xd3c747ccda6992e221a1d5a4eb2f3a2491a8a539",
  },
  {
    id: 16,
    name: "Boost on Linea #16",
    img: require("../assets/lineaAssets/BOL_16.jpg"),
    price: 0.00001,
    address: "0x64d733b4621c68e5f4500ec97cf47ea4cfd5a2ea",
  },
  {
    id: 17,
    name: "Boost on Linea #17",
    img: require("../assets/lineaAssets/BOL_17.jpg"),
    price: 0.00001,
    address: "0xd1a8f80439038aa39077ef41e853fe0a35d56f40",
  },
  {
    id: 18,
    name: "Boost on Linea #18",
    img: require("../assets/lineaAssets/BOL_18.jpg"),
    price: 0.00001,
    address: "0x64a91475f238f759d29443d7e3fb5d041e41c2b0",
  },
  {
    id: 19,
    name: "Boost on Linea #19",
    img: require("../assets/lineaAssets/BOL_19.jpg"),
    price: 0.00001,
    address: "0x308eb0be381a3bbe197044e5457df378ed1eab8a",
  },
  {
    id: 20,
    name: "Boost on Linea #20",
    img: require("../assets/lineaAssets/BOL_20.jpg"),
    price: 0.00001,
    address: "0x8b0067efc81b39be3ce6827b901c30e0e9900a06",
  },
  {
    id: 21,
    name: "Boost on Linea #21",
    img: require("../assets/lineaAssets/BOL_21.jpg"),
    price: 0.00001,
    address: "0xc2dc5f39bbfc07bfdac5ed038fae035de787fb4b",
  },
  {
    id: 22,
    name: "Boost on Linea #22",
    img: require("../assets/lineaAssets/BOL_22.jpg"),
    price: 0.00001,
    address: "0xeb77675b6411349c1f0d8ae87b34418ba71c3539",
  },
  {
    id: 23,
    name: "Boost on Linea #23",
    img: require("../assets/lineaAssets/BOL_23.jpg"),
    price: 0.00001,
    address: "0x816321809b4c08b6d64b94530d7bed02226f20fb",
  },
  {
    id: 24,
    name: "Boost on Linea #24",
    img: require("../assets/lineaAssets/BOL_24.jpg"),
    price: 0.00001,
    address: "0xed098cf73aa0b37c6e10488a4877f956c6a893ff",
  },
  {
    id: 25,
    name: "Boost on Linea #25",
    img: require("../assets/lineaAssets/BOL_25.jpg"),
    price: 0.00001,
    address: "0x44d2318ccc6aea30fb5a9dc4096573acc74bad4d",
  },
  {
    id: 26,
    name: "Boost on Linea #26",
    img: require("../assets/lineaAssets/BOL_26.jpg"),
    price: 0.00001,
    address: "0x09f9c905570f9f1f4047914bdfc4f968a9b09623",
  },
  {
    id: 27,
    name: "Boost on Linea #27",
    img: require("../assets/lineaAssets/BOL_27.jpg"),
    price: 0.00001,
    address: "0x46a9f37cf9a5fa23a620af7525356b586491d138",
  },
  {
    id: 28,
    name: "Boost on Linea #28",
    img: require("../assets/lineaAssets/BOL_28.jpg"),
    price: 0.00001,
    address: "0x59f819d9dd6db6bdc10468d184295d6f0ea5153f",
  },
  {
    id: 29,
    name: "Boost on Linea #29",
    img: require("../assets/lineaAssets/BOL_29.jpg"),
    price: 0.00001,
    address: "0xf33e2c52673a8ec3d1c73e4fa6cd8cd33619b425",
  },
  {
    id: 30,
    name: "Boost on Linea #30",
    img: require("../assets/lineaAssets/BOL_30.jpg"),
    price: 0.00001,
    address: "0x24a9398951e7c5bc2feba3f6066c69b2b3dbfaf4",
  },
];

export const lineaAddresses = [
  "0x9d33fc8c822d669fff591c8a16585ebf22726a81",
  "0xa6cfc974da791ee206d8668063b71d3057197835",
  "0x9d5f5c109521b34c43a5c8d97caa62901f0b25cc",
  "0xf7693feb35035a12a327db49aa428f16437c40d2",
  "0xc05eb6a3fd6f5931aac9f1864fdd80da8ce8b356",
  "0xd49861cf3a282b45536007c8e5fc70c4092e0b22",
  "0x8dcf54934a684887d09f6c1e4bf876171008f6fc",
  "0x071942252caa6aee47866c1ff4c8d8cd97f00f7e",
  "0xc223bdfdc85ee7a7a064c52fd3c3b1670e3a07ff",
  "0x0d3eaeee79ebadb2bb01f7464f2bbdfa413b7281",
  "0x47d292ba2b74beb563846518f1b357dbdee375e7",
  "0xd434a204064c7fd31153ce57c5801c3ce5a4c390",
  "0xeb4f9b06ab9626684306d9400a05b09ae1b0979a",
  "0xe053da9f6efeb74a54cd3bd6dcb36926f317c9e4",
  "0xd3c747ccda6992e221a1d5a4eb2f3a2491a8a539",
  "0x64d733b4621c68e5f4500ec97cf47ea4cfd5a2ea",
  "0xd1a8f80439038aa39077ef41e853fe0a35d56f40",
  "0x64a91475f238f759d29443d7e3fb5d041e41c2b0",
  "0x308eb0be381a3bbe197044e5457df378ed1eab8a",
  "0x8b0067efc81b39be3ce6827b901c30e0e9900a06",
  "0xc2dc5f39bbfc07bfdac5ed038fae035de787fb4b",
  "0xeb77675b6411349c1f0d8ae87b34418ba71c3539",
  "0x816321809b4c08b6d64b94530d7bed02226f20fb",
  "0xed098cf73aa0b37c6e10488a4877f956c6a893ff",
  "0x44d2318ccc6aea30fb5a9dc4096573acc74bad4d",
  "0x09f9c905570f9f1f4047914bdfc4f968a9b09623",
  "0x46a9f37cf9a5fa23a620af7525356b586491d138",
  "0x59f819d9dd6db6bdc10468d184295d6f0ea5153f",
  "0xf33e2c52673a8ec3d1c73e4fa6cd8cd33619b425",
  "0x24a9398951e7c5bc2feba3f6066c69b2b3dbfaf4",
];
export const zoraNFTS: NFTMetaData[] = [
  {
    id: 1,
    name: "Boost on Zora #1",
    img: require("../assets/zksyncAssets/BOZ_01.jpg"),
    price: 0.00001,
    address: "0x64B21F1f2bcEa7a54f9501A3A079D627927605e6",
  },
  {
    id: 2,
    name: "Boost on Zora #2",
    img: require("../assets/zksyncAssets/BOZ_02.jpg"),
    price: 0.00001,
    address: "0x9d33fC8c822d669Fff591C8a16585ebF22726A81",
  },
  {
    id: 3,
    name: "Boost on Zora #3",
    img: require("../assets/zksyncAssets/BOZ_03.jpg"),
    price: 0.00001,
    address: "0xA6CfC974da791Ee206d8668063b71D3057197835",
  },
  {
    id: 4,
    name: "Boost on Zora #4",
    img: require("../assets/zksyncAssets/BOZ_04.jpg"),
    price: 0.00001,
    address: "0x9d5F5c109521b34c43A5C8d97caa62901F0b25Cc",
  },
  {
    id: 5,
    name: "Boost on Zora #5",
    img: require("../assets/zksyncAssets/BOZ_05.jpg"),
    price: 0.00001,
    address: "0xf7693Feb35035a12A327Db49Aa428f16437C40D2",
  },
  {
    id: 6,
    name: "Boost on Zora #6",
    img: require("../assets/zksyncAssets/BOZ_06.jpg"),
    price: 0.00001,
    address: "0xC05Eb6A3Fd6F5931AAc9f1864FDd80da8Ce8b356",
  },
  {
    id: 7,
    name: "Boost on Zora #7",
    img: require("../assets/zksyncAssets/BOZ_07.jpg"),
    price: 0.00001,
    address: "0xd49861CF3A282b45536007c8E5fc70c4092E0B22",
  },
  {
    id: 8,
    name: "Boost on Zora #8",
    img: require("../assets/zksyncAssets/BOZ_08.jpg"),
    price: 0.00001,
    address: "0x8dCF54934A684887d09f6C1E4Bf876171008F6fc",
  },
  {
    id: 9,
    name: "Boost on Zora #9",
    img: require("../assets/zksyncAssets/BOZ_09.jpg"),
    price: 0.00001,
    address: "0x071942252caA6AEE47866c1FF4c8D8Cd97F00f7E",
  },
  {
    id: 10,
    name: "Boost on Zora #10",
    img: require("../assets/zksyncAssets/BOZ_10.jpg"),
    price: 0.00001,
    address: "0xC223bdFDC85Ee7A7a064c52fD3c3b1670E3a07Ff",
  },
  {
    id: 11,
    name: "Boost on Zora #11",
    img: require("../assets/zksyncAssets/BOZ_11.jpg"),
    price: 0.00001,
    address: "0x0D3EaEEe79EbaDb2bb01F7464f2bbDfa413B7281",
  },
  {
    id: 12,
    name: "Boost on Zora #12",
    img: require("../assets/zksyncAssets/BOZ_12.jpg"),
    price: 0.00001,
    address: "0x47d292Ba2b74beb563846518F1B357DBDEE375e7",
  },
  {
    id: 13,
    name: "Boost on Zora #13",
    img: require("../assets/zksyncAssets/BOZ_13.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 14,
    name: "Boost on Zora #14",
    img: require("../assets/zksyncAssets/BOZ_14.jpg"),
    price: 0.00001,
    address: "",
  },

  {
    id: 15,
    name: "Boost on Zora #15",
    img: require("../assets/zksyncAssets/BOZ_15.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 16,
    name: "Boost on Zora #16",
    img: require("../assets/zksyncAssets/BOZ_16.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 17,
    name: "Boost on Zora #17",
    img: require("../assets/zksyncAssets/BOZ_17.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 18,
    name: "Boost on Zora #18",
    img: require("../assets/zksyncAssets/BOZ_18.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 19,
    name: "Boost on Zora #19",
    img: require("../assets/zksyncAssets/BOZ_19.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 20,
    name: "Boost on Zora #20",
    img: require("../assets/zksyncAssets/BOZ_20.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 21,
    name: "Boost on Zora #21",
    img: require("../assets/zksyncAssets/BOZ_21.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 22,
    name: "Boost on Zora #22",
    img: require("../assets/zksyncAssets/BOZ_22.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 23,
    name: "Boost on Zora #23",
    img: require("../assets/zksyncAssets/BOZ_23.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 24,
    name: "Boost on Zora #24",
    img: require("../assets/zksyncAssets/BOZ_24.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 25,
    name: "Boost on Zora #25",
    img: require("../assets/zksyncAssets/BOZ_25.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 26,
    name: "Boost on Zora #26",
    img: require("../assets/zksyncAssets/BOZ_26.jpg"),
    address: "",
    price: 0.00001,
  },
  {
    id: 27,
    name: "Boost on Zora #27",
    img: require("../assets/zksyncAssets/BOZ_27.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 28,
    name: "Boost on Zora #28",
    img: require("../assets/zksyncAssets/BOZ_28.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 29,
    name: "Boost on Zora #29",
    img: require("../assets/zksyncAssets/BOZ_29.jpg"),
    price: 0.00001,
    address: "",
  },
  {
    id: 30,
    name: "Boost on Zora #30",
    img: require("../assets/zksyncAssets/BOZ_30.jpg"),
    address: "",
    price: 0.00001,
  },
];
