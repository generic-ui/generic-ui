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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci5zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7SUFRQyx3QkFBWSxnQkFBaUMsRUFDMUMsYUFBOEIsRUFDOUIsbUJBQW9DO1FBRjNCLGlDQUFBLEVBQUEsd0JBQWlDO1FBQzFDLDhCQUFBLEVBQUEscUJBQThCO1FBQzlCLG9DQUFBLEVBQUEsMkJBQW9DO1FBUi9CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFLNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsMkNBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsZ0RBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsMkNBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQW9CO1FBQ25DLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCwyQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBb0I7UUFDdEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3BDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCw4Q0FBcUI7Ozs7SUFBckIsVUFBc0IsTUFBMEI7UUFDL0MsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDMUM7SUFDRixDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDOzs7Ozs7O0lBNUNBLDBDQUEwQzs7Ozs7SUFFMUMsdUNBQXVDOzs7OztJQUV2Qyw2Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyU2V0dGluZ3Mge1xuXG5cdHByaXZhdGUgZmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgc2VhcmNoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcXVpY2tGaWx0ZXJzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGZpbHRlcmluZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0c2VhcmNoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLmZpbHRlcmluZ0VuYWJsZWQgPSBmaWx0ZXJpbmdFbmFibGVkO1xuXHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IHNlYXJjaEVuYWJsZWQ7XG5cdFx0dGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkID0gcXVpY2tGaWx0ZXJzRW5hYmxlZDtcblx0fVxuXG5cdGlzRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJpbmdFbmFibGVkO1xuXHR9XG5cblx0aXNRdWlja0ZpbHRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucXVpY2tGaWx0ZXJzRW5hYmxlZDtcblx0fVxuXG5cdGlzU2VhcmNoaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hFbmFibGVkO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmZpbHRlcmluZ0VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==