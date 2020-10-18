/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from '../api/schema-theme';
import { SchemaRowColoring } from '../api/schema-row-coloring';
import { SchemaThemeSetAggregateEvent } from './theme/schema-theme-set.aggregate-event';
import { RowColoringSetAggregateEvent } from './row-coloring/row-coloring-set.aggregate-event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXNDLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNySCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd0RjtJQUFxQywyQ0FBdUI7SUFrQjNELHlCQUFZLEVBQVk7UUFBeEIsWUFDQyxrQkFBTSxFQUFFLEVBQUUsaUJBQWlCLENBQUMsU0FLNUI7UUFKQSxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDaEUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1RCxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztJQUMzRCxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0MsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxLQUFrQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7OztJQUVPLGtDQUFROzs7OztJQUFoQixVQUFpQixLQUFrQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFFBQTJCO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFRCx5Q0FBZTs7OztJQUFmLFVBQWdCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFFRCwyQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBckVlLDZCQUFhLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUVwQyxvQ0FBb0IsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7SUFFN0MscUNBQXFCLEdBQUcsSUFBSSxDQUFDO0lBRTdCLHVDQUF1QixHQUFHLElBQUksQ0FBQztJQWdFaEQsc0JBQUM7Q0FBQSxBQXhFRCxDQUFxQyxhQUFhLEdBd0VqRDtTQXhFWSxlQUFlOzs7SUFFM0IsOEJBQW9EOztJQUVwRCxxQ0FBNkQ7O0lBRTdELHNDQUE2Qzs7SUFFN0Msd0NBQStDOzs7OztJQUUvQyx5Q0FBZ0M7Ozs7O0lBRWhDLHVDQUE4Qjs7Ozs7SUFFOUIsZ0NBQTJCOzs7OztJQUUzQixzQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlRXZlbnRUeXBlLCBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jcmVhdGUvc2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTY2hlbWFJZD4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RIRU1FID0gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9ST1dfQ09MT1JJTkcgPSBTY2hlbWFSb3dDb2xvcmluZy5PREQ7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVkVSVElDQUxfR1JJRCA9IHRydWU7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSE9SSVpPTlRBTF9HUklEID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgdmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgdGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdHByaXZhdGUgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBTY2hlbWFJZCkge1xuXHRcdHN1cGVyKGlkLCAnU2NoZW1hQWdncmVnYXRlJyk7XG5cdFx0dGhpcy5zZXRUaGVtZShTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9USEVNRSk7XG5cdFx0dGhpcy5zZXRIb3Jpem9udGFsR3JpZChTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9IT1JJWk9OVEFMX0dSSUQpO1xuXHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1ZFUlRJQ0FMX0dSSUQpO1xuXHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfUk9XX0NPTE9SSU5HKTtcblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxTY2hlbWFJZD4+IHtcblx0XHRyZXR1cm4gU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0Y2hhbmdlVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRUaGVtZSh0aGVtZSk7XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLk1BVEVSSUFMKSB7XG5cdFx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYVJvd0NvbG9yaW5nLk5PTkUpO1xuXHRcdFx0dGhpcy5zZXRWZXJ0aWNhbEdyaWQoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTElHSFQpIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuTk9ORSk7XG5cdFx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChmYWxzZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5EQVJLKSB7XG5cdFx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYVJvd0NvbG9yaW5nLk5PTkUpO1xuXHRcdFx0dGhpcy5zZXRWZXJ0aWNhbEdyaWQoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuR0VORVJJQykge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5PREQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZSA9IHRoZW1lO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFNjaGVtYVRoZW1lU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLnRoZW1lKSk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0NvbG9yaW5nID0gY29sb3Jpbmc7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgUm93Q29sb3JpbmdTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMucm93Q29sb3JpbmcpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFNjaGVtYVZlcnRpY2FsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy52ZXJ0aWNhbEdyaWQpKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5ob3Jpem9udGFsR3JpZCkpO1xuXHR9XG59XG4iXX0=