import { StructureId } from '../../../../../core/api/structure.id';
import { FilterTypeReadModel } from '../../../api/type/filter-type.read-model';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class FilterTypesInitedEvent extends StructureDomainEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<FilterTypeReadModel>>);
    getMap(): Map<string, Array<FilterTypeReadModel>>;
}
//# sourceMappingURL=filter-types-inited.event.d.ts.map