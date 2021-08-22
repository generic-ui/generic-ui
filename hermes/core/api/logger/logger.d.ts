import { Message } from '../../domain/message/message';
export declare abstract class Logger<M extends Message<any>> {
    private domainName;
    abstract start(): void;
    abstract stop(): void;
    protected abstract print(message: M): void;
    setDomain(domainName: string): void;
    log(message: M): void;
    protected shouldPrint(message: M): boolean;
}
