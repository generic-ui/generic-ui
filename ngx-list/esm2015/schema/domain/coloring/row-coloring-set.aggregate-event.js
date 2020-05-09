/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { RowColoringSetEvent } from './row-coloring-set.event';
export class RowColoringSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} rowColoring
     */
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new RowColoringSetEvent(this.getAggregateId(), this.rowColoring);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowColoringSetAggregateEvent.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsY0FBd0I7Ozs7O0lBRXpFLFlBQVksUUFBa0IsRUFDVixXQUE4QjtRQUNqRCxLQUFLLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBRWxELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUVEOzs7Ozs7SUFSRyxtREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgUm93Q29sb3JpbmdTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnUm93Q29sb3JpbmdTZXRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgUm93Q29sb3JpbmdTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMucm93Q29sb3JpbmcpO1xuXHR9XG5cbn1cbiJdfQ==