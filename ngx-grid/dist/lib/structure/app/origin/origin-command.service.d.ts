import { OriginDispatcher } from 'structure/domain/origin/command/origin.dispatcher';
import { StructureId } from 'structure/domain/structure-id';
export declare class OriginCommandService {
    private originDispatcher;
    constructor(originDispatcher: OriginDispatcher);
    setOrigin(items: Array<any>, structureId?: StructureId): void;
}
