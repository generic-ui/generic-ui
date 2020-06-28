/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class StructureInfoPanelConfig {
    /**
     * @param {?=} enabled
     * @param {?=} infoDialog
     * @param {?=} columnsManager
     * @param {?=} schemaManager
     * @param {?=} sourceSize
     */
    constructor(enabled, infoDialog, columnsManager, schemaManager, sourceSize) {
        this.enabled = false;
        this.infoDialog = true;
        this.columnsManager = true;
        this.schemaManager = true;
        this.sourceSize = true;
        if (this.isNotUndefinedOrNull(enabled)) {
            this.enabled = enabled;
        }
        if (this.isNotUndefinedOrNull(infoDialog)) {
            this.infoDialog = infoDialog;
        }
        if (this.isNotUndefinedOrNull(columnsManager)) {
            this.columnsManager = columnsManager;
        }
        if (this.isNotUndefinedOrNull(sourceSize)) {
            this.sourceSize = sourceSize;
        }
        if (this.isNotUndefinedOrNull(schemaManager)) {
            this.schemaManager = schemaManager;
        }
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    isInfoDialogEnabled() {
        return this.infoDialog;
    }
    /**
     * @return {?}
     */
    isColumnsManagerEnabled() {
        return this.columnsManager;
    }
    /**
     * @return {?}
     */
    isSourceSizeEnabled() {
        return this.sourceSize;
    }
    /**
     * @return {?}
     */
    isSchemaManagerEnabled() {
        return this.schemaManager;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    isNotUndefinedOrNull(config) {
        return config !== undefined && config !== null;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.infoDialog;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.columnsManager;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.schemaManager;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.sourceSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7O0lBUXBDLFlBQVksT0FBaUIsRUFDMUIsVUFBb0IsRUFDcEIsY0FBd0IsRUFDeEIsYUFBdUIsRUFDdkIsVUFBb0I7UUFWTixZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsbUJBQWMsR0FBYSxJQUFJLENBQUM7UUFDaEMsa0JBQWEsR0FBYSxJQUFJLENBQUM7UUFDL0IsZUFBVSxHQUFhLElBQUksQ0FBQztRQVE1QyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQ25DO0lBRUYsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsTUFBZTtRQUMzQyxPQUFPLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDO0NBRUQ7Ozs7OztJQTFEQSwyQ0FBMkM7Ozs7O0lBQzNDLDhDQUE2Qzs7Ozs7SUFDN0Msa0RBQWlEOzs7OztJQUNqRCxpREFBZ0Q7Ozs7O0lBQ2hELDhDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSByZWFkb25seSBpbmZvRGlhbG9nPzogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uc01hbmFnZXI/OiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFNYW5hZ2VyPzogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlU2l6ZT86IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ/OiBib29sZWFuLFxuXHRcdFx0XHRpbmZvRGlhbG9nPzogYm9vbGVhbixcblx0XHRcdFx0Y29sdW1uc01hbmFnZXI/OiBib29sZWFuLFxuXHRcdFx0XHRzY2hlbWFNYW5hZ2VyPzogYm9vbGVhbixcblx0XHRcdFx0c291cmNlU2l6ZT86IGJvb2xlYW4pIHtcblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKGVuYWJsZWQpKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKGluZm9EaWFsb2cpKSB7XG5cdFx0XHR0aGlzLmluZm9EaWFsb2cgPSBpbmZvRGlhbG9nO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKGNvbHVtbnNNYW5hZ2VyKSkge1xuXHRcdFx0dGhpcy5jb2x1bW5zTWFuYWdlciA9IGNvbHVtbnNNYW5hZ2VyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKHNvdXJjZVNpemUpKSB7XG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKHNjaGVtYU1hbmFnZXIpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYU1hbmFnZXIgPSBzY2hlbWFNYW5hZ2VyO1xuXHRcdH1cblxuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0luZm9EaWFsb2dFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZm9EaWFsb2c7XG5cdH1cblxuXHRpc0NvbHVtbnNNYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGlzU291cmNlU2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0fVxuXG5cdGlzU2NoZW1hTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hTWFuYWdlcjtcblx0fVxuXG5cdHByaXZhdGUgaXNOb3RVbmRlZmluZWRPck51bGwoY29uZmlnOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZyAhPT0gbnVsbDtcblx0fVxuXG59XG4iXX0=