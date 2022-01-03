import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance =
 new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //process.env.ADDRESS
   "0x9b503A3bb712C1A8F20c10715B818827f2bA7fdE"
);

export default instance
