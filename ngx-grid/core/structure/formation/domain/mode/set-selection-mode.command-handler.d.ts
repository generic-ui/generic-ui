import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
import { StructureAggregate } from '../../../core/domain/structure.aggregate';
export declare class SetSelectionModeCommandHandler implements CommandHandler<StructureAggregate, SetSelectionModeCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetSelectionModeCommand>;
    handle(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
    publish(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
}
