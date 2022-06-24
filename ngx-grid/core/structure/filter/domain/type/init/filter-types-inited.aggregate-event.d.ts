import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/global/structure.id';
import { FilterTypeModel } from '../../../api/type/filter-type.model';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export declare class FilterTypesInitedAggregateEvent extends StructureAggregateEvent {
    private readonly filterTypes;
    constructor(structureId: StructureId, filterTypes: Map<string, Array<FilterTypeModel>>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFilterTypes(): Map<string, Array<FilterTypeModel>>;
}
