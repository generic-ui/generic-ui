import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetPagingCommand } from './set-paging.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetPagingCommandHandler implements CommandHandler<StructureAggregate, SetPagingCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetPagingCommand>;
    handle(structureAggregate: StructureAggregate, command: SetPagingCommand): void;
    publish(aggregate: StructureAggregate, command: SetPagingCommand): void;
}
