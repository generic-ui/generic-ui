/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
var SchemaWarehouse = /** @class */ (function () {
    function SchemaWarehouse(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
        this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        this.schemaRowColoringRepository = schemaRowColoringRepository;
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onTheme = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onHorizontalGrid = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaHorizontalGridRepository.on(schemaId.toAggregateId());
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onVerticalGrid = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaVerticalGridRepository.on(schemaId.toAggregateId());
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onRowColoring = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaRowColoringRepository.on(schemaId.toAggregateId());
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onSingleTheme = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId())
            .pipe(take(1));
    };
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onCssClasses = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    };
    SchemaWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaWarehouse.ctorParameters = function () { return [
        { type: SchemaCssClassesRepository },
        { type: SchemaThemeRepository },
        { type: SchemaHorizontalGridRepository },
        { type: SchemaRowColoringRepository },
        { type: SchemaVerticalGridRepository }
    ]; };
    return SchemaWarehouse;
}());
export { SchemaWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaCssClassesRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaThemeRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaHorizontalGridRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaRowColoringRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaWarehouse.prototype.schemaVerticalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXpGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRy9GO0lBR0MseUJBQTZCLDBCQUFzRCxFQUMvRCxxQkFBNEMsRUFDNUMsOEJBQThELEVBQzlELDJCQUF3RCxFQUN4RCw0QkFBMEQ7UUFKakQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUMvRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQzlFLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDaEUsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQzlELE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVELHVDQUFhOzs7O0lBQWIsVUFBYyxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUM3RCxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCx1Q0FBYTs7OztJQUFiLFVBQWMsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDN0QsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDNUIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxzQ0FBWTs7OztJQUFaLFVBQWEsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDNUQsT0FBTyxJQUFJLENBQUMsMEJBQTBCO2FBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkF0Q0QsVUFBVTs7OztnQkFQRiwwQkFBMEI7Z0JBRDFCLHFCQUFxQjtnQkFHckIsOEJBQThCO2dCQUM5QiwyQkFBMkI7Z0JBQzNCLDRCQUE0Qjs7SUEyQ3JDLHNCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F2Q1ksZUFBZTs7Ozs7O0lBRWYscURBQXVFOzs7OztJQUNoRixnREFBNkQ7Ozs7O0lBQzdELHlEQUErRTs7Ozs7SUFDL0Usc0RBQXlFOzs7OztJQUN6RSx1REFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzY2hlbWFHbG9iYWxJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFUaGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblRoZW1lKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeS5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeS5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5Lm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblNpbmdsZVRoZW1lKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Dc3NDbGFzc2VzKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=