import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { Command } from '../../../api/command/command';
import { CommandHandler } from './command.handler';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export declare function commandHandlerFactory<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>>(commandHandler: CommandHandler<A, C>, aggregateName: string): CommandHandlerImpl<I, A, C>;
export declare class CommandHandlerImpl<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>> {
    private readonly commandHandler;
    private readonly aggregateType;
    private readonly aggregateRepositoryArchive;
    private readonly commandType;
    constructor(commandHandler: CommandHandler<A, C>, aggregateType: string);
    publishDomainEvents(aggregate: A, command: C): void;
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
