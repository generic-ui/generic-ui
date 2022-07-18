import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSortOrderCommand } from './set-sort-order.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetSortOrderCommandHandler implements CommandHandler<StructureAggregate, SetSortOrderCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetSortOrderCommand>;
    handle(structure: StructureAggregate, command: SetSortOrderCommand): void;
    publish(aggregate: StructureAggregate, command: SetSortOrderCommand): void;
    private publishSortEvent;
}
