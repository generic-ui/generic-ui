import { VerticalFormationCommandInvoker } from '../api/vertical-formation.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
import { VerticalFormationDispatcher } from './vertical-formation.dispatcher';
export declare class VerticalFormationDomainCommandInvoker extends VerticalFormationCommandInvoker {
    private readonly verticalFormationDispatcher;
    constructor(verticalFormationDispatcher: VerticalFormationDispatcher);
    enableVirtualScroll(structureId: StructureId): void;
    disableVirtualScroll(structureId: StructureId): void;
    scrollToTop(structureId: StructureId): void;
    scrollToBottom(structureId: StructureId): void;
    scrollToIndex(index: number, structureId: StructureId): void;
    setScrollPosition(position: number, structureId: StructureId): void;
}
