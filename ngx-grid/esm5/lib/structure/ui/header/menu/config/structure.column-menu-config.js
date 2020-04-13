/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureColumnMenuConfig = /** @class */ (function () {
    function StructureColumnMenuConfig(enabled, sort, filter, columnsManager) {
        if (enabled === void 0) { enabled = false; }
        if (sort === void 0) { sort = true; }
        if (filter === void 0) { filter = false; }
        if (columnsManager === void 0) { columnsManager = false; }
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
    }
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.default = /**
     * @return {?}
     */
    function () {
        return new StructureColumnMenuConfig();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureColumnMenuConfig.fromConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isMainEnabled = /**
     * @return {?}
     */
    function () {
        return this.sort;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isSortingEnabled = /**
     * @return {?}
     */
    function () {
        return this.sort;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isFilteringEnabled = /**
     * @return {?}
     */
    function () {
        return this.filter;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isColumnManagerEnabled = /**
     * @return {?}
     */
    function () {
        return this.columnsManager;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getMenus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menus = [];
        if (this.isMainEnabled()) {
            menus.push(this.getMainMenu());
        }
        if (this.isFilteringEnabled()) {
            menus.push(this.getFilterMenu());
        }
        if (this.isColumnManagerEnabled()) {
            menus.push(this.getColumnMenu());
        }
        return menus;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getActiveMenu = /**
     * @return {?}
     */
    function () {
        return this.getMenus()[0];
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getMainMenu = /**
     * @return {?}
     */
    function () {
        return StructureColumnMenuConfig.MAIN;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getFilterMenu = /**
     * @return {?}
     */
    function () {
        return StructureColumnMenuConfig.FILTER;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getColumnMenu = /**
     * @return {?}
     */
    function () {
        return StructureColumnMenuConfig.COLUMNS;
    };
    StructureColumnMenuConfig.MAIN = 'Menu';
    StructureColumnMenuConfig.FILTER = 'Filter';
    StructureColumnMenuConfig.COLUMNS = 'Columns';
    return StructureColumnMenuConfig;
}());
export { StructureColumnMenuConfig };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.MAIN;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.FILTER;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.COLUMNS;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.filter;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.columnsManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFxQkMsbUNBQW9CLE9BQXdCLEVBQ2pDLElBQW9CLEVBQ3BCLE1BQXVCLEVBQ3ZCLGNBQStCO1FBSHRCLHdCQUFBLEVBQUEsZUFBd0I7UUFDakMscUJBQUEsRUFBQSxXQUFvQjtRQUNwQix1QkFBQSxFQUFBLGNBQXVCO1FBQ3ZCLCtCQUFBLEVBQUEsc0JBQStCO1FBSHRCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtJQUMxQyxDQUFDOzs7O0lBdkJNLGlDQUFPOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSx5QkFBeUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sb0NBQVU7Ozs7SUFBakIsVUFBa0IsTUFBd0I7UUFDekMsT0FBTyxJQUFJLHlCQUF5QixDQUNuQyxNQUFNLENBQUMsT0FBTyxFQUNkLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsY0FBYyxDQUNyQixDQUFDO0lBQ0gsQ0FBQzs7OztJQWNELDZDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELG9EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxzREFBa0I7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsMERBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjs7WUFFTyxLQUFLLEdBQUcsRUFBRTtRQUVoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRTtZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLHlCQUF5QixDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQztJQWxFdUIsOEJBQUksR0FBRyxNQUFNLENBQUM7SUFFZCxnQ0FBTSxHQUFHLFFBQVEsQ0FBQztJQUVsQixpQ0FBTyxHQUFHLFNBQVMsQ0FBQztJQWdFN0MsZ0NBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQW5GWSx5QkFBeUI7Ozs7OztJQWVyQywrQkFBc0M7Ozs7O0lBRXRDLGlDQUEwQzs7Ozs7SUFFMUMsa0NBQTRDOzs7OztJQUVoQyw0Q0FBZ0M7Ozs7O0lBQ3pDLHlDQUE0Qjs7Ozs7SUFDNUIsMkNBQStCOzs7OztJQUMvQixtREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblxuXHRzdGF0aWMgZGVmYXVsdCgpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoKTtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQ29uZmlnKGNvbmZpZzogQ29sdW1uTWVudUNvbmZpZyk6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyhcblx0XHRcdGNvbmZpZy5lbmFibGVkLFxuXHRcdFx0Y29uZmlnLnNvcnQsXG5cdFx0XHRjb25maWcuZmlsdGVyLFxuXHRcdFx0Y29uZmlnLmNvbHVtbnNNYW5hZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BSU4gPSAnTWVudSc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRklMVEVSID0gJ0ZpbHRlcic7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09MVU1OUyA9ICdDb2x1bW5zJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3J0OiBib29sZWFuID0gdHJ1ZSxcblx0XHRcdFx0cHJpdmF0ZSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBjb2x1bW5zTWFuYWdlcjogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0KHRoaXMuc29ydCB8fCB0aGlzLmZpbHRlciB8fCB0aGlzLmNvbHVtbnNNYW5hZ2VyKTtcblx0fVxuXG5cdGlzTWFpbkVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzU29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXI7XG5cdH1cblxuXHRpc0NvbHVtbk1hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNYW5hZ2VyO1xuXHR9XG5cblx0Z2V0TWVudXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBtZW51cyA9IFtdO1xuXG5cdFx0aWYgKHRoaXMuaXNNYWluRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0TWFpbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNGaWx0ZXJpbmdFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRGaWx0ZXJNZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldENvbHVtbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbnVzO1xuXHR9XG5cblx0Z2V0QWN0aXZlTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldE1lbnVzKClbMF07XG5cdH1cblxuXHRnZXRNYWluTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLk1BSU47XG5cdH1cblxuXHRnZXRGaWx0ZXJNZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuRklMVEVSO1xuXHR9XG5cblx0Z2V0Q29sdW1uTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLkNPTFVNTlM7XG5cdH1cblxufVxuIl19