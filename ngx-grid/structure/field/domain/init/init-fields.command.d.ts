import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { FieldConfig } from '../../domain-api/field.config';
export declare class InitFieldsCommand extends Command {
    private readonly fieldConfigs;
    constructor(structureId: StructureId, fieldConfigs: Array<FieldConfig>);
    getFieldConfigs(): Array<FieldConfig>;
}
