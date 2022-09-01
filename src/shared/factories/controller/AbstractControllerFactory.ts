import { IController } from "./IController";


export interface IAbstractControllerFactory {
    getIndexController(): IController;
    getCreateController(): IController;
    getUpdateController(): IController;
    getDeleteController(): IController;
}