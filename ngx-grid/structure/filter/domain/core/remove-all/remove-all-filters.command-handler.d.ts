import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveAllFiltersCommand } from './remove-all-filters.command';
import { StructureAggregate } from '../../../../../lib/structure/domain/structure/structure.aggregate';
export declare class RemoveAllFiltersCommandHandler implements CommandHandler<StructureAggregate, RemoveAllFiltersCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<RemoveAllFiltersCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: RemoveAllFiltersCommand): void;
    handleAggregate(structure: StructureAggregate, command: RemoveAllFiltersCommand): void;
}
