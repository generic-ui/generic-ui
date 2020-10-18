import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigQuickFilterCommand } from './set-config-quick-filter.command';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetConfigQuickFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigQuickFilterCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigQuickFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
}
