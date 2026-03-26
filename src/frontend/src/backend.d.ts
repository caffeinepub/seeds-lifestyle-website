import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    clearAllMessages(): Promise<void>;
    deleteMessage(id: bigint): Promise<void>;
    getAllMessages(): Promise<Array<Message>>;
    getMessageById(id: bigint): Promise<Message>;
    getMessagesCount(): Promise<bigint>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
