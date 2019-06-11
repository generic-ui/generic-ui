import { StructureId } from 'structure/domain/structure-id';
import { StructureCommandService } from 'structure/app/structure/structure-command.service';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class LocalStructureCommandService extends StructureCommandService {
    private readonly structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher);
    init(): void;
}
