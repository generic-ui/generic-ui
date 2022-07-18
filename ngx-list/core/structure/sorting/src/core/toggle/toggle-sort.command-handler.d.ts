import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ToggleSortCommand } from './toggle-sort.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class ToggleSortCommandHandler implements CommandHandler<StructureAggregate, ToggleSortCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<ToggleSortCommand>;
    handle(structure: StructureAggregate, command: ToggleSortCommand): void;
    publish(aggregate: StructureAggregate, command: ToggleSortCommand): void;
    private publishSortEvent;
}
