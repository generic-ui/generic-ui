import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/core/structure.command';
export declare class SetOriginCommand extends StructureCommand {
    private readonly items;
    constructor(structureId: StructureId, items?: Array<any>);
    getItems(): Array<any>;
}
