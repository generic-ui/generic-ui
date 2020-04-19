/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from '../domain/theme/schema-theme-set.event';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaHorizontalGridSetEvent } from '../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../domain/grid/vertical/schema-vertical-grid-set.event';
import { RowColoringSetEvent } from '../domain/coloring/row-coloring-set.event';
export class SchemaEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onThemeChanged(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getTheme())));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onHorizontalGridChanged(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getHorizontalGrid())));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onVerticalGridChanged(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getVerticalGrid())));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onRowColoring(schemaId = schemaGlobalId) {
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getRowColoring())));
    }
}
SchemaEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZmVhdHVyZS1hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRXBHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBS2hGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFnRDs7OztJQUUxRixZQUFZLGNBQThCO1FBQ3pDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUFrQyxjQUFjO1FBRTlELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7YUFDNUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQTBCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUNyRCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxXQUFrQyxjQUFjO1FBRXZFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLENBQUM7YUFDckQsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQW1DLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQ3ZFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQWtDLGNBQWM7UUFFckUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQzthQUNuRCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQ25FLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxXQUFrQyxjQUFjO1FBRTdELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7YUFDNUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQTBCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUMzRCxDQUFDO0lBQ1IsQ0FBQzs7O1lBckNELFVBQVU7Ozs7WUFiRixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi9yZWFkL3NjaGVtYS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTY2hlbWFSZWFkTW9kZWxSb290SWQsIFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0b25UaGVtZUNoYW5nZWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgU2NoZW1hVGhlbWVTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCkgPT4gZXZlbnQuZ2V0VGhlbWUoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkgPT4gZXZlbnQuZ2V0SG9yaXpvbnRhbEdyaWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVmVydGljYWxHcmlkQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCkgPT4gZXZlbnQuZ2V0VmVydGljYWxHcmlkKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hUm93Q29sb3Jpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFJvd0NvbG9yaW5nU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFJvd0NvbG9yaW5nU2V0RXZlbnQpID0+IGV2ZW50LmdldFJvd0NvbG9yaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19