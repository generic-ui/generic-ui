import { Observable, Operator, Subject } from 'rxjs';
import { Command } from './command';
import { Aggregate } from './aggregate/aggregate';
import { AggregateCommandHandlerImpl } from './create-handler/aggregate-command-handler.impl';
import { CommandHandlerImpl } from './handler/command-handler-impl';
export declare class CommandBus<C = Command> extends Observable<C> {
    constructor(commandsStream?: Subject<Command>);
    lift<R>(operator: Operator<C, R>): Observable<R>;
    ofCommand<C2 extends C>(...commandTypes: Array<string>): any;
    ofCommandHandler<C2 extends C>(...handlers: Array<CommandHandlerImpl<Aggregate, Command>>): any;
    ofCreateAggregateHandler<C2 extends C>(...handlers: Array<AggregateCommandHandlerImpl<Aggregate, Command>>): any;
    ofNullHandler<C2 extends C>(handlers: Array<CommandHandlerImpl<Aggregate, Command>>, aggregateCommandHandlers: Array<AggregateCommandHandlerImpl<Aggregate, Command>>): any;
}
