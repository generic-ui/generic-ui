import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SelectRowByIdCommand extends StructureCommand {
    private readonly ids;
    constructor(structureId: StructureId, ids: Array<string>);
    getIds(): Array<string>;
}
