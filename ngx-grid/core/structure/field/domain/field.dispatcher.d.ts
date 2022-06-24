import { FieldConfig } from '../api/config/field.config';
import { StructureId } from '../../core/api/global/structure.id';
export declare class FieldDispatcher {
    private readonly commandDispatcher;
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
