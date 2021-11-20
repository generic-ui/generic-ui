import { StructureId } from '../../../../core/api/structure.id';
import { ActiveFilterModel } from '../../api/active/active-filter.model';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class ActiveFiltersSetEvent extends StructureDomainEvent {
    private readonly filters;
    constructor(structureId: StructureId, filters: ReadonlyArray<ActiveFilterModel>);
    getFilters(): ReadonlyArray<any>;
}
