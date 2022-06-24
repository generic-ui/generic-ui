import { StructureId } from '../../../../core/api/global/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class RemoveSearchPhraseCommand extends StructureCommand {
    constructor(structureId: StructureId);
}
