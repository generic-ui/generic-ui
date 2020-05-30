/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FilterSettings {
    /**
     * @param {?=} filteringEnabled
     * @param {?=} searchEnabled
     * @param {?=} quickFiltersEnabled
     */
    constructor(filteringEnabled = false, searchEnabled = false, quickFiltersEnabled = false) {
        this.filteringEnabled = false;
        this.searchEnabled = false;
        this.quickFiltersEnabled = false;
        this.filteringEnabled = filteringEnabled;
        this.searchEnabled = searchEnabled;
        this.quickFiltersEnabled = quickFiltersEnabled;
    }
    /**
     * @return {?}
     */
    isFilteringEnabled() {
        return this.filteringEnabled;
    }
    /**
     * @return {?}
     */
    isQuickFilteringEnabled() {
        return this.quickFiltersEnabled;
    }
    /**
     * @return {?}
     */
    isSearchingEnabled() {
        return this.searchEnabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setFilterConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.filteringEnabled = config.enabled;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.searchEnabled = config.enabled;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setQuickFiltersConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.quickFiltersEnabled = config.enabled;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterSettings.prototype.filteringEnabled;
    /**
     * @type {?}
     * @private
     */
    FilterSettings.prototype.searchEnabled;
    /**
     * @type {?}
     * @private
     */
    FilterSettings.prototype.quickFiltersEnabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci5zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQVExQixZQUFZLG1CQUE0QixLQUFLLEVBQzFDLGdCQUF5QixLQUFLLEVBQzlCLHNCQUErQixLQUFLO1FBUi9CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFLNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBb0I7UUFDbkMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE1BQW9CO1FBQ3RDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNwQztJQUNGLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsTUFBMEI7UUFDL0MsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDMUM7SUFDRixDQUFDO0NBRUQ7Ozs7OztJQTVDQSwwQ0FBMEM7Ozs7O0lBRTFDLHVDQUF1Qzs7Ozs7SUFFdkMsNkNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXR0aW5ncyB7XG5cblx0cHJpdmF0ZSBmaWx0ZXJpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHF1aWNrRmlsdGVyc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGZpbHRlcmluZ0VuYWJsZWQ7XG5cdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gc2VhcmNoRW5hYmxlZDtcblx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBxdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNGaWx0ZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcmluZ0VuYWJsZWQ7XG5cdH1cblxuXHRpc1F1aWNrRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNTZWFyY2hpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVuYWJsZWQ7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxufVxuIl19