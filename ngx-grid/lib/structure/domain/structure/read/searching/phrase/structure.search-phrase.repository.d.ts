import { Observable } from 'rxjs';
import { Reactive } from '../../../../../../../common/cdk/reactive';
import { StructureId } from '../../../../structure-id';
export declare class StructureSearchPhraseRepository extends Reactive {
    private phrase;
    private phrase$;
    constructor();
    setPhrase(phrase: string, structureId: StructureId): void;
    onPhrase(structureId: StructureId): Observable<string>;
}
