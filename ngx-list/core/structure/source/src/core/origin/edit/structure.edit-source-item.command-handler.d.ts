import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class StructureEditSourceItemCommandHandler implements CommandHandler<StructureAggregate, StructureEditSourceItemCommand> {
    private structureSourceDomainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher);
    static readonly services: readonly [typeof SourceDomainEventPublisher];
    forCommand(): CommandType<StructureEditSourceItemCommand>;
    handle(structure: StructureAggregate, command: StructureEditSourceItemCommand): void;
    publish(aggregate: StructureAggregate, command: StructureEditSourceItemCommand): void;
}
