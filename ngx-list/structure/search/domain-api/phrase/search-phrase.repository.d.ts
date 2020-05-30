import { Observable } from 'rxjs';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class SearchPhraseRepository extends Reactive {
    private phrase;
    private phrase$;
    constructor();
    setPhrase(phrase: string, structureId: StructureId): void;
    onPhrase(structureId: StructureId): Observable<string>;
    private observePhrases;
}
