//movimiento de dinero(crear transaccion)
//obtener transacciones 
//obtener transacciones por usuario

import TransactionModel1 from "../models/TransactionModel.js";

class ManagerTransaction {
    constructor(accountfromid, accountToid, type, amount, description) {
        this.accountfromid = accountfromid,
        this.accountToid = accountToid,
        this.type = type,
        this.amount = amount,
        this.description = description;
    }

    async createTransaction(){
        try {
            const transaction =  TransactionModel1.create({
                accountFromId: this.accountFromId,
                accountToId: this.accountToid,
                type: this.type,
                amount: this.amount,
                description: this.description
            })
        } catch (error) {
            throw new error(`error al crear transaccion: ${error}`);
        }
    }

    async getTransaction(id){
        try {
            const transaction = await TransactionModel1.findByiD(id);
            return transaction;
        } catch (error) {
            throw new error(`error al obtener la transaccion: ${error}`);
        }

    }

    async getTransactions(){
        try {
            const transactions = await TransactionModel1.findByiD();
            return transactions;
        } catch (error) {
            throw new error(`error al obtener la transacciones: ${error}`);
        }
    }


    async getAccountTransactions(id){
        try {
            const transactions = await TransactionModel1.findByiD(id);
            return transactions;
        } catch (error) {
            throw new error(`error al obtener la transacciones: ${error}`);
        }
    }
}

export default ManagerTransaction;