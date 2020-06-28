import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from './set-enabled-selection.command';
import { StructureAggregate } from '../../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetEnabledSelectionCommandHandler implements CommandHandler<StructureAggregate, SetEnabledSelectionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetEnabledSelectionCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
}
