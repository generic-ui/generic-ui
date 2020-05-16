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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBcUJyQyxZQUFvQixVQUFtQixLQUFLLEVBQ2pDLE9BQWdCLElBQUksRUFDcEIsU0FBa0IsS0FBSyxFQUN2QixpQkFBMEIsS0FBSztRQUh0QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7SUFDMUMsQ0FBQzs7OztJQXZCRCxNQUFNLENBQUMsT0FBTztRQUNiLE9BQU8sSUFBSSx5QkFBeUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUF3QjtRQUN6QyxPQUFPLElBQUkseUJBQXlCLENBQ25DLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLElBQUksRUFDWCxNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxjQUFjLENBQ3JCLENBQUM7SUFDSCxDQUFDOzs7O0lBY0QsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFFBQVE7O2NBRUQsS0FBSyxHQUFHLEVBQUU7UUFFaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLHlCQUF5QixDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDOztBQWxFdUIsOEJBQUksR0FBRyxNQUFNLENBQUM7QUFFZCxnQ0FBTSxHQUFHLFFBQVEsQ0FBQztBQUVsQixpQ0FBTyxHQUFHLFNBQVMsQ0FBQzs7Ozs7O0lBSjVDLCtCQUFzQzs7Ozs7SUFFdEMsaUNBQTBDOzs7OztJQUUxQyxrQ0FBNEM7Ozs7O0lBRWhDLDRDQUFnQzs7Ozs7SUFDekMseUNBQTRCOzs7OztJQUM1QiwyQ0FBK0I7Ozs7O0lBQy9CLG1EQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblxuXHRzdGF0aWMgZGVmYXVsdCgpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoKTtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQ29uZmlnKGNvbmZpZzogQ29sdW1uTWVudUNvbmZpZyk6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyhcblx0XHRcdGNvbmZpZy5lbmFibGVkLFxuXHRcdFx0Y29uZmlnLnNvcnQsXG5cdFx0XHRjb25maWcuZmlsdGVyLFxuXHRcdFx0Y29uZmlnLmNvbHVtbnNNYW5hZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BSU4gPSAnTWVudSc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRklMVEVSID0gJ0ZpbHRlcic7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09MVU1OUyA9ICdDb2x1bW5zJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3J0OiBib29sZWFuID0gdHJ1ZSxcblx0XHRcdFx0cHJpdmF0ZSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBjb2x1bW5zTWFuYWdlcjogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0KHRoaXMuc29ydCB8fCB0aGlzLmZpbHRlciB8fCB0aGlzLmNvbHVtbnNNYW5hZ2VyKTtcblx0fVxuXG5cdGlzTWFpbkVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzU29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXI7XG5cdH1cblxuXHRpc0NvbHVtbk1hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNYW5hZ2VyO1xuXHR9XG5cblx0Z2V0TWVudXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBtZW51cyA9IFtdO1xuXG5cdFx0aWYgKHRoaXMuaXNNYWluRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0TWFpbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNGaWx0ZXJpbmdFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRGaWx0ZXJNZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldENvbHVtbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbnVzO1xuXHR9XG5cblx0Z2V0QWN0aXZlTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldE1lbnVzKClbMF07XG5cdH1cblxuXHRnZXRNYWluTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLk1BSU47XG5cdH1cblxuXHRnZXRGaWx0ZXJNZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuRklMVEVSO1xuXHR9XG5cblx0Z2V0Q29sdW1uTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLkNPTFVNTlM7XG5cdH1cblxufVxuIl19