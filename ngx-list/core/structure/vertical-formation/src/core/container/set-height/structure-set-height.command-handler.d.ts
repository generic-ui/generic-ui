import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { StructureSetHeightCommand } from './structure-set-height.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class StructureSetHeightCommandHandler implements CommandHandler<StructureAggregate, StructureSetHeightCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<StructureSetHeightCommand>;
    handle(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
    publish(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
}
