import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveAllFiltersCommand } from './remove-all-filters.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class RemoveAllFiltersCommandHandler implements CommandHandler<StructureAggregate, RemoveAllFiltersCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<RemoveAllFiltersCommand>;
    publish(aggregate: StructureAggregate, command: RemoveAllFiltersCommand): void;
    handle(structure: StructureAggregate, command: RemoveAllFiltersCommand): void;
}
