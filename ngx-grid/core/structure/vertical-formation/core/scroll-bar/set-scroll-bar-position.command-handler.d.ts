import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetScrollBarPositionCommand } from './set-scroll-bar-position.command';
import { StructureAggregate } from '../../../structure-core/domain/structure.aggregate';
export declare class SetScrollBarPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollBarPositionCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetScrollBarPositionCommand>;
    handle(structure: StructureAggregate, command: SetScrollBarPositionCommand): void;
    publish(aggregate: StructureAggregate, command: SetScrollBarPositionCommand): void;
}
