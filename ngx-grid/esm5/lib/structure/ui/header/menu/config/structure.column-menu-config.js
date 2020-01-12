/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureColumnMenuConfig = /** @class */ (function () {
    function StructureColumnMenuConfig(enabled, sort, filter, columns) {
        if (enabled === void 0) { enabled = false; }
        if (sort === void 0) { sort = true; }
        if (filter === void 0) { filter = false; }
        if (columns === void 0) { columns = false; }
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columns = columns;
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
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columns);
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled &&
            (this.sort || this.filter || this.columns);
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
    StructureColumnMenuConfig.prototype.isSort = /**
     * @return {?}
     */
    function () {
        return this.sort;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isFilter = /**
     * @return {?}
     */
    function () {
        return this.filter;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.isColumns = /**
     * @return {?}
     */
    function () {
        return this.columns;
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
        if (this.isFilter()) {
            menus.push(this.getFilterMenu());
        }
        if (this.isColumns()) {
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
    StructureColumnMenuConfig.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFxQkMsbUNBQW9CLE9BQXdCLEVBQ2pDLElBQW9CLEVBQ3BCLE1BQXVCLEVBQ3ZCLE9BQXdCO1FBSGYsd0JBQUEsRUFBQSxlQUF3QjtRQUNqQyxxQkFBQSxFQUFBLFdBQW9CO1FBQ3BCLHVCQUFBLEVBQUEsY0FBdUI7UUFDdkIsd0JBQUEsRUFBQSxlQUF3QjtRQUhmLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQ25DLENBQUM7Ozs7SUF2Qk0saUNBQU87OztJQUFkO1FBQ0MsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBVTs7OztJQUFqQixVQUFrQixNQUF3QjtRQUN6QyxPQUFPLElBQUkseUJBQXlCLENBQ25DLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxPQUFPLENBQ2QsQ0FBQztJQUNILENBQUM7Ozs7SUFjRCw2Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCwwQ0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsNkNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7O1lBRU8sS0FBSyxHQUFHLEVBQUU7UUFFaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLHlCQUF5QixDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQztJQWxFdUIsOEJBQUksR0FBRyxNQUFNLENBQUM7SUFFZCxnQ0FBTSxHQUFHLFFBQVEsQ0FBQztJQUVsQixpQ0FBTyxHQUFHLFNBQVMsQ0FBQztJQWdFN0MsZ0NBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQW5GWSx5QkFBeUI7Ozs7OztJQWVyQywrQkFBc0M7Ozs7O0lBRXRDLGlDQUEwQzs7Ozs7SUFFMUMsa0NBQTRDOzs7OztJQUVoQyw0Q0FBZ0M7Ozs7O0lBQ3pDLHlDQUE0Qjs7Ozs7SUFDNUIsMkNBQStCOzs7OztJQUMvQiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cblx0c3RhdGljIGRlZmF1bHQoKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKCk7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUNvbmZpZyhjb25maWc6IENvbHVtbk1lbnVDb25maWcpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGNvbmZpZy5zb3J0LFxuXHRcdFx0Y29uZmlnLmZpbHRlcixcblx0XHRcdGNvbmZpZy5jb2x1bW5zXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BSU4gPSAnTWVudSc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRklMVEVSID0gJ0ZpbHRlcic7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09MVU1OUyA9ICdDb2x1bW5zJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3J0OiBib29sZWFuID0gdHJ1ZSxcblx0XHRcdFx0cHJpdmF0ZSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBjb2x1bW5zOiBib29sZWFuID0gZmFsc2UpIHtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmXG5cdFx0XHQodGhpcy5zb3J0IHx8IHRoaXMuZmlsdGVyIHx8IHRoaXMuY29sdW1ucyk7XG5cdH1cblxuXHRpc01haW5FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzRmlsdGVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcjtcblx0fVxuXG5cdGlzQ29sdW1ucygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0Z2V0TWVudXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBtZW51cyA9IFtdO1xuXG5cdFx0aWYgKHRoaXMuaXNNYWluRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0TWFpbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNGaWx0ZXIoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldEZpbHRlck1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNDb2x1bW5zKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRDb2x1bW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW51cztcblx0fVxuXG5cdGdldEFjdGl2ZU1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZW51cygpWzBdO1xuXHR9XG5cblx0Z2V0TWFpbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5NQUlOO1xuXHR9XG5cblx0Z2V0RmlsdGVyTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLkZJTFRFUjtcblx0fVxuXG5cdGdldENvbHVtbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5DT0xVTU5TO1xuXHR9XG5cbn1cbiJdfQ==