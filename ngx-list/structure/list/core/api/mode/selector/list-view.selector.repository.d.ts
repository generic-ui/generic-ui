import { Observable } from 'rxjs';
import { Reactive } from '@generic-ui/hermes';
import { ListViewId } from '../../../domain/list-view.id';
export declare class ListViewSelectorRepository extends Reactive {
    private selectorEnabled;
    private selectorEnabled$;
    constructor();
    setMode(selectorEnabled: boolean, listViewId: ListViewId): void;
    on(listViewId: ListViewId): Observable<boolean>;
    private next;
}
