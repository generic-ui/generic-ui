import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class SetOriginCommand extends Command {
    readonly structureId: StructureId;
    readonly items: Array<any>;
    constructor(structureId: StructureId, items?: Array<any>);
}
