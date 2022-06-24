import { StructureEditSourceItemParams } from './structure.edit-source-item.params';
import { StructureId } from '../../../../core/api/global/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class StructureEditSourceItemCommand extends StructureCommand {
    private readonly params;
    constructor(structureId: StructureId, params: StructureEditSourceItemParams);
    getParams(): StructureEditSourceItemParams;
}
