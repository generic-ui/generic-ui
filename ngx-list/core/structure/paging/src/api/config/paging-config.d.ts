import { PagingDisplayMode } from '../../../../../../feature/structure/paging/src/mode/paging-display-mode';
export interface PagingConfig {
    enabled?: boolean;
    page?: number;
    pageSize?: number;
    pageSizes?: Array<number>;
    pagerTop?: boolean;
    pagerBottom?: boolean;
    displayMode?: PagingDisplayMode;
}
