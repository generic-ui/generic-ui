/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from './schema-theme';
import { SchemaRowColoring } from './schema-row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3JILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3RGO0lBQXFDLDJDQUF1QjtJQWtCM0QseUJBQVksRUFBWTtRQUF4QixZQUNDLGtCQUFNLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxTQUs1QjtRQUpBLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNoRSxLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0lBQzNELENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLEtBQWtCO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0NBQVE7Ozs7O0lBQWhCLFVBQWlCLEtBQWtCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsUUFBMkI7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7OztJQUVELDJDQUFpQjs7OztJQUFqQixVQUFrQixPQUFnQjtRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUkscUNBQXFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFyRWUsNkJBQWEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBRXBDLG9DQUFvQixHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztJQUU3QyxxQ0FBcUIsR0FBRyxJQUFJLENBQUM7SUFFN0IsdUNBQXVCLEdBQUcsSUFBSSxDQUFDO0lBZ0VoRCxzQkFBQztDQUFBLEFBeEVELENBQXFDLGFBQWEsR0F3RWpEO1NBeEVZLGVBQWU7OztJQUUzQiw4QkFBb0Q7O0lBRXBELHFDQUE2RDs7SUFFN0Qsc0NBQTZDOztJQUU3Qyx3Q0FBK0M7Ozs7O0lBRS9DLHlDQUFnQzs7Ozs7SUFFaEMsdUNBQThCOzs7OztJQUU5QixnQ0FBMkI7Ozs7O0lBRTNCLHNDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlL3NjaGVtYS1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNjaGVtYUFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8U2NoZW1hSWQ+IHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9USEVNRSA9IFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfUk9XX0NPTE9SSU5HID0gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1ZFUlRJQ0FMX0dSSUQgPSB0cnVlO1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hPUklaT05UQUxfR1JJRCA9IHRydWU7XG5cblx0cHJpdmF0ZSBob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXHRwcml2YXRlIHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogU2NoZW1hSWQpIHtcblx0XHRzdXBlcihpZCwgJ1NjaGVtYUFnZ3JlZ2F0ZScpO1xuXHRcdHRoaXMuc2V0VGhlbWUoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVEhFTUUpO1xuXHRcdHRoaXMuc2V0SG9yaXpvbnRhbEdyaWQoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfSE9SSVpPTlRBTF9HUklEKTtcblx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9WRVJUSUNBTF9HUklEKTtcblx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1JPV19DT0xPUklORyk7XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBUeXBlPEFnZ3JlZ2F0ZUV2ZW50PFNjaGVtYUlkPj4ge1xuXHRcdHJldHVybiBTY2hlbWFDcmVhdGVkQWdncmVnYXRlRXZlbnQ7XG5cdH1cblxuXHRjaGFuZ2VUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnNldFRoZW1lKHRoZW1lKTtcblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTUFURVJJQUwpIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuTk9ORSk7XG5cdFx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChmYWxzZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5MSUdIVCkge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5OT05FKTtcblx0XHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkRBUkspIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuTk9ORSk7XG5cdFx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChmYWxzZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5HRU5FUklDKSB7XG5cdFx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYVJvd0NvbG9yaW5nLk9ERCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lID0gdGhlbWU7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMudGhlbWUpKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmcgPSBjb2xvcmluZztcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBSb3dDb2xvcmluZ1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5yb3dDb2xvcmluZykpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU2NoZW1hVmVydGljYWxHcmlkU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLnZlcnRpY2FsR3JpZCkpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFNjaGVtYUhvcml6b250YWxHcmlkU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmhvcml6b250YWxHcmlkKSk7XG5cdH1cbn1cbiJdfQ==