import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class SetOriginCommand extends Command {
    private readonly items;
    constructor(structureId: StructureId, items?: Array<any>);
    getItems(): Array<any>;
}
