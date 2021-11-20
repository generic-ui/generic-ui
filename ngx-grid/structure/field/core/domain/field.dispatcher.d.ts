import { FieldConfig } from '../api/field.config';
import { StructureId } from '../../../core/api/structure.id';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class FieldDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    initFields(fieldConfigs: Array<FieldConfig>, structureId: StructureId): void;
}
