
export interface IUseCase<T> {
    execute(data?: object): Promise<T | T[] | object | void>
}