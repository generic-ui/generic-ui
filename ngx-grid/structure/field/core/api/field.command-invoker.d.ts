import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { FieldConfig } from './field.config';
export declare abstract class FieldCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
