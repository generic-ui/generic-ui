import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { FilterTypeModel } from '../../../api/type/filter-type.model';
import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export declare class FilterTypesInitedEvent extends StructureDomainEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<FilterTypeModel>>);
    getMap(): Map<string, Array<FilterTypeModel>>;
}
