import { Observable } from 'rxjs';
import { Archive } from '../../../../../common/cdk/archive';
import { PagingDisplayMode } from './paging-display-mode';
export declare class StructurePagingDisplayModeArchive extends Archive<PagingDisplayMode> {
    constructor();
    onValue(): Observable<PagingDisplayMode>;
}
