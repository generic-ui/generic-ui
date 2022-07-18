import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetSelectedRowCommand extends StructureCommand {
    private readonly selectedRows;
    constructor(structureId: StructureId, selectedRows: Array<string>);
    getSelectedRows(): Array<string>;
}
