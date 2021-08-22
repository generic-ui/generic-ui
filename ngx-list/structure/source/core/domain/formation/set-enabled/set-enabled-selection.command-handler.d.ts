import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from './set-enabled-selection.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class SetEnabledSelectionCommandHandler implements CommandHandler<StructureAggregate, SetEnabledSelectionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetEnabledSelectionCommand>;
    publish(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
    handle(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
}
