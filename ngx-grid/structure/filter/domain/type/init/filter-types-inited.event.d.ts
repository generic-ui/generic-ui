import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { FilterTypeReadModel } from '../../../domain-api/type/filter-type.read-model';
export declare class FilterTypesInitedEvent extends DomainEvent<StructureId> {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<FilterTypeReadModel>>);
    getMap(): Map<string, Array<FilterTypeReadModel>>;
}
