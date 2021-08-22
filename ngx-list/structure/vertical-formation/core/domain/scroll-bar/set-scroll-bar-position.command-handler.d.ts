import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollBarPositionCommand } from './set-scroll-bar-position.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetScrollBarPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollBarPositionCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetScrollBarPositionCommand>;
    publish(aggregate: StructureAggregate, command: SetScrollBarPositionCommand): void;
    handle(structure: StructureAggregate, command: SetScrollBarPositionCommand): void;
}
