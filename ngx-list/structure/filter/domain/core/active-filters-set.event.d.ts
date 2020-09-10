import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { ActiveFilterReadModel } from '../../domain-api/active/active-filter.read-model';
export declare class ActiveFiltersSetEvent extends DomainEvent<StructureId> {
    private readonly filters;
    constructor(structureId: StructureId, filters: ReadonlyArray<ActiveFilterReadModel>);
    getFilters(): ReadonlyArray<any>;
}
