import { Publisher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { FieldConfig } from './config/field.config';
export declare abstract class FieldPublisher implements Publisher {
    protected constructor();
    abstract initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
