import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../../structure-core/core/structure.command';
export declare class SetSearchPhraseCommand extends StructureCommand {
    private readonly phrase;
    private readonly initial;
    constructor(structureId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
