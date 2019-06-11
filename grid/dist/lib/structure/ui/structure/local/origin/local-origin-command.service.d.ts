import { StructureId } from 'structure/domain/structure-id';
import { OriginCommandService } from 'structure/app/origin/origin-command.service';
import { OriginDispatcher } from 'structure/domain/origin/command/origin.dispatcher';
export declare class LocalOriginCommandService extends OriginCommandService {
    private structureId;
    constructor(structureId: StructureId, originDispatcher: OriginDispatcher);
    setOrigin(items: Array<any>): void;
}
