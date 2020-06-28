/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilterSettings = /** @class */ (function () {
    function FilterSettings(filteringEnabled, searchEnabled, quickFiltersEnabled) {
        if (filteringEnabled === void 0) { filteringEnabled = false; }
        if (searchEnabled === void 0) { searchEnabled = false; }
        if (quickFiltersEnabled === void 0) { quickFiltersEnabled = false; }
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
    FilterSettings.prototype.isFilteringEnabled = /**
     * @return {?}
     */
    function () {
        return this.filteringEnabled;
    };
    /**
     * @return {?}
     */
    FilterSettings.prototype.isQuickFilteringEnabled = /**
     * @return {?}
     */
    function () {
        return this.quickFiltersEnabled;
    };
    /**
     * @return {?}
     */
    FilterSettings.prototype.isSearchingEnabled = /**
     * @return {?}
     */
    function () {
        return this.searchEnabled;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    FilterSettings.prototype.setFilterConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.filteringEnabled = config.enabled;
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    FilterSettings.prototype.setSearchingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.searchEnabled = config.enabled;
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    FilterSettings.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.quickFiltersEnabled = config.enabled;
        }
    };
    return FilterSettings;
}());
export { FilterSettings };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9maWx0ZXIuc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBUUMsd0JBQVksZ0JBQWlDLEVBQzFDLGFBQThCLEVBQzlCLG1CQUFvQztRQUYzQixpQ0FBQSxFQUFBLHdCQUFpQztRQUMxQyw4QkFBQSxFQUFBLHFCQUE4QjtRQUM5QixvQ0FBQSxFQUFBLDJCQUFvQztRQVIvQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0Isd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBSzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELDJDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGdEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDJDQUFrQjs7O0lBQWxCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsd0NBQWU7Ozs7SUFBZixVQUFnQixNQUFvQjtRQUNuQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QztJQUNGLENBQUM7Ozs7O0lBRUQsMkNBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQW9CO1FBQ3RDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNwQztJQUNGLENBQUM7Ozs7O0lBRUQsOENBQXFCOzs7O0lBQXJCLFVBQXNCLE1BQTBCO1FBQy9DLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzFDO0lBQ0YsQ0FBQztJQUVGLHFCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQzs7Ozs7OztJQTVDQSwwQ0FBMEM7Ozs7O0lBRTFDLHVDQUF1Qzs7Ozs7SUFFdkMsNkNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXR0aW5ncyB7XG5cblx0cHJpdmF0ZSBmaWx0ZXJpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHF1aWNrRmlsdGVyc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGZpbHRlcmluZ0VuYWJsZWQ7XG5cdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gc2VhcmNoRW5hYmxlZDtcblx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBxdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNGaWx0ZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcmluZ0VuYWJsZWQ7XG5cdH1cblxuXHRpc1F1aWNrRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNTZWFyY2hpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVuYWJsZWQ7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxufVxuIl19