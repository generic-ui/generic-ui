import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetVerticalScrollEnabledCommandHandler implements CommandHandler<StructureAggregate, SetVerticalScrollEnabledCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetVerticalScrollEnabledCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
}
