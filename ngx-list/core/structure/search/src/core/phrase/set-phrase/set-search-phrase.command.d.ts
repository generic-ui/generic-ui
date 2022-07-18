import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare class SetSearchPhraseCommand extends StructureCommand {
    private readonly phrase;
    private readonly initial;
    constructor(structureId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
