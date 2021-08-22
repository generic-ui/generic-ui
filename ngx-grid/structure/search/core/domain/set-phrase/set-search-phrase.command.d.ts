import { StructureId } from '../../../../core/domain/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetSearchPhraseCommand extends StructureCommand {
    private readonly phrase;
    private readonly initial;
    constructor(structureId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
