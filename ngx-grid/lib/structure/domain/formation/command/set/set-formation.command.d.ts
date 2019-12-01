import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class SetFormationCommand extends Command {
    readonly structureId: StructureId;
    readonly payload?: any;
    constructor(structureId: StructureId, payload?: any);
}
