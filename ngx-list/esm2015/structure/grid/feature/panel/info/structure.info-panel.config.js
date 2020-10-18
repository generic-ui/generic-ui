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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7OztJQVFwQyxZQUFZLE9BQWlCLEVBQzFCLFVBQW9CLEVBQ3BCLGNBQXdCLEVBQ3hCLGFBQXVCLEVBQ3ZCLFVBQW9CO1FBVk4sWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsSUFBSSxDQUFDO1FBQy9CLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFRNUMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNuQztJQUVGLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLE1BQWU7UUFDM0MsT0FBTyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDaEQsQ0FBQztDQUVEOzs7Ozs7SUExREEsMkNBQTJDOzs7OztJQUMzQyw4Q0FBNkM7Ozs7O0lBQzdDLGtEQUFpRDs7Ozs7SUFDakQsaURBQWdEOzs7OztJQUNoRCw4Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgcmVhZG9ubHkgaW5mb0RpYWxvZz86IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hTWFuYWdlcj86IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVNpemU/OiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkPzogYm9vbGVhbixcblx0XHRcdFx0aW5mb0RpYWxvZz86IGJvb2xlYW4sXG5cdFx0XHRcdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbixcblx0XHRcdFx0c2NoZW1hTWFuYWdlcj86IGJvb2xlYW4sXG5cdFx0XHRcdHNvdXJjZVNpemU/OiBib29sZWFuKSB7XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChlbmFibGVkKSkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChpbmZvRGlhbG9nKSkge1xuXHRcdFx0dGhpcy5pbmZvRGlhbG9nID0gaW5mb0RpYWxvZztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChjb2x1bW5zTWFuYWdlcikpIHtcblx0XHRcdHRoaXMuY29sdW1uc01hbmFnZXIgPSBjb2x1bW5zTWFuYWdlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChzb3VyY2VTaXplKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChzY2hlbWFNYW5hZ2VyKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFNYW5hZ2VyID0gc2NoZW1hTWFuYWdlcjtcblx0XHR9XG5cblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNJbmZvRGlhbG9nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmZvRGlhbG9nO1xuXHR9XG5cblx0aXNDb2x1bW5zTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc01hbmFnZXI7XG5cdH1cblxuXHRpc1NvdXJjZVNpemVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRpc1NjaGVtYU1hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYU1hbmFnZXI7XG5cdH1cblxuXHRwcml2YXRlIGlzTm90VW5kZWZpbmVkT3JOdWxsKGNvbmZpZzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb25maWcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcgIT09IG51bGw7XG5cdH1cblxufVxuIl19