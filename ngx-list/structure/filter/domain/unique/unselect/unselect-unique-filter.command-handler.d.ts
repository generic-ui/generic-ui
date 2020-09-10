import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class UnselectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<UnselectUniqueFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: UnselectUniqueFilterCommand): void;
    handleAggregate(structure: StructureAggregate, command: UnselectUniqueFilterCommand): void;
}
