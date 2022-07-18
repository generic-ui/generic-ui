import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SelectRowByIndexCommand extends StructureCommand {
    private readonly indexes;
    constructor(structureId: StructureId, indexes: Array<number>);
    getIndexes(): Array<number>;
}
