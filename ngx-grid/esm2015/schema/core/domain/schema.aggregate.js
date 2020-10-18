/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from '../api/schema-theme';
import { SchemaRowColoring } from '../api/schema-row-coloring';
import { SchemaThemeSetAggregateEvent } from './theme/schema-theme-set.aggregate-event';
import { RowColoringSetAggregateEvent } from './row-coloring/row-coloring-set.aggregate-event';
import { SchemaVerticalGridSetAggregateEvent } from './grid/vertical/schema-vertical-grid-set.aggregate-event';
import { SchemaHorizontalGridSetAggregateEvent } from './grid/horizontal/schema-horizontal-grid-set.aggregate-event';
import { SchemaCreatedAggregateEvent } from './create/schema-created.aggregate-event';
export class SchemaAggregate extends AggregateRoot {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id, 'SchemaAggregate');
        this.setTheme(SchemaAggregate.DEFAULT_THEME);
        this.setHorizontalGrid(SchemaAggregate.DEFAULT_HORIZONTAL_GRID);
        this.setVerticalGrid(SchemaAggregate.DEFAULT_VERTICAL_GRID);
        this.setRowColoring(SchemaAggregate.DEFAULT_ROW_COLORING);
    }
    /**
     * @return {?}
     */
    createEvent() {
        return SchemaCreatedAggregateEvent;
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    changeTheme(theme) {
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
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme = theme;
        this.addEvent(new SchemaThemeSetAggregateEvent(this.getId(), this.theme));
    }
    /**
     * @param {?} coloring
     * @return {?}
     */
    setRowColoring(coloring) {
        this.rowColoring = coloring;
        this.addEvent(new RowColoringSetAggregateEvent(this.getId(), this.rowColoring));
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
        this.addEvent(new SchemaVerticalGridSetAggregateEvent(this.getId(), this.verticalGrid));
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
        this.addEvent(new SchemaHorizontalGridSetAggregateEvent(this.getId(), this.horizontalGrid));
    }
}
SchemaAggregate.DEFAULT_THEME = SchemaTheme.GENERIC;
SchemaAggregate.DEFAULT_ROW_COLORING = SchemaRowColoring.ODD;
SchemaAggregate.DEFAULT_VERTICAL_GRID = true;
SchemaAggregate.DEFAULT_HORIZONTAL_GRID = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3JILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3RGLE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQXVCOzs7O0lBa0IzRCxZQUFZLEVBQVk7UUFDdkIsS0FBSyxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWtCO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLEtBQWtCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBMkI7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOztBQXJFZSw2QkFBYSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7QUFFcEMsb0NBQW9CLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDO0FBRTdDLHFDQUFxQixHQUFHLElBQUksQ0FBQztBQUU3Qix1Q0FBdUIsR0FBRyxJQUFJLENBQUM7OztJQU4vQyw4QkFBb0Q7O0lBRXBELHFDQUE2RDs7SUFFN0Qsc0NBQTZDOztJQUU3Qyx3Q0FBK0M7Ozs7O0lBRS9DLHlDQUFnQzs7Ozs7SUFFaEMsdUNBQThCOzs7OztJQUU5QixnQ0FBMkI7Ozs7O0lBRTNCLHNDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFDcmVhdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NyZWF0ZS9zY2hlbWEtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PFNjaGVtYUlkPiB7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVEhFTUUgPSBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1JPV19DT0xPUklORyA9IFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9WRVJUSUNBTF9HUklEID0gdHJ1ZTtcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9IT1JJWk9OVEFMX0dSSUQgPSB0cnVlO1xuXG5cdHByaXZhdGUgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSB0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0cHJpdmF0ZSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0Y29uc3RydWN0b3IoaWQ6IFNjaGVtYUlkKSB7XG5cdFx0c3VwZXIoaWQsICdTY2hlbWFBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLnNldFRoZW1lKFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1RIRU1FKTtcblx0XHR0aGlzLnNldEhvcml6b250YWxHcmlkKFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX0hPUklaT05UQUxfR1JJRCk7XG5cdFx0dGhpcy5zZXRWZXJ0aWNhbEdyaWQoU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVkVSVElDQUxfR1JJRCk7XG5cdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9ST1dfQ09MT1JJTkcpO1xuXHR9XG5cblx0Y3JlYXRlRXZlbnQoKTogQWdncmVnYXRlRXZlbnRUeXBlPEFnZ3JlZ2F0ZUV2ZW50PFNjaGVtYUlkPj4ge1xuXHRcdHJldHVybiBTY2hlbWFDcmVhdGVkQWdncmVnYXRlRXZlbnQ7XG5cdH1cblxuXHRjaGFuZ2VUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnNldFRoZW1lKHRoZW1lKTtcblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTUFURVJJQUwpIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuTk9ORSk7XG5cdFx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChmYWxzZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5MSUdIVCkge1xuXHRcdFx0dGhpcy5zZXRSb3dDb2xvcmluZyhTY2hlbWFSb3dDb2xvcmluZy5OT05FKTtcblx0XHRcdHRoaXMuc2V0VmVydGljYWxHcmlkKGZhbHNlKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkRBUkspIHtcblx0XHRcdHRoaXMuc2V0Um93Q29sb3JpbmcoU2NoZW1hUm93Q29sb3JpbmcuTk9ORSk7XG5cdFx0XHR0aGlzLnNldFZlcnRpY2FsR3JpZChmYWxzZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5HRU5FUklDKSB7XG5cdFx0XHR0aGlzLnNldFJvd0NvbG9yaW5nKFNjaGVtYVJvd0NvbG9yaW5nLk9ERCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lID0gdGhlbWU7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMudGhlbWUpKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMucm93Q29sb3JpbmcgPSBjb2xvcmluZztcblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBSb3dDb2xvcmluZ1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5yb3dDb2xvcmluZykpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU2NoZW1hVmVydGljYWxHcmlkU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLnZlcnRpY2FsR3JpZCkpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBlbmFibGVkO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFNjaGVtYUhvcml6b250YWxHcmlkU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmhvcml6b250YWxHcmlkKSk7XG5cdH1cbn1cbiJdfQ==