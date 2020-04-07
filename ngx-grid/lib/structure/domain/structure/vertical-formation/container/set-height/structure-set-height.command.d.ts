import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure.id';
export declare class StructureSetHeightCommand extends Command {
    private readonly height;
    constructor(structureId: StructureId, height: number);
    getHeight(): number;
}
