import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class ChangePagesizeCommandHandler implements CommandHandler<StructureAggregate, ChangePagesizeCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<ChangePagesizeCommand>;
    handle(structureAggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    publish(aggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    private publishAggregateEvents;
    private publishAggregateEvent;
}
