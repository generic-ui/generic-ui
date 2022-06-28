import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class ChangePagesizeCommand extends StructureCommand {
    private readonly pageSize;
    constructor(structureId: StructureId, pageSize: number);
    getPageSize(): number;
}
