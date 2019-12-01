import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class SetSchemaCommand extends Command {
    readonly structureId: StructureId;
    readonly height: number;
    constructor(structureId: StructureId, height: number);
}
