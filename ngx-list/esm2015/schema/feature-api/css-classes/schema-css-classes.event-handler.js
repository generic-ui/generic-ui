/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaCssClass } from './schema-css-class';
export class SchemaCssClassesEventHandler extends DomainEventHandler {
    /**
     * @param {?} schemaCssClassesRepository
     */
    constructor(schemaCssClassesRepository) {
        super();
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof RowColoringSetEvent) {
            this.rowColoring = event.getRowColoring();
        }
        if (event instanceof SchemaHorizontalGridSetEvent) {
            this.horizontalGrid = event.getHorizontalGrid();
        }
        if (event instanceof SchemaVerticalGridSetEvent) {
            this.verticalGrid = event.getVerticalGrid();
        }
        if (event instanceof SchemaThemeSetEvent) {
            this.schemaTheme = event.getTheme();
        }
        this.publish(event.getAggregateId());
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    publish(aggregateId) {
        if (this.rowColoring !== undefined && this.horizontalGrid !== undefined && this.verticalGrid !== undefined && this.schemaTheme !== undefined) {
            this.schemaCssClassesRepository.setTheme(new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring), aggregateId);
        }
    }
}
SchemaCssClassesEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassesEventHandler.ctorParameters = () => [
    { type: SchemaCssClassesRepository }
];
if (false) {
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.rowColoring;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.horizontalGrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.verticalGrid;
    /** @type {?} */
    SchemaCssClassesEventHandler.prototype.schemaTheme;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassesEventHandler.prototype.schemaCssClassesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9mZWF0dXJlLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNcEQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGtCQUE0Qjs7OztJQVU3RSxZQUFvQiwwQkFBc0Q7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFEVywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBRTFFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQTRHO1FBRWxILElBQUksS0FBSyxZQUFZLG1CQUFtQixFQUFFO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxLQUFLLFlBQVksNEJBQTRCLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNoRDtRQUVELElBQUksS0FBSyxZQUFZLDBCQUEwQixFQUFFO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzVDO1FBRUQsSUFBSSxLQUFLLFlBQVksbUJBQW1CLEVBQUU7WUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RKO0lBQ0YsQ0FBQzs7O1lBekNELFVBQVU7Ozs7WUFYRiwwQkFBMEI7Ozs7SUFjbEMsbURBQStCOztJQUUvQixzREFBd0I7O0lBRXhCLG9EQUFzQjs7SUFFdEIsbURBQXlCOzs7OztJQUViLGtFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZD4ge1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0c2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCB8IFJvd0NvbG9yaW5nU2V0RXZlbnQgfCBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IHwgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFJvd0NvbG9yaW5nU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMucm93Q29sb3JpbmcgPSBldmVudC5nZXRSb3dDb2xvcmluZygpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBldmVudC5nZXRIb3Jpem9udGFsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IGV2ZW50LmdldFZlcnRpY2FsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNjaGVtYVRoZW1lU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuc2NoZW1hVGhlbWUgPSBldmVudC5nZXRUaGVtZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMucHVibGlzaChldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoKGFnZ3JlZ2F0ZUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgdGhpcy5ob3Jpem9udGFsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudmVydGljYWxHcmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zY2hlbWFUaGVtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LnNldFRoZW1lKG5ldyBTY2hlbWFDc3NDbGFzcyh0aGlzLnZlcnRpY2FsR3JpZCwgdGhpcy5ob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFUaGVtZSwgdGhpcy5yb3dDb2xvcmluZyksIGFnZ3JlZ2F0ZUlkKTtcblx0XHR9XG5cdH1cblxufVxuIl19