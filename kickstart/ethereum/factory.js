import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4FA6a007d09A337CF8a80484032CA6290c9Dd180' //address of the CampaignFactory
);

export default instance;
