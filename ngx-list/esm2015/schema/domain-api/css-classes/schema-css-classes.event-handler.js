/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
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
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.rowColoring = ((/** @type {?} */ (event))).getRowColoring();
        }
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGrid = ((/** @type {?} */ (event))).getHorizontalGrid();
        }
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.verticalGrid = ((/** @type {?} */ (event))).getVerticalGrid();
        }
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.schemaTheme = ((/** @type {?} */ (event))).getTheme();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTTdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsa0JBQXVEOzs7O0lBVXhHLFlBQW9CLDBCQUFzRDtRQUN6RSxLQUFLLEVBQUUsQ0FBQztRQURXLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFFMUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBZ0M7UUFFdEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBdUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ25FO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBZ0MsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDbEY7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUE4QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUU7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUF1QixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDN0Q7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RKO0lBQ0YsQ0FBQzs7O1lBekNELFVBQVU7Ozs7WUFaRiwwQkFBMEI7Ozs7SUFlbEMsbURBQStCOztJQUUvQixzREFBd0I7O0lBRXhCLG9EQUFzQjs7SUFFdEIsbURBQXlCOzs7OztJQUViLGtFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuZXhwb3J0IHR5cGUgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZSA9IFNjaGVtYVRoZW1lU2V0RXZlbnQgfCBSb3dDb2xvcmluZ1NldEV2ZW50IHwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB8IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZT4ge1xuXG5cdHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZztcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cblx0c2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZSk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IChldmVudCBhcyBSb3dDb2xvcmluZ1NldEV2ZW50KS5nZXRSb3dDb2xvcmluZygpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSAoZXZlbnQgYXMgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkuZ2V0SG9yaXpvbnRhbEdyaWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSAoZXZlbnQgYXMgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpLmdldFZlcnRpY2FsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFUaGVtZVNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc2NoZW1hVGhlbWUgPSAoZXZlbnQgYXMgU2NoZW1hVGhlbWVTZXRFdmVudCkuZ2V0VGhlbWUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnB1Ymxpc2goZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaChhZ2dyZWdhdGVJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2NoZW1hVGhlbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeS5zZXRUaGVtZShuZXcgU2NoZW1hQ3NzQ2xhc3ModGhpcy52ZXJ0aWNhbEdyaWQsIHRoaXMuaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hVGhlbWUsIHRoaXMucm93Q29sb3JpbmcpLCBhZ2dyZWdhdGVJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==