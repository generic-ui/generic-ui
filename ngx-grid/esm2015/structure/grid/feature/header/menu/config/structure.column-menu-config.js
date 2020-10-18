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
        this.mainMenu = 'Menu';
        this.filterMenu = 'Filter';
        this.columnsMenu = 'Columns';
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
        return this.mainMenu;
    }
    /**
     * @return {?}
     */
    getFilterMenu() {
        return this.filterMenu;
    }
    /**
     * @return {?}
     */
    getColumnMenu() {
        return this.columnsMenu;
    }
    /**
     * @param {?} mainMenu
     * @return {?}
     */
    setMainMenu(mainMenu) {
        this.mainMenu = mainMenu;
    }
    /**
     * @param {?} filterMenu
     * @return {?}
     */
    setFilterMenu(filterMenu) {
        this.filterMenu = filterMenu;
    }
    /**
     * @param {?} columnsMenu
     * @return {?}
     */
    setColumnsMenu(columnsMenu) {
        this.columnsMenu = columnsMenu;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.mainMenu;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.filterMenu;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuConfig.prototype.columnsMenu;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQXFCckMsWUFBb0IsVUFBbUIsS0FBSyxFQUNqQyxPQUFnQixJQUFJLEVBQ3BCLFNBQWtCLEtBQUssRUFDdkIsaUJBQTBCLEtBQUs7UUFIdEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBVGxDLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFFMUIsZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUU5QixnQkFBVyxHQUFXLFNBQVMsQ0FBQztJQU14QyxDQUFDOzs7O0lBdkJELE1BQU0sQ0FBQyxPQUFPO1FBQ2IsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQXdCO1FBQ3pDLE9BQU8sSUFBSSx5QkFBeUIsQ0FDbkMsTUFBTSxDQUFDLE9BQU8sRUFDZCxNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FDckIsQ0FBQztJQUNILENBQUM7Ozs7SUFjRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNsQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsUUFBUTs7Y0FFRCxLQUFLLEdBQUcsRUFBRTtRQUVoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRTtZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQW1CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Q0FFRDs7Ozs7O0lBaEZBLDZDQUFrQzs7Ozs7SUFFbEMsK0NBQXNDOzs7OztJQUV0QyxnREFBd0M7Ozs7O0lBRTVCLDRDQUFnQzs7Ozs7SUFDekMseUNBQTRCOzs7OztJQUM1QiwyQ0FBK0I7Ozs7O0lBQy9CLG1EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cblx0c3RhdGljIGRlZmF1bHQoKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKCk7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUNvbmZpZyhjb25maWc6IENvbHVtbk1lbnVDb25maWcpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGNvbmZpZy5zb3J0LFxuXHRcdFx0Y29uZmlnLmZpbHRlcixcblx0XHRcdGNvbmZpZy5jb2x1bW5zTWFuYWdlclxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIG1haW5NZW51OiBzdHJpbmcgPSAnTWVudSc7XG5cblx0cHJpdmF0ZSBmaWx0ZXJNZW51OiBzdHJpbmcgPSAnRmlsdGVyJztcblxuXHRwcml2YXRlIGNvbHVtbnNNZW51OiBzdHJpbmcgPSAnQ29sdW1ucyc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgc29ydDogYm9vbGVhbiA9IHRydWUsXG5cdFx0XHRcdHByaXZhdGUgZmlsdGVyOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdHByaXZhdGUgY29sdW1uc01hbmFnZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdCh0aGlzLnNvcnQgfHwgdGhpcy5maWx0ZXIgfHwgdGhpcy5jb2x1bW5zTWFuYWdlcik7XG5cdH1cblxuXHRpc01haW5FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc1NvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc0ZpbHRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyO1xuXHR9XG5cblx0aXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGdldE1lbnVzKCk6IEFycmF5PHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgbWVudXMgPSBbXTtcblxuXHRcdGlmICh0aGlzLmlzTWFpbkVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldE1haW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0RmlsdGVyTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRDb2x1bW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW51cztcblx0fVxuXG5cdGdldEFjdGl2ZU1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZW51cygpWzBdO1xuXHR9XG5cblx0Z2V0TWFpbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tYWluTWVudTtcblx0fVxuXG5cdGdldEZpbHRlck1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJNZW51O1xuXHR9XG5cblx0Z2V0Q29sdW1uTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNZW51O1xuXHR9XG5cblx0c2V0TWFpbk1lbnUobWFpbk1lbnU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMubWFpbk1lbnUgPSBtYWluTWVudTtcblx0fVxuXG5cdHNldEZpbHRlck1lbnUoZmlsdGVyTWVudTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNZW51ID0gZmlsdGVyTWVudTtcblx0fVxuXG5cdHNldENvbHVtbnNNZW51KGNvbHVtbnNNZW51OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNNZW51ID0gY29sdW1uc01lbnU7XG5cdH1cblxufVxuIl19