import { Observable } from 'rxjs';
import { AggregateId, CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { CompositionId } from '../../../../composition/composition-id';
import { FieldId } from '../../field/data-type/field.id';
import { StructureSorter } from '../structure.sorter';
export declare class SetSortOrderCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetSortOrderCommand): ExecuteResponse | Observable<ExecuteResponse>;
    publishSortEvent(aggregateId: AggregateId, compositionId: CompositionId, fieldId: FieldId, sorters: Array<StructureSorter>): void;
}
