import { IUseCase } from "./IUseCase";

export interface IAbstractUseCaseFactory<T> {
    getIndexUseCase(): IUseCase<T>;
    getCreateUseCase(): IUseCase<T>;
    getDeleteUseCase(): IUseCase<T>;
    getUpdateUseCase(): IUseCase<T>;
}