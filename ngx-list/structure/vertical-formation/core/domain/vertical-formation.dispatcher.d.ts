import { StructureId } from '../../../core/api/structure.id';
import { CommandDispatcher } from '@generic-ui/hermes';
export declare class VerticalFormationDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setVirtualScrollEnabled(enabled: boolean, structureId: StructureId): void;
    scrollTo(position: number, structureId: StructureId): void;
    setScrollPosition(position: number, structureId: StructureId): void;
}
