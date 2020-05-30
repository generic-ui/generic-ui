import { FilterConfig } from '../../../domain-api/filter/filter-config';
import { SearchConfig } from '../../../../../structure/search/domain-api/search-config';
import { QuickFiltersConfig } from '../../../domain-api/filter/quick-filters.config';
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
