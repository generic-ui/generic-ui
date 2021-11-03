import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetHeightCommand } from './structure-set-height.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class StructureSetHeightCommandHandler implements CommandHandler<StructureAggregate, StructureSetHeightCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<StructureSetHeightCommand>;
    handle(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
    publish(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
}
