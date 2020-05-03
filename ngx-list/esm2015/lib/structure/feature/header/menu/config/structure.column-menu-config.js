/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class StructureColumnMenuConfig {
    /**
     * @param {?=} enabled
     * @param {?=} sort
     * @param {?=} filter
     * @param {?=} columnsManager
     */
    constructor(enabled = false, sort = true, filter = false, columnsManager = false) {
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
    }
    /**
     * @return {?}
     */
    static default() {
        return new StructureColumnMenuConfig();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static fromConfig(config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    }
    /**
     * @return {?}
     */
    isMainEnabled() {
        return this.sort;
    }
    /**
     * @return {?}
     */
    isSortingEnabled() {
        return this.sort;
    }
    /**
     * @return {?}
     */
    isFilteringEnabled() {
        return this.filter;
    }
    /**
     * @return {?}
     */
    isColumnManagerEnabled() {
        return this.columnsManager;
    }
    /**
     * @return {?}
     */
    getMenus() {
        /** @type {?} */
        const menus = [];
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
    }
    /**
     * @return {?}
     */
    getActiveMenu() {
        return this.getMenus()[0];
    }
    /**
     * @return {?}
     */
    getMainMenu() {
        return StructureColumnMenuConfig.MAIN;
    }
    /**
     * @return {?}
     */
    getFilterMenu() {
        return StructureColumnMenuConfig.FILTER;
    }
    /**
     * @return {?}
     */
    getColumnMenu() {
        return StructureColumnMenuConfig.COLUMNS;
    }
}
StructureColumnMenuConfig.MAIN = 'Menu';
StructureColumnMenuConfig.FILTER = 'Filter';
StructureColumnMenuConfig.COLUMNS = 'Columns';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBcUJyQyxZQUFvQixVQUFtQixLQUFLLEVBQ2pDLE9BQWdCLElBQUksRUFDcEIsU0FBa0IsS0FBSyxFQUN2QixpQkFBMEIsS0FBSztRQUh0QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7SUFDMUMsQ0FBQzs7OztJQXZCRCxNQUFNLENBQUMsT0FBTztRQUNiLE9BQU8sSUFBSSx5QkFBeUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUF3QjtRQUN6QyxPQUFPLElBQUkseUJBQXlCLENBQ25DLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxjQUFjLENBQ3JCLENBQUM7SUFDSCxDQUFDOzs7O0lBY0QsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFFBQVE7O2NBRUQsS0FBSyxHQUFHLEVBQUU7UUFFaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLHlCQUF5QixDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDOztBQWxFdUIsOEJBQUksR0FBRyxNQUFNLENBQUM7QUFFZCxnQ0FBTSxHQUFHLFFBQVEsQ0FBQztBQUVsQixpQ0FBTyxHQUFHLFNBQVMsQ0FBQzs7Ozs7O0lBSjVDLCtCQUFzQzs7Ozs7SUFFdEMsaUNBQTBDOzs7OztJQUUxQyxrQ0FBNEM7Ozs7O0lBRWhDLDRDQUFnQzs7Ozs7SUFDekMseUNBQTRCOzs7OztJQUM1QiwyQ0FBK0I7Ozs7O0lBQy9CLG1EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlLWFwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cblx0c3RhdGljIGRlZmF1bHQoKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKCk7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUNvbmZpZyhjb25maWc6IENvbHVtbk1lbnVDb25maWcpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGNvbmZpZy5zb3J0LFxuXHRcdFx0Y29uZmlnLmZpbHRlcixcblx0XHRcdGNvbmZpZy5jb2x1bW5zTWFuYWdlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQUlOID0gJ01lbnUnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZJTFRFUiA9ICdGaWx0ZXInO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTFVNTlMgPSAnQ29sdW1ucyc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgc29ydDogYm9vbGVhbiA9IHRydWUsXG5cdFx0XHRcdHByaXZhdGUgZmlsdGVyOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgY29sdW1uc01hbmFnZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdCh0aGlzLnNvcnQgfHwgdGhpcy5maWx0ZXIgfHwgdGhpcy5jb2x1bW5zTWFuYWdlcik7XG5cdH1cblxuXHRpc01haW5FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc1NvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc0ZpbHRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyO1xuXHR9XG5cblx0aXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGdldE1lbnVzKCk6IEFycmF5PHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgbWVudXMgPSBbXTtcblxuXHRcdGlmICh0aGlzLmlzTWFpbkVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldE1haW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0RmlsdGVyTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRDb2x1bW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW51cztcblx0fVxuXG5cdGdldEFjdGl2ZU1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZW51cygpWzBdO1xuXHR9XG5cblx0Z2V0TWFpbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5NQUlOO1xuXHR9XG5cblx0Z2V0RmlsdGVyTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLkZJTFRFUjtcblx0fVxuXG5cdGdldENvbHVtbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5DT0xVTU5TO1xuXHR9XG5cbn1cbiJdfQ==