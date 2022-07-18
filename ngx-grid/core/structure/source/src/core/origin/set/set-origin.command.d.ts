import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare class SetOriginCommand extends StructureCommand {
    private readonly items;
    constructor(structureId: StructureId, items?: Array<any>);
    getItems(): Array<any>;
}
