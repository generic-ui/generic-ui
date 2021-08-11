import { Observable } from 'rxjs';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
import { StructureId } from '../../../../core/api/structure.id';
export declare class SearchPhraseRepository extends Reactive {
    private phrase;
    private phrase$;
    constructor();
    setPhrase(phrase: string, structureId: StructureId): void;
    onPhrase(structureId: StructureId): Observable<string>;
    private observePhrases;
}
