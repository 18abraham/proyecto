//solicitar
//pagar
//mostrar prestamo
//validar usuario

import LoanModel from "../models/LoanModel.js";
import Payment from "../models/PaymentModel.js";
import Paymentmodel from"../models/PaymentModel.js";
class LoanManager{
    constructor(
        userId,
        loanType,
        amount,
        interestRate,
        numberPayments,
        startDate,
        endDate,
        status
     ) {
        this.userId = userId,
        this.loanType = loanType,
        this.amount = amount,
        this.interestRate = interestRate,
        this.numberPayments = numberPayments,
        this.startDate = startDate,
        this.endDate = endDate,
        this.status = status
    }
    async createLoan(){
        try {
            const Loan = await LoanModel.create({
                userId: this.userId,
                loanType: this.loanType,
                amount: this.amount,
                interestRate: this.interestRate,
                numberPayments: this.numberPayments,
                startDate: this.startDate,
                endDate: this.endDate,
                status: this.status,
            });
            return Loan;
        } catch (error) {
            throw new Error(`no se pudo crear el prestamo ${error}`);
        }
    }

    async payLoan(userId,loanType,amount,interestRate,numberPayments) {
        try {
            const payament = await payamentModel1.create({
                userId,
                loanId,
                amount,
                numberPayments
            });
            return Payment;
        } catch (error) {
            throw new Error(`hubo un error ${error}`);
        }
    }

    async getLoan(id){
        try {
            const loan = await LoanModel.find(Id);
            return loan;
        } catch (error) {
            throw new Error(`hubo un error ${error}`);
        }
    }
    


    async getLoans(){
        try {
            const loans = await LoanModel.find();
            return loans;
        } catch (error) {
            throw new Error(`hubo un error ${error}`);
        }
    }

    async validateUser(){
        //El usuario debe tener al menos 3 días en la plataforma
        //Haber hecho 2 transacciones Y mantener un saldo superior a 5000
    }

}    
