import { Observable } from 'rxjs';
import { Archive } from '@generic-ui/hermes';
import { PagingDisplayMode } from './paging-display-mode';
export declare class PagingDisplayModeArchive extends Archive<PagingDisplayMode> {
    constructor();
    on(): Observable<PagingDisplayMode>;
}
