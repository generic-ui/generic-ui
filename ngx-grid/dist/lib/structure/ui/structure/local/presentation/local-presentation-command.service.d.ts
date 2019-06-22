import { StructureId } from 'structure/domain/structure-id';
import { PresentationCommandService } from 'structure/app/presentation/presentation-command.service';
import { Column } from 'structure/domain/presentation/column';
import { PresentationDispatcher } from 'structure/domain/presentation/command/presentation.dispatcher';
export declare class LocalPresentationCommandService extends PresentationCommandService {
    private readonly structureId;
    constructor(structureId: StructureId, presentationDispatcher: PresentationDispatcher);
    setColumns(columns: Array<Column>): void;
    setWidth(width: number, structureId?: StructureId): void;
    setContainerWidth(width: number, structureId?: StructureId): void;
    setResizeWidth(enabled: boolean, structureId?: StructureId): void;
}
