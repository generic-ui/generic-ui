import { FilterConfig } from '../api/config/filter.config';
import { SearchConfig } from '../../../search/src/api/config/search-config';
import { QuickFiltersConfig } from '../api/quick-filter/quick-filters.config';
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
