import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { StructureAggregate } from '../../../core/domain/structure.aggregate';
export declare class SetConfigSearchingCommandHandler implements CommandHandler<StructureAggregate, SetConfigSearchingCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetConfigSearchingCommand>;
    handle(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
    publish(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
}
