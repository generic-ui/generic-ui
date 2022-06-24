import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { CreateAggregateCommandHandler } from './create-aggregate.command-handler';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { CreateAggregateCommand } from './create-aggregate.command';
export declare function createAggregateCommandHandlerFactory<I extends AggregateId, A extends AggregateRoot<I>, C extends CreateAggregateCommand>(createAggregateCommandHandler: CreateAggregateCommandHandler<C>, aggregateName: string): CreateAggregateCommandHandlerImpl<I, A, C>;
export declare class CreateAggregateCommandHandlerImpl<I extends AggregateId, A extends AggregateRoot<I>, C extends CreateAggregateCommand> {
    private readonly createAggregateCommandHandler;
    private readonly aggregateType;
    private readonly aggregateFactoryArchive;
    private readonly aggregateRepositoryArchive;
    private readonly domainEventPublisher;
    private readonly commandType;
    constructor(createAggregateCommandHandler: CreateAggregateCommandHandler<C>, aggregateType: string);
    handleCommand(command: C): void;
    forCommand(command: C): boolean;
    private createCommandInstance;
}
