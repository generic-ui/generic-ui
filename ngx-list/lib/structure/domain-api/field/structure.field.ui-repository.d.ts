import { Observable } from 'rxjs';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureId } from '../../domain/structure.id';
import { StructureFieldUiModel } from './structure.field.ui-model';
export declare class StructureFieldUiRepository {
    private structureFieldUiArchive;
    constructor(structureFieldUiArchive: StructureFieldUiArchive);
    onFields(structureId: StructureId): Observable<Array<StructureFieldUiModel>>;
}
