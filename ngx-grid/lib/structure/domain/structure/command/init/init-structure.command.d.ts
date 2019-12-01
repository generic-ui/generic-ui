import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class InitStructureCommand extends Command {
    readonly structureId: StructureId;
    constructor(structureId: StructureId);
}
