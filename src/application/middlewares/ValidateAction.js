class ValidateAction{
    async checkAction(req, res, next){
        const { action } = req.params;

        if(action === 'update' || action === 'revoke'){
            return next();
        }

        return res.status(400).json('action not exists');
    }
}

export default new ValidateAction();
