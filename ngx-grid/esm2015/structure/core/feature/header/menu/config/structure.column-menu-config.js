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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQXFCckMsWUFBb0IsVUFBbUIsS0FBSyxFQUNqQyxPQUFnQixJQUFJLEVBQ3BCLFNBQWtCLEtBQUssRUFDdkIsaUJBQTBCLEtBQUs7UUFIdEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO0lBQzFDLENBQUM7Ozs7SUF2QkQsTUFBTSxDQUFDLE9BQU87UUFDYixPQUFPLElBQUkseUJBQXlCLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBd0I7UUFDekMsT0FBTyxJQUFJLHlCQUF5QixDQUNuQyxNQUFNLENBQUMsT0FBTyxFQUNkLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsY0FBYyxDQUNyQixDQUFDO0lBQ0gsQ0FBQzs7OztJQWNELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxRQUFROztjQUVELEtBQUssR0FBRyxFQUFFO1FBRWhCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLHlCQUF5QixDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8seUJBQXlCLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7QUFsRXVCLDhCQUFJLEdBQUcsTUFBTSxDQUFDO0FBRWQsZ0NBQU0sR0FBRyxRQUFRLENBQUM7QUFFbEIsaUNBQU8sR0FBRyxTQUFTLENBQUM7Ozs7OztJQUo1QywrQkFBc0M7Ozs7O0lBRXRDLGlDQUEwQzs7Ozs7SUFFMUMsa0NBQTRDOzs7OztJQUVoQyw0Q0FBZ0M7Ozs7O0lBQ3pDLHlDQUE0Qjs7Ozs7SUFDNUIsMkNBQStCOzs7OztJQUMvQixtREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluLWFwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cblx0c3RhdGljIGRlZmF1bHQoKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKCk7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUNvbmZpZyhjb25maWc6IENvbHVtbk1lbnVDb25maWcpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGNvbmZpZy5zb3J0LFxuXHRcdFx0Y29uZmlnLmZpbHRlcixcblx0XHRcdGNvbmZpZy5jb2x1bW5zTWFuYWdlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQUlOID0gJ01lbnUnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZJTFRFUiA9ICdGaWx0ZXInO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTFVNTlMgPSAnQ29sdW1ucyc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgc29ydDogYm9vbGVhbiA9IHRydWUsXG5cdFx0XHRcdHByaXZhdGUgZmlsdGVyOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgY29sdW1uc01hbmFnZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdCh0aGlzLnNvcnQgfHwgdGhpcy5maWx0ZXIgfHwgdGhpcy5jb2x1bW5zTWFuYWdlcik7XG5cdH1cblxuXHRpc01haW5FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc1NvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc0ZpbHRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyO1xuXHR9XG5cblx0aXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGdldE1lbnVzKCk6IEFycmF5PHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgbWVudXMgPSBbXTtcblxuXHRcdGlmICh0aGlzLmlzTWFpbkVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldE1haW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0RmlsdGVyTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRDb2x1bW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW51cztcblx0fVxuXG5cdGdldEFjdGl2ZU1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZW51cygpWzBdO1xuXHR9XG5cblx0Z2V0TWFpbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5NQUlOO1xuXHR9XG5cblx0Z2V0RmlsdGVyTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLkZJTFRFUjtcblx0fVxuXG5cdGdldENvbHVtbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5DT0xVTU5TO1xuXHR9XG5cbn1cbiJdfQ==