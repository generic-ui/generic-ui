import { StructureId } from '../../../../core/api/structure.id';
import { ActiveFilterReadModel } from '../../api/active/active-filter.read-model';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class ActiveFiltersSetEvent extends StructureDomainEvent {
    private readonly filters;
    constructor(structureId: StructureId, filters: ReadonlyArray<ActiveFilterReadModel>);
    getFilters(): ReadonlyArray<any>;
}
