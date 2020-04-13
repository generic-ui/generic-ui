import { Observable, Operator, Subject } from 'rxjs';
import { Command } from './command';
import { AggregateRoot } from './aggregate/aggregate-root';
import { CreateAggregateCommandHandlerImpl } from './aggregate/create/create-aggregate.command-handler-impl';
import { CommandHandlerImpl } from './handler/command-handler-impl';
import { AggregateId } from '../aggregate-id';
export declare class CommandBus<C = Command> extends Observable<C> {
    constructor(commandsStream?: Subject<Command>);
    lift<R>(operator: Operator<C, R>): Observable<R>;
    ofCommand<C2 extends C>(...commandTypes: Array<string>): any;
    ofCommandHandler<C2 extends C>(...handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command>>): any;
    ofCreateAggregateHandler<C2 extends C>(...handlers: Array<CreateAggregateCommandHandlerImpl<any, AggregateRoot<AggregateId>, Command>>): any;
    ofNullHandler<C2 extends C>(handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command>>): any;
}
