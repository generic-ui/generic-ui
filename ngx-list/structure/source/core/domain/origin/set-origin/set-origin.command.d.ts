import { StructureId } from '../../../../../core/api/structure.id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class SetOriginCommand extends StructureCommand {
    private readonly items;
    constructor(structureId: StructureId, items?: Array<any>);
    getItems(): Array<any>;
}
