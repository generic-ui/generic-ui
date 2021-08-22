import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class SetSelectionModeCommandHandler implements CommandHandler<StructureAggregate, SetSelectionModeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSelectionModeCommand>;
    publish(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
    handle(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
}
