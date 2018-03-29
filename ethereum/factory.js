import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x86c0963866F906e8B7A0fAD77A1edeA4205Cb726'
);

export default instance;
