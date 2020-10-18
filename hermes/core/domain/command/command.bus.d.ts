import { Observable, Operator, Subject } from 'rxjs';
import { Command } from './command';
import { AggregateRoot } from '../tactical/aggregate/aggregate-root';
import { CreateAggregateCommandHandlerImpl } from './create-aggregate/create-aggregate.command-handler-impl';
import { CommandHandlerImpl } from './handler/command-handler-impl';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { CreateAggregateCommand } from './create-aggregate/create-aggregate.command';
export declare class CommandBus<C = Command<AggregateId>> extends Observable<C> {
    constructor(commandsStream?: Subject<C>);
    lift<R>(operator: Operator<C, R>): Observable<R>;
    ofCommand<C2 extends C>(...commandTypes: Array<string>): any;
    ofCommandHandler<C2 extends C>(...handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command<AggregateId>>>): any;
    ofCreateAggregateHandler<C2 extends C>(...handlers: Array<CreateAggregateCommandHandlerImpl<any, AggregateRoot<AggregateId>, CreateAggregateCommand>>): any;
    ofNullHandler<C2 extends C>(handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command<AggregateId>>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, CreateAggregateCommand>>): any;
}
