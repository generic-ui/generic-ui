import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/core/structure.command';
export declare class StructureSetHeightCommand extends StructureCommand {
    private readonly height;
    constructor(structureId: StructureId, height: number);
    getHeight(): number;
}
