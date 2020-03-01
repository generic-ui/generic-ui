import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetPagingCommand } from './set-paging.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetPagingCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handleAggregate(structureAggregate: StructureAggregate, command: SetPagingCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: SetPagingCommand): void;
}
