import { StructureId } from '../../../core/api/global/structure.id';
import { FieldConfig } from '../../api/config/field.config';
import { StructureCommand } from '../../../core/domain/structure.command';
export declare class InitFieldsCommand extends StructureCommand {
    private readonly fieldConfigs;
    constructor(structureId: StructureId, fieldConfigs: Array<FieldConfig>);
    getFieldConfigs(): Array<FieldConfig>;
}
