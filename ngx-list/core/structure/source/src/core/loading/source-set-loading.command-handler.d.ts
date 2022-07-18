import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './source-set-loading.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SourceSetLoadingCommandHandler implements CommandHandler<StructureAggregate, SourceSetLoadingCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SourceSetLoadingCommand>;
    handle(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
    publish(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
}
