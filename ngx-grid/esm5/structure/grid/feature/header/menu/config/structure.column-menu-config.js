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
        this.mainMenu = 'Menu';
        this.filterMenu = 'Filter';
        this.columnsMenu = 'Columns';
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
        return this.mainMenu;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getFilterMenu = /**
     * @return {?}
     */
    function () {
        return this.filterMenu;
    };
    /**
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.getColumnMenu = /**
     * @return {?}
     */
    function () {
        return this.columnsMenu;
    };
    /**
     * @param {?} mainMenu
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.setMainMenu = /**
     * @param {?} mainMenu
     * @return {?}
     */
    function (mainMenu) {
        this.mainMenu = mainMenu;
    };
    /**
     * @param {?} filterMenu
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.setFilterMenu = /**
     * @param {?} filterMenu
     * @return {?}
     */
    function (filterMenu) {
        this.filterMenu = filterMenu;
    };
    /**
     * @param {?} columnsMenu
     * @return {?}
     */
    StructureColumnMenuConfig.prototype.setColumnsMenu = /**
     * @param {?} columnsMenu
     * @return {?}
     */
    function (columnsMenu) {
        this.columnsMenu = columnsMenu;
    };
    return StructureColumnMenuConfig;
}());
export { StructureColumnMenuConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFxQkMsbUNBQW9CLE9BQXdCLEVBQ2pDLElBQW9CLEVBQ3BCLE1BQXVCLEVBQ3ZCLGNBQStCO1FBSHRCLHdCQUFBLEVBQUEsZUFBd0I7UUFDakMscUJBQUEsRUFBQSxXQUFvQjtRQUNwQix1QkFBQSxFQUFBLGNBQXVCO1FBQ3ZCLCtCQUFBLEVBQUEsc0JBQStCO1FBSHRCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQVRsQyxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRTFCLGVBQVUsR0FBVyxRQUFRLENBQUM7UUFFOUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7SUFNeEMsQ0FBQzs7OztJQXZCTSxpQ0FBTzs7O0lBQWQ7UUFDQyxPQUFPLElBQUkseUJBQXlCLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVNLG9DQUFVOzs7O0lBQWpCLFVBQWtCLE1BQXdCO1FBQ3pDLE9BQU8sSUFBSSx5QkFBeUIsQ0FDbkMsTUFBTSxDQUFDLE9BQU8sRUFDZCxNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FDckIsQ0FBQztJQUNILENBQUM7Ozs7SUFjRCw2Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxvREFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsc0RBQWtCOzs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDBEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7O1lBRU8sS0FBSyxHQUFHLEVBQUU7UUFFaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELGlEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGlEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsaURBQWE7Ozs7SUFBYixVQUFjLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLFdBQW1CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFFRixnQ0FBQztBQUFELENBQUMsQUEvRkQsSUErRkM7Ozs7Ozs7SUFoRkEsNkNBQWtDOzs7OztJQUVsQywrQ0FBc0M7Ozs7O0lBRXRDLGdEQUF3Qzs7Ozs7SUFFNUIsNENBQWdDOzs7OztJQUN6Qyx5Q0FBNEI7Ozs7O0lBQzVCLDJDQUErQjs7Ozs7SUFDL0IsbURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblxuXHRzdGF0aWMgZGVmYXVsdCgpOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcoKTtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQ29uZmlnKGNvbmZpZzogQ29sdW1uTWVudUNvbmZpZyk6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyhcblx0XHRcdGNvbmZpZy5lbmFibGVkLFxuXHRcdFx0Y29uZmlnLnNvcnQsXG5cdFx0XHRjb25maWcuZmlsdGVyLFxuXHRcdFx0Y29uZmlnLmNvbHVtbnNNYW5hZ2VyXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgbWFpbk1lbnU6IHN0cmluZyA9ICdNZW51JztcblxuXHRwcml2YXRlIGZpbHRlck1lbnU6IHN0cmluZyA9ICdGaWx0ZXInO1xuXG5cdHByaXZhdGUgY29sdW1uc01lbnU6IHN0cmluZyA9ICdDb2x1bW5zJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3J0OiBib29sZWFuID0gdHJ1ZSxcblx0XHRcdFx0cHJpdmF0ZSBmaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0cHJpdmF0ZSBjb2x1bW5zTWFuYWdlcjogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAmJlxuXHRcdFx0KHRoaXMuc29ydCB8fCB0aGlzLmZpbHRlciB8fCB0aGlzLmNvbHVtbnNNYW5hZ2VyKTtcblx0fVxuXG5cdGlzTWFpbkVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzU29ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydDtcblx0fVxuXG5cdGlzRmlsdGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXI7XG5cdH1cblxuXHRpc0NvbHVtbk1hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNYW5hZ2VyO1xuXHR9XG5cblx0Z2V0TWVudXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBtZW51cyA9IFtdO1xuXG5cdFx0aWYgKHRoaXMuaXNNYWluRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0TWFpbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNGaWx0ZXJpbmdFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRGaWx0ZXJNZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldENvbHVtbk1lbnUoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbnVzO1xuXHR9XG5cblx0Z2V0QWN0aXZlTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldE1lbnVzKClbMF07XG5cdH1cblxuXHRnZXRNYWluTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1haW5NZW51O1xuXHR9XG5cblx0Z2V0RmlsdGVyTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlck1lbnU7XG5cdH1cblxuXHRnZXRDb2x1bW5NZW51KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc01lbnU7XG5cdH1cblxuXHRzZXRNYWluTWVudShtYWluTWVudTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5tYWluTWVudSA9IG1haW5NZW51O1xuXHR9XG5cblx0c2V0RmlsdGVyTWVudShmaWx0ZXJNZW51OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1lbnUgPSBmaWx0ZXJNZW51O1xuXHR9XG5cblx0c2V0Q29sdW1uc01lbnUoY29sdW1uc01lbnU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uc01lbnUgPSBjb2x1bW5zTWVudTtcblx0fVxuXG59XG4iXX0=