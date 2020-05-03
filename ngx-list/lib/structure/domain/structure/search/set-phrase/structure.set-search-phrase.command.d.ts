import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class StructureSetSearchPhraseCommand extends Command {
    private readonly phrase;
    constructor(structureId: StructureId, phrase: string);
    getPhrase(): string;
}
