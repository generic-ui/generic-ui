import { StructureId } from '../../../../core/api/global/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class StructureSetHeightCommand extends StructureCommand {
    private readonly height;
    constructor(structureId: StructureId, height: number);
    getHeight(): number;
}
