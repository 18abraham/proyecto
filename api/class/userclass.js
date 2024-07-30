//iniciar secion
//obtener info del usuario
//cerrar secion
//registrar el usuario
//pedir prestamo
//borrar cuenta
//actualizar
//crear transacciones

import userModel from "../models/AccountModel.js";
import MAnagerAccount from"./account class.js";
import ManagerCard from "./cardclass.js";
class Manageruser {
    constructor(email, phone, name, lastname, isInSession, isAdmin, paswor) {
        this.email = email,
            this.phone = phone,
            this.name = name,
            this.lastname = lastname,
            this.isInSession = isInSession,
            this.isAdmin = isAdmin,
            this.paswor = paswor;
    }

    async registrer(){
        try {
        const user = await UserModel.creat ({
            email: this.email,
            phone: this.phone,
            name: this.name,
            lastaName: this.lastaName,
            isInSesion: this.isInSesion,
            isAdmin: this.isAdmin,
            password: this.password,
        })
        const Ma = new ManagerAccount (user._id, 12345, "Ahorro", 10000)
        const currentAccount = await MA.currentAccount();
        const MC = new ManagerCard(user._id,currentAccount._id,"16digitos al azar","debito","de la fecha actual sumar 3 años",
            "generar codigo de 3 cifras","active");
            awaitMC.createCard();
            return user;
        } catch (error) {
            throw new error(`error al registrar usuario: ${error}`);
        }
    }

    async Login(email,password){
        try {
            const user = await UserModel.findOne({email: email});
            if(!user){
                throw new Error("usuario no registrado!")
            }
            if(user.password !== password){
                throw new Error("contraseña incorrecta!")
            }
            return "succeeded";
        } catch (error) {
            throw new error(`error al iniciar secion: ${error}`);
        }
    }

    async getUserInfo(id){
        try {
            const user = await UserModel.findById(id);
        } catch (error) {
            throw new error(`error al obtener informacion del usuario: ${error}`);
        }
    }
    async updateEmail(id,email, ) {
        try{
            if(!email) {
                throw new Error("correro invalido");
            }
            await userModel.findByIdAndUpdate(id,{
                $set:{email:email}
            });
            return"ok"
        }catch (error) {
            throw new error(`error al actualizar el correro: ${error}`);
        }

    }
    async updatePhone(id,phone, ) {
        try{
            if(!this.phone) {
                throw new Error("numero invalido");
            }
            await userModel.findByIdAndUpdate(id,{
                $set:{phone}
            });
            return"ok"
        }catch (error) {
            throw new error(`error al actualizar el numero: ${error}`);
        }
    }


    async updatePasword(id,pasword, ) {
        try{
            if(!password) {
                throw new Error("pasword invalida");
            }
            await userModel.findByIdAndUpdate(id,{
                $set:{password}
            });
            return"ok"
        }catch (error) {
            throw new error(`error al actualizar la contraseña: ${error}`);
        }
    }

    //pendiente eliminar usuario
}

export default Manageruser;