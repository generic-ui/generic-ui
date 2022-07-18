import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare class StructureSetHeightCommand extends StructureCommand {
    private readonly height;
    constructor(structureId: StructureId, height: number);
    getHeight(): number;
}
