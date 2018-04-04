import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x90491EcDd50Fac83218B34DBd6efb228420c429A'
);

export default instance;
