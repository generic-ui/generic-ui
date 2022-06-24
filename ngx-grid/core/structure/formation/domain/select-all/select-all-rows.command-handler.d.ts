import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectAllRowsCommand } from './select-all-rows.command';
import { StructureAggregate } from '../../../core/domain/structure.aggregate';
export declare class SelectAllRowsCommandHandler implements CommandHandler<StructureAggregate, SelectAllRowsCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SelectAllRowsCommand>;
    handle(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
    publish(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
}
