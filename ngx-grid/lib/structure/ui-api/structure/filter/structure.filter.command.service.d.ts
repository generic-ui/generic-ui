import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterConfig } from './filter-config';
import { StructureId } from '../../../domain/structure-id';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
export declare class StructureFilterCommandService {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setFilteringEnabled(config: FilterConfig, structureId: StructureId): void;
    addFilter(fieldId: FieldId, externalFieldId: string, filterValue: string, structureId: StructureId): void;
}
