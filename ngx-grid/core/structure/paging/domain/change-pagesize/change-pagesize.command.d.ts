import { StructureId } from '../../../core/api/global/structure.id';
import { StructureCommand } from '../../../core/domain/structure.command';
export declare class ChangePagesizeCommand extends StructureCommand {
    private readonly pageSize;
    constructor(structureId: StructureId, pageSize: number);
    getPageSize(): number;
}
