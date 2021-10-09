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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7SUFZcEMsWUFBWSxPQUFpQixFQUMxQixVQUFvQixFQUNwQixjQUF3QixFQUN4QixhQUF1QixFQUN2QixVQUFvQjtRQWROLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBUTNDLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUNyQztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDbkM7SUFFRixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxNQUFlO1FBQzNDLE9BQU8sTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQ2hELENBQUM7Q0FFRDs7Ozs7O0lBOURBLDJDQUEwQzs7Ozs7SUFFMUMsOENBQTRDOzs7OztJQUU1QyxrREFBZ0Q7Ozs7O0lBRWhELGlEQUErQzs7Ozs7SUFFL0MsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpbmZvRGlhbG9nOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnNNYW5hZ2VyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYU1hbmFnZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlU2l6ZTogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZD86IGJvb2xlYW4sXG5cdFx0XHRcdGluZm9EaWFsb2c/OiBib29sZWFuLFxuXHRcdFx0XHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW4sXG5cdFx0XHRcdHNjaGVtYU1hbmFnZXI/OiBib29sZWFuLFxuXHRcdFx0XHRzb3VyY2VTaXplPzogYm9vbGVhbikge1xuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoZW5hYmxlZCkpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoaW5mb0RpYWxvZykpIHtcblx0XHRcdHRoaXMuaW5mb0RpYWxvZyA9IGluZm9EaWFsb2c7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoY29sdW1uc01hbmFnZXIpKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNNYW5hZ2VyID0gY29sdW1uc01hbmFnZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoc291cmNlU2l6ZSkpIHtcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoc2NoZW1hTWFuYWdlcikpIHtcblx0XHRcdHRoaXMuc2NoZW1hTWFuYWdlciA9IHNjaGVtYU1hbmFnZXI7XG5cdFx0fVxuXG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzSW5mb0RpYWxvZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5mb0RpYWxvZztcblx0fVxuXG5cdGlzQ29sdW1uc01hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNYW5hZ2VyO1xuXHR9XG5cblx0aXNTb3VyY2VTaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0aXNTY2hlbWFNYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFNYW5hZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBpc05vdFVuZGVmaW5lZE9yTnVsbChjb25maWc6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29uZmlnICE9PSB1bmRlZmluZWQgJiYgY29uZmlnICE9PSBudWxsO1xuXHR9XG5cbn1cbiJdfQ==