/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from '../domain/theme/schema-theme-set.event';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaHorizontalGridSetEvent } from '../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../domain/grid/vertical/schema-vertical-grid-set.event';
import { RowColoringSetEvent } from '../domain/coloring/row-coloring-set.event';
var SchemaEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaEventRepository, _super);
    function SchemaEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onThemeChanged = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getTheme();
        })));
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onHorizontalGridChanged = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getHorizontalGrid(); })));
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onVerticalGridChanged = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getVerticalGrid(); })));
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onRowColoring = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getRowColoring(); })));
    };
    SchemaEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SchemaEventRepository;
}(EventRepository));
export { SchemaEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRXBHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBSWhGO0lBQzJDLGlEQUFnRDtJQUUxRiwrQkFBWSxjQUE4QjtlQUN6QyxrQkFBTSxjQUFjLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFFOUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQzthQUM1QyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsS0FBMEI7WUFDOUIsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsdURBQXVCOzs7O0lBQXZCLFVBQXdCLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBRXZFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLENBQUM7YUFDckQsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQW1DLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBekIsQ0FBeUIsRUFBQyxDQUN2RSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxxREFBcUI7Ozs7SUFBckIsVUFBc0IsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFFckUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQzthQUNuRCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUNuRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCw2Q0FBYTs7OztJQUFiLFVBQWMsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFFN0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQzthQUM1QyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsS0FBMEIsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUMzRCxDQUFDO0lBQ1IsQ0FBQzs7Z0JBdkNELFVBQVU7Ozs7Z0JBYkYsY0FBYzs7SUFzRHZCLDRCQUFDO0NBQUEsQUF6Q0QsQ0FDMkMsZUFBZSxHQXdDekQ7U0F4Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgbXVsdGljYXN0LCByZWZDb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBzY2hlbWFHbG9iYWxJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U2NoZW1hUmVhZE1vZGVsUm9vdElkLCBTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uVGhlbWVDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFNjaGVtYVRoZW1lU2V0RXZlbnQpID0+IHtcblx0XHRcdFx0XHQgICBcdHJldHVybiBldmVudC5nZXRUaGVtZSgpXG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkgPT4gZXZlbnQuZ2V0SG9yaXpvbnRhbEdyaWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVmVydGljYWxHcmlkQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCkgPT4gZXZlbnQuZ2V0VmVydGljYWxHcmlkKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hUm93Q29sb3Jpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFJvd0NvbG9yaW5nU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFJvd0NvbG9yaW5nU2V0RXZlbnQpID0+IGV2ZW50LmdldFJvd0NvbG9yaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19