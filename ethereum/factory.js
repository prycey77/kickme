import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance =
 new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //process.env.ADDRESS
   "0x460b347cD5Fb86EA96B16FECa0562A8420ab8FeE"
);

export default instance
