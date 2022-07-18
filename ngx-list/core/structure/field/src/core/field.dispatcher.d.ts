import { FieldConfig } from '../api/config/field.config';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare class FieldDispatcher {
    private readonly commandDispatcher;
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
