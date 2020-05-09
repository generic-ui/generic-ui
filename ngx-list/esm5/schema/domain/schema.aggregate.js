/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaRowColoring } from './coloring/schema-row-coloring';
import { SchemaThemeSetAggregateEvent } from './theme/schema-theme-set.aggregate-event';
import { RowColoringSetAggregateEvent } from './coloring/row-coloring-set.aggregate-event';
import { SchemaVerticalGridSetAggregateEvent } from './grid/vertical/schema-vertical-grid-set.aggregate-event';
import { SchemaHorizontalGridSetAggregateEvent } from './grid/horizontal/schema-horizontal-grid-set.aggregate-event';
import { SchemaCreatedAggregateEvent } from './create/schema-created.aggregate-event';
var SchemaAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaAggregate, _super);
    function SchemaAggregate(id) {
        var _this = _super.call(this, id, 'SchemaAggregate') || this;
        _this.setTheme(SchemaAggregate.DEFAULT_THEME);
        _this.setHorizontalGrid(SchemaAggregate.DEFAULT_HORIZONTAL_GRID);
        _this.setVerticalGrid(SchemaAggregate.DEFAULT_VERTICAL_GRID);
        _this.setRowColoring(SchemaAggregate.DEFAULT_ROW_COLORING);
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.createEvent = /**
     * @return {?}
     */
    function () {
        return SchemaCreatedAggregateEvent;
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    SchemaAggregate.prototype.changeTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.setTheme(theme);
        if (theme === SchemaTheme.MATERIAL) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.LIGHT) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.DARK) {
            this.setRowColoring(SchemaRowColoring.NONE);
            this.setVerticalGrid(false);
        }
        if (theme === SchemaTheme.GENERIC) {
            this.setRowColoring(SchemaRowColoring.ODD);
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    SchemaAggregate.prototype.setTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        this.addEvent(new SchemaThemeSetAggregateEvent(this.getId(), this.theme));
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
        this.addEvent(new RowColoringSetAggregateEvent(this.getId(), this.rowColoring));
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
        this.addEvent(new SchemaVerticalGridSetAggregateEvent(this.getId(), this.verticalGrid));
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
        this.addEvent(new SchemaHorizontalGridSetAggregateEvent(this.getId(), this.horizontalGrid));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFrQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUduRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDckgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHdEY7SUFBcUMsMkNBQXVCO0lBa0IzRCx5QkFBWSxFQUFZO1FBQXhCLFlBQ0Msa0JBQU0sRUFBRSxFQUFFLGlCQUFpQixDQUFDLFNBSzVCO1FBSkEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hFLEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7SUFDM0QsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksS0FBa0I7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQixJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7Ozs7SUFFTyxrQ0FBUTs7Ozs7SUFBaEIsVUFBaUIsS0FBa0I7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxRQUEyQjtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQXJFZSw2QkFBYSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFFcEMsb0NBQW9CLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDO0lBRTdDLHFDQUFxQixHQUFHLElBQUksQ0FBQztJQUU3Qix1Q0FBdUIsR0FBRyxJQUFJLENBQUM7SUFnRWhELHNCQUFDO0NBQUEsQUF4RUQsQ0FBcUMsYUFBYSxHQXdFakQ7U0F4RVksZUFBZTs7O0lBRTNCLDhCQUFvRDs7SUFFcEQscUNBQTZEOztJQUU3RCxzQ0FBNkM7O0lBRTdDLHdDQUErQzs7Ozs7SUFFL0MseUNBQWdDOzs7OztJQUVoQyx1Q0FBOEI7Ozs7O0lBRTlCLGdDQUEyQjs7Ozs7SUFFM0Isc0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4vY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jcmVhdGUvc2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTY2hlbWFJZD4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RIRU1FID0gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9ST1dfQ09MT1JJTkcgPSBTY2hlbWFSb3dDb2xvcmluZy5PREQ7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVkVSVElDQUxfR1JJRCA9IHRydWU7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSE9SSVpPTlRBTF9HUklEID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgdmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgdGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdHByaXZhdGUgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBTY2hlbWFJZCkge1xuXHRcdHN1cGVyKGlkLCAnU2NoZW1hQWdncmVnYXRlJyk7XG5cdFx0dGhpcy5zZXRUaGVtZShTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9USEVNRSk7XG5cdFx0dGhpcy5zZXRIb3Jpem9udGFsR3JpZChTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9IT1JJWk9OVEFMX0dSSUQpO1xuXHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1ZFUlRJQ0FMX0dSSUQpO1xuXHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfUk9XX0NPTE9SSU5HKTtcblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IFR5cGU8QWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+PiB7XG5cdFx0cmV0dXJuIFNjaGVtYUNyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdGNoYW5nZVRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0VGhlbWUodGhlbWUpO1xuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5NQVRFUklBTCkge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5OT05FKTtcblx0XHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYVJvd0NvbG9yaW5nLk5PTkUpO1xuXHRcdFx0dGhpcy5zZXRWZXJ0aWNhbEdyaWQoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuREFSSykge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5OT05FKTtcblx0XHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkdFTkVSSUMpIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuT0REKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUgPSB0aGVtZTtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy50aGVtZSkpO1xuXHR9XG5cblx0c2V0Um93Q29sb3JpbmcoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yb3dDb2xvcmluZyA9IGNvbG9yaW5nO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFJvd0NvbG9yaW5nU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLnJvd0NvbG9yaW5nKSk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxHcmlkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMudmVydGljYWxHcmlkKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuaG9yaXpvbnRhbEdyaWQpKTtcblx0fVxufVxuIl19