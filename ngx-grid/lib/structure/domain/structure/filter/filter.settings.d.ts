import { FilterConfig } from '../../../ui-api/filter/filter-config';
import { SearchConfig } from '../../../ui-api/search/search-config';
import { QuickFiltersConfig } from '../../../ui-api/filter/quick-filters.config';
export declare class FilterSettings {
    private filteringEnabled;
    private searchEnabled;
    private quickFiltersEnabled;
    constructor(filteringEnabled?: boolean, searchEnabled?: boolean, quickFiltersEnabled?: boolean);
    isFilteringEnabled(): boolean;
    isQuickFilteringEnabled(): boolean;
    isSearchingEnabled(): boolean;
    setFilterConfig(config: FilterConfig): void;
    setSearchingConfig(config: SearchConfig): void;
    setQuickFiltersConfig(config: QuickFiltersConfig): void;
}
