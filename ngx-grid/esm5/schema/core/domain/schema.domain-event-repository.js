/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEventBus, hermesMap } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from './theme/schema-theme-set.event';
import { SchemaHorizontalGridSetEvent } from './grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from './grid/vertical/schema-vertical-grid-set.event';
import { RowColoringSetEvent } from './row-coloring/row-coloring-set.event';
import { SchemaEventRepository } from '../api/schema.event-repository';
import { Injectable } from '@angular/core';
var SchemaDomainEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaDomainEventRepository, _super);
    function SchemaDomainEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainEventRepository.prototype.onThemeChanged = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getTheme();
        })));
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainEventRepository.prototype.onHorizontalGridChanged = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getHorizontalGrid(); })));
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainEventRepository.prototype.onVerticalGridChanged = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getVerticalGrid(); })));
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainEventRepository.prototype.onRowColoring = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(hermesMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getRowColoring(); })));
    };
    SchemaDomainEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaDomainEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SchemaDomainEventRepository;
}(SchemaEventRepository));
export { SchemaDomainEventRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFHakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUNpRCx1REFBcUI7SUFFckUscUNBQVksY0FBOEI7ZUFDekMsa0JBQU0sY0FBYyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLFFBQStCO1FBRTdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7YUFDNUMsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQTBCO1lBQ3BDLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDZEQUF1Qjs7OztJQUF2QixVQUF3QixRQUErQjtRQUV0RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDO2FBQ3JELElBQUksQ0FDSixTQUFTOzs7O1FBQUMsVUFBQyxLQUFtQyxJQUFLLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQXpCLENBQXlCLEVBQUMsQ0FDN0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsMkRBQXFCOzs7O0lBQXJCLFVBQXNCLFFBQStCO1FBRXBELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUM7YUFDbkQsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWlDLElBQUssT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FDekUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsbURBQWE7Ozs7SUFBYixVQUFjLFFBQStCO1FBRTVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7YUFDNUMsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQTBCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FDakUsQ0FBQztJQUNSLENBQUM7O2dCQXZDRCxVQUFVOzs7O2dCQVhGLGNBQWM7O0lBb0R2QixrQ0FBQztDQUFBLEFBekNELENBQ2lELHFCQUFxQixHQXdDckU7U0F4Q1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFEb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBTY2hlbWFFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uVGhlbWVDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHNjaGVtYUlkLCBTY2hlbWFUaGVtZVNldEV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBTY2hlbWFUaGVtZVNldEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZXZlbnQuZ2V0VGhlbWUoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZENoYW5nZWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkgPT4gZXZlbnQuZ2V0SG9yaXpvbnRhbEdyaWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVmVydGljYWxHcmlkQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KHNjaGVtYUlkLCBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpID0+IGV2ZW50LmdldFZlcnRpY2FsR3JpZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFSb3dDb2xvcmluZz4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgUm93Q29sb3JpbmdTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogUm93Q29sb3JpbmdTZXRFdmVudCkgPT4gZXZlbnQuZ2V0Um93Q29sb3JpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=