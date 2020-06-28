import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigQuickFilterCommand } from './set-config-quick-filter.command';
import { StructureAggregateRepository } from '../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetConfigQuickFilterCommandHandler implements CommandHandler<StructureAggregate, SetConfigQuickFilterCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetConfigQuickFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetConfigQuickFilterCommand): void;
}
