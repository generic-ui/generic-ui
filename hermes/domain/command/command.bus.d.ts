import { Observable, Operator, Subject } from 'rxjs';
import { Command } from './command';
import { CommandHandler } from './command.handler';
export declare class CommandBus<C = Command> extends Observable<C> {
    constructor(commandsStream?: Subject<Command>);
    lift<R>(operator: Operator<C, R>): Observable<R>;
    ofCommand<C2 extends C>(...commandTypes: Array<string>): any;
    ofHandler<C2 extends C>(...handlers: Array<CommandHandler>): any;
    ofNullHandler<C2 extends C>(handlers: Array<CommandHandler>): any;
}
