/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
var SchemaWarehouse = /** @class */ (function () {
    function SchemaWarehouse(schemaCssClassesRepository, schemaThemeRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
    }
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
        { type: SchemaThemeRepository }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3pGO0lBR0MseUJBQTZCLDBCQUFzRCxFQUMvRCxxQkFBNEM7UUFEbkMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUMvRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7O0lBRUQsdUNBQWE7Ozs7SUFBYixVQUFjLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQzdELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQzVELE9BQU8sSUFBSSxDQUFDLDBCQUEwQjthQUNoQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBSEYsMEJBQTBCO2dCQUQxQixxQkFBcUI7O0lBd0I5QixzQkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLGVBQWU7Ozs7OztJQUVmLHFEQUF1RTs7Ozs7SUFDaEYsZ0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4vY3NzLWNsYXNzZXMvc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNpbmdsZVRoZW1lKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Dc3NDbGFzc2VzKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=