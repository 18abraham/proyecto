//crear una tarjeta
//obtener una tarjeta 
//obtener tarjetas
import cardModel from "../models/CardModel.js";
class ManagerCard {
    constructor(userid, account, cardNumber, cardType, expirationDate, securitiCode, status) {
        this.userid = userid,
            this.account = account,
            this.cardNumber = cardNumber,
            this.cardType = cardType,
            this.expirationDate = expirationDate,
            this.securitiCode = securitiCode,
            this.status = status;
    }
    async createCard() {
        try {
             await cardModel.create({
              userid: this.userid,
              account: this.account,
              cardNumber: this.cardNumber,
              cardType: this.cardType,
              expirationDate: this.expirationDate,
              securitiCode: this.securitiCode,
              status: this.status,
        });
        return"ok";
    } catch (error) {
        throw new Error(`error al obtener tarjeta: ${error}`);
    }
   }
   async getCards(){
    try {
        const account = await cardModel.findById(id);
        return account;
    } catch (error) {
        throw new Error(`error al obtener cuenta: ${error}`);
    }
   }

   async getCard(id){
    try {
        const accounts = await cardModel.find();
    } catch (error) {
        throw new Error(`error al obtener cuenta: ${error}`);
    }
}

}
export default ManagerCard;

