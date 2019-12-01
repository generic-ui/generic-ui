import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class ChangePagesizeCommand extends Command {
    readonly structureId: StructureId;
    readonly pageSize: number;
    constructor(structureId: StructureId, pageSize: number);
}
