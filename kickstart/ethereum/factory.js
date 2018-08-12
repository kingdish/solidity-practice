import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0E2BF5AA9a0F1A02833899AC0cf504472aaaEBc8' //address of the CampaignFactory
);

export default instance;
