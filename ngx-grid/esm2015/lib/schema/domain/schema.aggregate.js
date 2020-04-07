/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaTheme } from './schema-theme';
import { SchemaRowColoring } from './schema-row-coloring';
export class SchemaAggregate extends AggregateRoot {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id, 'SchemaAggregate');
        this.horizontalGrid = SchemaAggregate.DEFAULT_HORIZONTAL_GRID;
        this.verticalGrid = SchemaAggregate.DEFAULT_VERTICAL_GRID;
        this.theme = SchemaAggregate.DEFAULT_THEME;
        this.rowColoring = SchemaAggregate.DEFAULT_ROW_COLORING;
    }
    /**
     * @return {?}
     */
    getRowColoring() {
        return this.rowColoring;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.theme;
    }
    /**
     * @return {?}
     */
    isVerticalGridEnabled() {
        return this.verticalGrid;
    }
    /**
     * @return {?}
     */
    isHorizontalGridEnabled() {
        return this.horizontalGrid;
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
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
    }
    /**
     * @param {?} coloring
     * @return {?}
     */
    setRowColoring(coloring) {
        this.rowColoring = coloring;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalGrid(enabled) {
        this.verticalGrid = enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setHorizontalGrid(enabled) {
        this.horizontalGrid = enabled;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUF1Qjs7OztJQWtCM0QsWUFBWSxFQUFZO1FBQ3ZCLEtBQUssQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUVELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDMUI7UUFFRCxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztTQUN6QztJQUNGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQTJCO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7QUF6RWUsNkJBQWEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO0FBRXBDLG9DQUFvQixHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztBQUU3QyxxQ0FBcUIsR0FBRyxJQUFJLENBQUM7QUFFN0IsdUNBQXVCLEdBQUcsSUFBSSxDQUFDOzs7SUFOL0MsOEJBQW9EOztJQUVwRCxxQ0FBNkQ7O0lBRTdELHNDQUE2Qzs7SUFFN0Msd0NBQStDOzs7OztJQUUvQyx5Q0FBZ0M7Ozs7O0lBRWhDLHVDQUE4Qjs7Ozs7SUFFOUIsZ0NBQTJCOzs7OztJQUUzQixzQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTY2hlbWFJZD4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RIRU1FID0gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9ST1dfQ09MT1JJTkcgPSBTY2hlbWFSb3dDb2xvcmluZy5PREQ7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVkVSVElDQUxfR1JJRCA9IHRydWU7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSE9SSVpPTlRBTF9HUklEID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgdmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgdGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdHByaXZhdGUgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBTY2hlbWFJZCkge1xuXHRcdHN1cGVyKGlkLCAnU2NoZW1hQWdncmVnYXRlJyk7XG5cdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX0hPUklaT05UQUxfR1JJRDtcblx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1ZFUlRJQ0FMX0dSSUQ7XG5cdFx0dGhpcy50aGVtZSA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1RIRU1FO1xuXHRcdHRoaXMucm93Q29sb3JpbmcgPSBTY2hlbWFBZ2dyZWdhdGUuREVGQVVMVF9ST1dfQ09MT1JJTkc7XG5cdH1cblxuXHRnZXRSb3dDb2xvcmluZygpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm93Q29sb3Jpbmc7XG5cdH1cblxuXHRnZXRUaGVtZSgpOiBTY2hlbWFUaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWU7XG5cdH1cblxuXHRpc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxHcmlkO1xuXHR9XG5cblx0aXNIb3Jpem9udGFsR3JpZEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaG9yaXpvbnRhbEdyaWQ7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lID0gdGhlbWU7XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLk1BVEVSSUFMKSB7XG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3JpbmcuTk9ORTtcblx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5MSUdIVCkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cdFx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuREFSSykge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cdFx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuR0VORVJJQykge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblx0XHR9XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0NvbG9yaW5nID0gY29sb3Jpbmc7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxHcmlkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gZW5hYmxlZDtcblx0fVxufVxuIl19