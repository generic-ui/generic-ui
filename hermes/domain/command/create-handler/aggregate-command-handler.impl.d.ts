import { Aggregate } from '../aggregate/aggregate';
import { Command } from '../command';
import { AggregateCommandHandler } from './aggregate-command.handler';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../config/define';
export declare function aggregateCommandHandlerFactory<A extends Aggregate, C extends Command>(createAggregateCommandHandler: AggregateCommandHandler<A, C>, factoryArchive: AggregateFactoryArchive, aggregateRepositoryArchive: AggregateRepositoryArchive, aggregateName: string): AggregateCommandHandlerImpl<A, C>;
export declare class AggregateCommandHandlerImpl<A extends Aggregate, C extends Command> {
    private readonly createAggregateCommandHandler;
    private readonly aggregateFactoryArchive;
    private readonly aggregateRepositoryArchive;
    private readonly aggregateType;
    private readonly commandType;
    constructor(createAggregateCommandHandler: AggregateCommandHandler<A, C>, aggregateFactoryArchive: AggregateFactoryArchive, aggregateRepositoryArchive: AggregateRepositoryArchive, aggregateType: string);
    publishDomainEvents(aggregate: A, command: C): void;
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
