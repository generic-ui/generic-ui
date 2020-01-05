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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvZmlsdGVyLnNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtJQVFDLHdCQUFZLGdCQUFpQyxFQUMxQyxhQUE4QixFQUM5QixtQkFBb0M7UUFGM0IsaUNBQUEsRUFBQSx3QkFBaUM7UUFDMUMsOEJBQUEsRUFBQSxxQkFBOEI7UUFDOUIsb0NBQUEsRUFBQSwyQkFBb0M7UUFSL0IscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUs1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCwyQ0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxnREFBdUI7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCwyQ0FBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHdDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBb0I7UUFDbkMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkM7SUFDRixDQUFDOzs7OztJQUVELDJDQUFrQjs7OztJQUFsQixVQUFtQixNQUFvQjtRQUN0QyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDcEM7SUFDRixDQUFDOzs7OztJQUVELDhDQUFxQjs7OztJQUFyQixVQUFzQixNQUEwQjtRQUMvQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMxQztJQUNGLENBQUM7SUFFRixxQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7Ozs7Ozs7SUE1Q0EsMENBQTBDOzs7OztJQUUxQyx1Q0FBdUM7Ozs7O0lBRXZDLDZDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXR0aW5ncyB7XG5cblx0cHJpdmF0ZSBmaWx0ZXJpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHF1aWNrRmlsdGVyc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGZpbHRlcmluZ0VuYWJsZWQ7XG5cdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gc2VhcmNoRW5hYmxlZDtcblx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBxdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNGaWx0ZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcmluZ0VuYWJsZWQ7XG5cdH1cblxuXHRpc1F1aWNrRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkO1xuXHR9XG5cblx0aXNTZWFyY2hpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVuYWJsZWQ7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZmlsdGVyaW5nRW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxufVxuIl19