import { AggregateRoot } from '../aggregate-root';
import { Command } from '../../command';
import { AggregateCommandHandler } from './aggregate-command-handler';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../../config/define';
import { AggregateId } from '../../../aggregate-id';
export declare function aggregateCommandHandlerFactory<I extends AggregateId, A extends AggregateRoot<I>, C extends Command>(createAggregateCommandHandler: AggregateCommandHandler<A, C>, factoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, aggregateName: string): AggregateCommandHandlerImpl<I, A, C>;
export declare class AggregateCommandHandlerImpl<I extends AggregateId, A extends AggregateRoot<I>, C extends Command> {
    private readonly createAggregateCommandHandler;
    private readonly aggregateFactoryArchive;
    private readonly aggregateRepositoryArchive;
    private readonly aggregateType;
    private readonly commandType;
    constructor(createAggregateCommandHandler: AggregateCommandHandler<A, C>, aggregateFactoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, aggregateType: string);
    publishDomainEvents(aggregate: A, command: C): void;
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
