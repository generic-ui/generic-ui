import { Observable } from 'rxjs';
import { FieldUiArchive } from './field.ui-archive';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FieldUiModel } from './field.ui-model';
export declare class FieldUiRepository {
    private structureFieldUiArchive;
    constructor(structureFieldUiArchive: FieldUiArchive);
    onFields(structureId: StructureId): Observable<Array<FieldUiModel>>;
}
