import { FilterPublisher } from '../api/filter.publisher';
import { FilterConfig } from '../api/config/filter.config';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { FilterTypeId } from '../domain/type/filter-type.id';
import { FilterId } from '../api/id/filter.id';
import { UniqueValueId } from '../domain/unique/unique-value-id';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class FilterDomainPublisher extends FilterPublisher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    static readonly services: (typeof CommandDispatcher)[];
    setConfig(config: FilterConfig, structureId: StructureId): void;
    add(fieldId: FieldId, filterTypeId: FilterTypeId, value: any, structureId: StructureId): void;
    removeAll(structureId: StructureId): void;
    remove(filterId: FilterId, structureId: StructureId): void;
    selectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    unselectAllUniqueFilter(fieldId: FieldId, structureId: StructureId): void;
    selectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
    unselectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId, structureId: StructureId): void;
}
