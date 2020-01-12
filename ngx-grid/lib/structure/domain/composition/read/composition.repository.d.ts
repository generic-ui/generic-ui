import { Observable } from 'rxjs';
import { CompositionId } from '../composition-id';
import { Composition } from './composition';
export declare abstract class CompositionRepository {
    abstract on(compositionId: CompositionId): Observable<Composition>;
}
