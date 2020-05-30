import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class SetSearchPhraseCommand extends Command {
    private readonly phrase;
    private readonly initial;
    constructor(structureId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
