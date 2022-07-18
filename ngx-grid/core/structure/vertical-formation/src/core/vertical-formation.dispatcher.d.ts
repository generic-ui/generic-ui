import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare class VerticalFormationDispatcher {
    private readonly commandDispatcher;
    setVirtualScrollEnabled(enabled: boolean, structureId: StructureId): void;
    scrollTo(position: number, structureId: StructureId): void;
    setScrollPosition(position: number, structureId: StructureId): void;
}
