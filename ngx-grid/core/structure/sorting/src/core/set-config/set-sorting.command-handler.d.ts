import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-sorting.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetSortingCommandHandler implements CommandHandler<StructureAggregate, SetSortingCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetSortingCommand>;
    handle(aggregate: StructureAggregate, command: SetSortingCommand): void;
    publish(aggregate: StructureAggregate, command: SetSortingCommand): void;
}
