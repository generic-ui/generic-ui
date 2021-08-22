import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class UnselectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<UnselectUniqueFilterCommand>;
    publish(aggregate: StructureAggregate, command: UnselectUniqueFilterCommand): void;
    handle(structure: StructureAggregate, command: UnselectUniqueFilterCommand): void;
}
