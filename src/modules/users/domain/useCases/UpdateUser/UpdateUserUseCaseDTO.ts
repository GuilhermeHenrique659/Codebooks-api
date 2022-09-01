

export interface IUpdateUserUseCaseDTO {
    id: string;
    name: string;
    email: string;
    password: string;
    passwordToConfirm: string;
    avatar: string;
    age: Date
    city: string;
    state: string;
}