import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { ActiveFilterModel } from '../api/active/active-filter.model';
import { StructureDomainEvent } from '../../../structure-core/src/core/structure.domain-event';
export declare class ActiveFiltersSetEvent extends StructureDomainEvent {
    private readonly filters;
    constructor(structureId: StructureId, filters: ReadonlyArray<ActiveFilterModel>);
    getFilters(): ReadonlyArray<any>;
}
