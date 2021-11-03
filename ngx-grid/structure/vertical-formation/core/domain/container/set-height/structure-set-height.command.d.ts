import { StructureId } from '../../../../../core/api/structure.id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class StructureSetHeightCommand extends StructureCommand {
    private readonly height;
    constructor(structureId: StructureId, height: number);
    getHeight(): number;
}
//# sourceMappingURL=structure-set-height.command.d.ts.map