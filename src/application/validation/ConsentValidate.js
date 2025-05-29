import Consent from '../model/Consent.js';
class ConsentValidae{
    async existsConsent(account_id){
        const consent = await Consent.findOne({where: {
            account_id
        }})

        return !consent ? false : true; 
    }

    async isValid(account_id){
        const { authorization } = await Consent.findOne({where: {
            account_id
        }});

        return authorization;
    }
}

export default new ConsentValidae();