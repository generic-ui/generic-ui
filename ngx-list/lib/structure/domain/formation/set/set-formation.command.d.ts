import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class SetFormationCommand extends Command {
    private readonly payload?;
    constructor(structureId: StructureId, payload?: any);
}
