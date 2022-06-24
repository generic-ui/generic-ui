import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { RemoveAllFiltersCommand } from './remove-all-filters.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class RemoveAllFiltersCommandHandler implements CommandHandler<StructureAggregate, RemoveAllFiltersCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<RemoveAllFiltersCommand>;
    handle(structure: StructureAggregate, command: RemoveAllFiltersCommand): void;
    publish(aggregate: StructureAggregate, command: RemoveAllFiltersCommand): void;
}
