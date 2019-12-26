import { Observable } from 'rxjs';
import { CompositionId } from '../composition-id';
import { Composition } from './composition';
export declare abstract class CompositionRepository {
    abstract select(compositionId: CompositionId): Observable<Composition>;
}
