import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class StructureSetSearchPhraseCommand extends Command {
    readonly structureId: StructureId;
    readonly phrase: string;
    constructor(structureId: StructureId, phrase: string);
}
