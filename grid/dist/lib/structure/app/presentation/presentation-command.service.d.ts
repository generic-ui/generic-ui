import { StructureId } from 'structure/domain/structure-id';
import { PresentationDispatcher } from 'structure/domain/presentation/command/presentation.dispatcher';
import { Column } from 'structure/domain/presentation/column';
export declare class PresentationCommandService {
    private presentationDispatcher;
    constructor(presentationDispatcher: PresentationDispatcher);
    setColumns(columns: Array<Column>, structureId?: StructureId): void;
    setWidth(width: number, structureId?: StructureId): void;
    setContainerWidth(width: number, structureId?: StructureId): void;
    setResizeWidth(enabled: boolean, structureId?: StructureId): void;
}
