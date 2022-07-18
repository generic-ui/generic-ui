import { VerticalFormationPublisher } from '../api/vertical-formation.publisher';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { VerticalFormationDispatcher } from './vertical-formation.dispatcher';
export declare class VerticalFormationDomainPublisher extends VerticalFormationPublisher {
    private readonly verticalFormationDispatcher;
    constructor(verticalFormationDispatcher: VerticalFormationDispatcher);
    static readonly services: (typeof VerticalFormationDispatcher)[];
    enableVirtualScroll(structureId: StructureId): void;
    disableVirtualScroll(structureId: StructureId): void;
    scrollToTop(structureId: StructureId): void;
    scrollToBottom(structureId: StructureId): void;
    scrollToIndex(index: number, structureId: StructureId): void;
    setScrollPosition(position: number, structureId: StructureId): void;
}
