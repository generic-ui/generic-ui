import { Command } from '../../api/command/command';
import { AggregateRoot } from '../../api/tactical/aggregate/aggregate-root';
import { CreateAggregateCommandHandlerImpl } from './create-aggregate/create-aggregate.command-handler-impl';
import { CommandHandlerImpl } from './handler/command-handler-impl';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
import { CreateAggregateCommand } from './create-aggregate/create-aggregate.command';
import { CommandStream } from './command.stream';
import { HermesSubscription } from '../../../common/stream/core/subscription/hermes.subscription';
import { HermesSubscriber } from '../../../common/stream/core/observable/subscriber/hermes.subscriber';
import { HermesObservable } from '../../../common/stream/core/observable/hermes.observable';
export declare class CommandBus<C = Command<AggregateId>> extends HermesObservable<C> {
    private readonly commandsStream;
    constructor(commandsStream: CommandStream);
    static readonly services: readonly [typeof CommandStream];
    subscribe(next?: (value: C) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<C>): HermesSubscription;
    ofCommandHandler(...handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command<AggregateId>>>): any;
    ofCreateAggregateHandler(...handlers: Array<CreateAggregateCommandHandlerImpl<any, AggregateRoot<AggregateId>, CreateAggregateCommand>>): any;
    ofNullHandler(handlers: Array<CommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, Command<AggregateId>>>, aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<AggregateId, AggregateRoot<AggregateId>, CreateAggregateCommand>>): any;
}
