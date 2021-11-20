import { StructureId } from '../../../../../core/api/structure.id';
import { FilterTypeModel } from '../../../api/type/filter-type.model';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class FilterTypesInitedEvent extends StructureDomainEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<FilterTypeModel>>);
    getMap(): Map<string, Array<FilterTypeModel>>;
}
