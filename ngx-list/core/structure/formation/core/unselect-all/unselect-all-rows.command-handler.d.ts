import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { UnselectAllRowsCommand } from './unselect-all-rows.command';
import { StructureAggregate } from '../../../structure-core/domain/structure.aggregate';
export declare class UnselectAllRowsCommandHandler implements CommandHandler<StructureAggregate, UnselectAllRowsCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<UnselectAllRowsCommand>;
    handle(aggregate: StructureAggregate, command: UnselectAllRowsCommand): void;
    publish(aggregate: StructureAggregate, command: UnselectAllRowsCommand): void;
}
