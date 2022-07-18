import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetRowHeightCommand } from './set-row-height.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetRowHeightCommandHandler implements CommandHandler<StructureAggregate, SetRowHeightCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetRowHeightCommand>;
    handle(structure: StructureAggregate, command: SetRowHeightCommand): void;
    publish(aggregate: StructureAggregate, command: SetRowHeightCommand): void;
}
