import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare abstract class SearchWarehouse implements Warehouse {
    protected constructor();
    abstract onSearchEnabled(structureId: StructureId): Observable<boolean>;
    abstract onPhrase(structureId: StructureId): Observable<string>;
}
