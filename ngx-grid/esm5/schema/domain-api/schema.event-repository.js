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
        function (event) { return event.getTheme(); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFJaEY7SUFDMkMsaURBQWdEO0lBRTFGLCtCQUFZLGNBQThCO2VBQ3pDLGtCQUFNLGNBQWMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUU5RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO2FBQzVDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxLQUEwQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQ3JELENBQUM7SUFDUixDQUFDOzs7OztJQUVELHVEQUF1Qjs7OztJQUF2QixVQUF3QixRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUV2RSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDO2FBQ3JELElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxLQUFtQyxJQUFLLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQXpCLENBQXlCLEVBQUMsQ0FDdkUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscURBQXFCOzs7O0lBQXJCLFVBQXNCLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBRXJFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUM7YUFDbkQsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQWlDLElBQUssT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FDbkUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsNkNBQWE7Ozs7SUFBYixVQUFjLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBRTdELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7YUFDNUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQTBCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FDM0QsQ0FBQztJQUNSLENBQUM7O2dCQXJDRCxVQUFVOzs7O2dCQWJGLGNBQWM7O0lBb0R2Qiw0QkFBQztDQUFBLEFBdkNELENBQzJDLGVBQWUsR0FzQ3pEO1NBdENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBzY2hlbWFHbG9iYWxJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U2NoZW1hUmVhZE1vZGVsUm9vdElkLCBTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uVGhlbWVDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFNjaGVtYVRoZW1lU2V0RXZlbnQpID0+IGV2ZW50LmdldFRoZW1lKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpID0+IGV2ZW50LmdldEhvcml6b250YWxHcmlkKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblZlcnRpY2FsR3JpZENoYW5nZWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHNjaGVtYUlkLCBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpID0+IGV2ZW50LmdldFZlcnRpY2FsR3JpZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHNjaGVtYUlkLCBSb3dDb2xvcmluZ1NldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBSb3dDb2xvcmluZ1NldEV2ZW50KSA9PiBldmVudC5nZXRSb3dDb2xvcmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==