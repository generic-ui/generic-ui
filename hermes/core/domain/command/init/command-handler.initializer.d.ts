import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { Reactive } from '../../../../common/reactive';
import { CommandHandlerImpl } from '../handler/command-handler-impl';
import { CommandBus } from '../command.bus';
import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { Command } from '../command';
import { CreateAggregateCommandHandlerImpl } from '../create-aggregate/create-aggregate.command-handler-impl';
export declare class CommandHandlerInitializer<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>> extends Reactive {
    register(commandHandlers: Array<CommandHandlerImpl<I, A, C>>, commandBus: CommandBus): void;
    registerAggregateCommandHandlers(aggregateCommandHandlers: Array<CreateAggregateCommandHandlerImpl<I, A, C>>, commandBus: CommandBus): void;
}
