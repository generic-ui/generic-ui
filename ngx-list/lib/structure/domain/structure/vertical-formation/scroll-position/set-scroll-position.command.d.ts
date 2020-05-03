import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class SetScrollPositionCommand extends Command {
    private readonly position;
    constructor(structureId: StructureId, position: number);
    getPosition(): number;
}
