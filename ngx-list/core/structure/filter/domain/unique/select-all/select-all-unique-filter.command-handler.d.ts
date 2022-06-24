import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectAllUniqueFilterCommand } from './select-all-unique-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SelectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectAllUniqueFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SelectAllUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
}
