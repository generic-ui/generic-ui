/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from './schema-theme';
import { SchemaRowColoring } from './schema-row-coloring';
var SchemaAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaAggregate, _super);
    function SchemaAggregate(id) {
        var _this = _super.call(this, id, 'SchemaAggregate') || this;
        _this.horizontalGrid = SchemaAggregate.DEFAULT_HORIZONTAL_GRID;
        _this.verticalGrid = SchemaAggregate.DEFAULT_VERTICAL_GRID;
        _this.theme = SchemaAggregate.DEFAULT_THEME;
        _this.rowColoring = SchemaAggregate.DEFAULT_ROW_COLORING;
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getRowColoring = /**
     * @return {?}
     */
    function () {
        return this.rowColoring;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.theme;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.isVerticalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalGrid;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.isHorizontalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.horizontalGrid;
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    SchemaAggregate.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        if (theme === SchemaTheme.MATERIAL) {
            this.rowColoring = SchemaRowColoring.NONE;
            this.verticalGrid = false;
        }
        if (theme === SchemaTheme.LIGHT) {
            this.rowColoring = SchemaRowColoring.NONE;
            this.verticalGrid = false;
        }
        if (theme === SchemaTheme.DARK) {
            this.rowColoring = SchemaRowColoring.NONE;
            this.verticalGrid = false;
        }
        if (theme === SchemaTheme.GENERIC) {
            this.rowColoring = SchemaRowColoring.ODD;
        }
    };
    /**
     * @param {?} coloring
     * @return {?}
     */
    SchemaAggregate.prototype.setRowColoring = /**
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        this.rowColoring = coloring;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setVerticalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.verticalGrid = enabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHorizontalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.horizontalGrid = enabled;
    };
    SchemaAggregate.DEFAULT_THEME = SchemaTheme.GENERIC;
    SchemaAggregate.DEFAULT_ROW_COLORING = SchemaRowColoring.ODD;
    SchemaAggregate.DEFAULT_VERTICAL_GRID = true;
    SchemaAggregate.DEFAULT_HORIZONTAL_GRID = true;
    return SchemaAggregate;
}(AggregateRoot));
export { SchemaAggregate };
if (false) {
    /** @type {?} */
    SchemaAggregate.DEFAULT_THEME;
    /** @type {?} */
    SchemaAggregate.DEFAULT_ROW_COLORING;
    /** @type {?} */
    SchemaAggregate.DEFAULT_VERTICAL_GRID;
    /** @type {?} */
    SchemaAggregate.DEFAULT_HORIZONTAL_GRID;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.horizontalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.verticalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7SUFBcUMsMkNBQXVCO0lBa0IzRCx5QkFBWSxFQUFZO1FBQXhCLFlBQ0Msa0JBQU0sRUFBRSxFQUFFLGlCQUFpQixDQUFDLFNBSzVCO1FBSkEsS0FBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUMsdUJBQXVCLENBQUM7UUFDOUQsS0FBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMscUJBQXFCLENBQUM7UUFDMUQsS0FBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQzNDLEtBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDOztJQUN6RCxDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELCtDQUFxQjs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxpREFBdUI7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDMUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDO1NBQ3pDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsUUFBMkI7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUF6RWUsNkJBQWEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBRXBDLG9DQUFvQixHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztJQUU3QyxxQ0FBcUIsR0FBRyxJQUFJLENBQUM7SUFFN0IsdUNBQXVCLEdBQUcsSUFBSSxDQUFDO0lBb0VoRCxzQkFBQztDQUFBLEFBNUVELENBQXFDLGFBQWEsR0E0RWpEO1NBNUVZLGVBQWU7OztJQUUzQiw4QkFBb0Q7O0lBRXBELHFDQUE2RDs7SUFFN0Qsc0NBQTZDOztJQUU3Qyx3Q0FBK0M7Ozs7O0lBRS9DLHlDQUFnQzs7Ozs7SUFFaEMsdUNBQThCOzs7OztJQUU5QixnQ0FBMkI7Ozs7O0lBRTNCLHNDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PFNjaGVtYUlkPiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVEhFTUUgPSBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1JPV19DT0xPUklORyA9IFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9WRVJUSUNBTF9HUklEID0gdHJ1ZTtcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9IT1JJWk9OVEFMX0dSSUQgPSB0cnVlO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSB0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0cHJpdmF0ZSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0Y29uc3RydWN0b3IoaWQ6IFNjaGVtYUlkKSB7XG5cdFx0c3VwZXIoaWQsICdTY2hlbWFBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfSE9SSVpPTlRBTF9HUklEO1xuXHRcdHRoaXMudmVydGljYWxHcmlkID0gU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVkVSVElDQUxfR1JJRDtcblx0XHR0aGlzLnRoZW1lID0gU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVEhFTUU7XG5cdFx0dGhpcy5yb3dDb2xvcmluZyA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1JPV19DT0xPUklORztcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxuXG5cdGlzVmVydGljYWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEdyaWQ7XG5cdH1cblxuXHRpc0hvcml6b250YWxHcmlkRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZDtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUgPSB0aGVtZTtcblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTUFURVJJQUwpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmcgPSBTY2hlbWFSb3dDb2xvcmluZy5OT05FO1xuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuTk9ORTtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5EQVJLKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuTk9ORTtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5HRU5FUklDKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXHRcdH1cblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmcgPSBjb2xvcmluZztcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBlbmFibGVkO1xuXHR9XG59XG4iXX0=