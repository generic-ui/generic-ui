/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
export class SchemaEventRepository extends EventRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
}
SchemaEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onThemeChanged = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onHorizontalGridChanged = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onVerticalGridChanged = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaEventRepository.prototype.onRowColoring = function (schemaId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU92RixNQUFNLE9BQWdCLHFCQUFzQixTQUFRLGVBQWdEOzs7OztJQUVuRyxZQUFzQixjQUE4QjtRQUNuRCxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBTEQsVUFBVTs7OztZQU5GLGNBQWM7Ozs7Ozs7O0lBYXRCLHlFQUF3Rjs7Ozs7O0lBRXhGLGtGQUE2Rjs7Ozs7O0lBRTdGLGdGQUEyRjs7Ozs7O0lBRTNGLHdFQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYUV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTY2hlbWFSZWFkTW9kZWxSb290SWQsIFNjaGVtYUlkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdGFic3RyYWN0IG9uVGhlbWVDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPjtcblxuXHRhYnN0cmFjdCBvbkhvcml6b250YWxHcmlkQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHRhYnN0cmFjdCBvblZlcnRpY2FsR3JpZENoYW5nZWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0YWJzdHJhY3Qgb25Sb3dDb2xvcmluZyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFSb3dDb2xvcmluZz47XG5cbn1cbiJdfQ==