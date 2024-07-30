//obtener cuenta
//obtener balance
//editar balance
//agregar balance
//restar balance
//crear cuenta
import AccountModel from "../models/AccountModel.js"
class ManagerAccount{
    constructor(idusuario,accountNumber,accountType,balance){
        this.idusuario = idusuario;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance =  balance;
    }

    async getAccounts(){
        try {
            const accounts = await AccountModel.find();
        } catch (error) {
            throw new Error(`error al obtener cuenta: ${error}`);
        }
   }

   async getAccounts(id){
    try {
        const account = await AccountModel.findById(id);
        return account;
    } catch (error) {
        throw new Error(`error al obtener cuenta: ${error}`);
    }
   }

   async addbalance(id, amount){
    try {
        this.balance += amount;
        await AccountModel.findByIdAndUpdate(id,{
            $set:{
                balance:this.balance 
            }
        })
        return "ok";
    } catch (error) {
        throw new error(`error al agregar monto: ${error}`);
    }
   }

   async restBalance(id, amount){
    try {
        this.balance -= amount;
        await AccountModel.findByIdAndUpdate(id,{
            $set:{
                balance:this.balance 
            }
        })
        return "ok";
    } catch (error) {
        throw new error(`error al agregar monto: ${error}`);
    }
   }
   async creatAccount(){
    try {
        const account = await AccountModel.create({
            userId:this.userId,
            accountNumber:this.accountNumber,
            accountType:this.accountType,
            balance:this.balance,
        })
        return "ok";
    } catch (error) {
        throw new error(`error al crear monto: ${error}`);
    }
   }
}

export default ManagerAccount;