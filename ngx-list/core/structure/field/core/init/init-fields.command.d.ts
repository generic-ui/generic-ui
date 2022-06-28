import { StructureId } from '../../../structure-core/api/global/structure.id';
import { FieldConfig } from '../../api/config/field.config';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class InitFieldsCommand extends StructureCommand {
    private readonly fieldConfigs;
    constructor(structureId: StructureId, fieldConfigs: Array<FieldConfig>);
    getFieldConfigs(): Array<FieldConfig>;
}
