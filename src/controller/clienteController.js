class ClienteController {
    async cadastro(req,res){

        try{
            res.send('To aqui')
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = ClienteController;