import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { UnselectAllUniqueFilterCommand } from './unselect-all-unique-filter.command';
import { StructureAggregate } from '../../../../structure-core/domain/structure.aggregate';
export declare class UnselectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectAllUniqueFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<UnselectAllUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
}
