import { StructureId } from '../../../../core/api/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class ChangePagesizeCommand extends StructureCommand {
    private readonly pageSize;
    constructor(structureId: StructureId, pageSize: number);
    getPageSize(): number;
}
//# sourceMappingURL=change-pagesize.command.d.ts.map