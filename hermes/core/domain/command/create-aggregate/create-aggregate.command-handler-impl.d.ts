import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { CreateAggregateCommandHandler } from './create-aggregate.command-handler';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../config/define';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { CreateAggregateCommand } from './create-aggregate.command';
import { DomainEventPublisher } from '../../event/domain-event.publisher';
export declare function createAggregateCommandHandlerFactory<I extends AggregateId, A extends AggregateRoot<I>, C extends CreateAggregateCommand>(createAggregateCommandHandler: CreateAggregateCommandHandler<A, C>, factoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, aggregateName: string, domainEventPublisher: DomainEventPublisher): CreateAggregateCommandHandlerImpl<I, A, C>;
export declare class CreateAggregateCommandHandlerImpl<I extends AggregateId, A extends AggregateRoot<I>, C extends CreateAggregateCommand> {
    private readonly createAggregateCommandHandler;
    private readonly aggregateFactoryArchive;
    private readonly aggregateRepositoryArchive;
    private readonly aggregateType;
    private readonly domainEventPublisher;
    private readonly commandType;
    constructor(createAggregateCommandHandler: CreateAggregateCommandHandler<A, C>, aggregateFactoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>, aggregateType: string, domainEventPublisher: DomainEventPublisher);
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
