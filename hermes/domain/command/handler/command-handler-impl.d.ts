import { AggregateRoot } from '../aggregate/aggregate-root';
import { Command } from '../command';
import { AggregateRepositoryArchive } from '../config/define';
import { CommandHandler } from './command.handler';
import { AggregateId } from '../../aggregate-id';
export declare function commandHandlerFactory<I extends AggregateId, A extends AggregateRoot<I>, C extends Command>(commandHandler: CommandHandler<A, C>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, aggregateName: string): CommandHandlerImpl<I, A, C>;
export declare class CommandHandlerImpl<I extends AggregateId, A extends AggregateRoot<I>, C extends Command> {
    private readonly commandHandler;
    private readonly aggregateRepositoryArchive;
    private readonly aggregateType;
    private readonly commandType;
    constructor(commandHandler: CommandHandler<A, C>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, aggregateType: string);
    publishDomainEvents(aggregate: A, command: C): void;
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
