import { StructureId } from 'structure/domain/structure-id';
import { Column } from 'structure/domain/presentation/column';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class PresentationDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setColumns(structureId: StructureId, columns: Array<Column>): void;
    setWidth(structureId: StructureId, width: number): void;
    setContainerWidth(structureId: StructureId, width: number): void;
    setResizeWidth(structureId: StructureId, enabled: boolean): void;
}
