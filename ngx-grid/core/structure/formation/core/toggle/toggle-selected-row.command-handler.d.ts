import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { StructureAggregate } from '../../../structure-core/domain/structure.aggregate';
export declare class ToggleSelectedRowCommandHandler implements CommandHandler<StructureAggregate, ToggleSelectedRowCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<ToggleSelectedRowCommand>;
    handle(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
    publish(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
}
