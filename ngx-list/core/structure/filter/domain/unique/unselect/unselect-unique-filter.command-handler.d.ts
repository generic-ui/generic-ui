import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class UnselectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectUniqueFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<UnselectUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: UnselectUniqueFilterCommand): void;
    publish(aggregate: StructureAggregate, command: UnselectUniqueFilterCommand): void;
}
