import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { Reactive } from '../../../../common/reactive/reactive';
import { CommandHandlerImpl } from '../handler/command-handler-impl';
import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { Command } from '../../../api/command/command';
import { CreateAggregateCommandHandlerImpl } from '../create-aggregate/create-aggregate.command-handler-impl';
export declare class CommandHandlerInitializer<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>> extends Reactive {
    private readonly commandBus;
    constructor();
    register(commandHandlers: Array<CommandHandlerImpl<I, A, C>>): void;
    registerAggregateCommandHandlers(aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<I, A, C>>): void;
}
