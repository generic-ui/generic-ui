import { Command } from '@generic-ui/hermes';
import { StructureEditSourceItemParams } from './structure.edit-source-item.params';
import { StructureId } from '../../../structure.id';
export declare class StructureEditSourceItemCommand extends Command {
    private readonly params;
    constructor(structureId: StructureId, params: StructureEditSourceItemParams);
    getParams(): StructureEditSourceItemParams;
}
