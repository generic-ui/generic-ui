import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetScrollPositionCommand } from './set-scroll-position.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetScrollPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollPositionCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetScrollPositionCommand>;
    handle(structure: StructureAggregate, command: SetScrollPositionCommand): void;
    publish(aggregate: StructureAggregate, command: SetScrollPositionCommand): void;
}
