import { Aggregate } from '../aggregate/aggregate';
import { Command } from '../command';
import { AggregateRepositoryArchive } from '../config/define';
import { CommandHandler } from './command.handler';
export declare function commandHandlerFactory<A extends Aggregate, C extends Command>(commandHandler: CommandHandler<A, C>, aggregateRepositoryArchive: AggregateRepositoryArchive, aggregateName: string): CommandHandlerImpl<A, C>;
export declare class CommandHandlerImpl<A extends Aggregate, C extends Command> {
    private readonly commandHandler;
    private readonly aggregateRepositoryArchive;
    private readonly aggregateType;
    private readonly commandType;
    constructor(commandHandler: CommandHandler<A, C>, aggregateRepositoryArchive: AggregateRepositoryArchive, aggregateType: string);
    publishDomainEvents(aggregate: A, command: C): void;
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
