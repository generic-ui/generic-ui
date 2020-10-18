import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollPositionCommand } from './set-scroll-position.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetScrollPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollPositionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetScrollPositionCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetScrollPositionCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetScrollPositionCommand): void;
}
