import { Observable } from 'rxjs';
import { Reactive } from '../../../../../common/cdk/reactive';
import { ListViewMode } from '../../domain/mode/list-view-mode';
import { ListViewId } from '../list-view.id';
export declare class ListViewModeRepository extends Reactive {
    private mode;
    private mode$;
    constructor();
    setMode(mode: ListViewMode, listViewId: ListViewId): void;
    on(listViewId: ListViewId): Observable<ListViewMode>;
    private next;
}
