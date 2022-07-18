import { StructureEditSourceItemParams } from './structure.edit-source-item.params';
import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare class StructureEditSourceItemCommand extends StructureCommand {
    private readonly params;
    constructor(structureId: StructureId, params: StructureEditSourceItemParams);
    getParams(): StructureEditSourceItemParams;
}
