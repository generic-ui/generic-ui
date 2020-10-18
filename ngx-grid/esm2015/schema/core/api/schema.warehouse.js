/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { schemaGlobalId } from '../domain-read/schema.global-id';
import { SchemaThemeRepository } from '../domain-read/theme/schema.theme.repository';
import { SchemaCssClassesRepository } from '../domain-read/css-classes/schema.css-classes.repository';
import { SchemaHorizontalGridRepository } from '../domain-read/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../domain-read/vertical-grid/schema.vertical-grid.repository';
export class SchemaWarehouse {
    /**
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     * @param {?} schemaHorizontalGridRepository
     * @param {?} schemaRowColoringRepository
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
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
    onTheme(schemaId = schemaGlobalId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onHorizontalGrid(schemaId = schemaGlobalId) {
        return this.schemaHorizontalGridRepository.on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onVerticalGrid(schemaId = schemaGlobalId) {
        return this.schemaVerticalGridRepository.on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onRowColoring(schemaId = schemaGlobalId) {
        return this.schemaRowColoringRepository.on(schemaId.toAggregateId());
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onSingleTheme(schemaId = schemaGlobalId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId())
            .pipe(take(1));
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    onCssClasses(schemaId = schemaGlobalId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    }
}
SchemaWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaWarehouse.ctorParameters = () => [
    { type: SchemaCssClassesRepository },
    { type: SchemaThemeRepository },
    { type: SchemaHorizontalGridRepository },
    { type: SchemaRowColoringRepository },
    { type: SchemaVerticalGridRepository }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXRDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUlqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUV0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUk1RyxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7SUFFM0IsWUFBNkIsMEJBQXNELEVBQy9ELHFCQUE0QyxFQUM1Qyw4QkFBOEQsRUFDOUQsMkJBQXdELEVBQ3hELDRCQUEwRDtRQUpqRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQy9ELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsV0FBa0MsY0FBYztRQUN2RCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBa0MsY0FBYztRQUNoRSxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBa0MsY0FBYztRQUM5RCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBa0MsY0FBYztRQUM3RCxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBa0MsY0FBYztRQUM3RCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM1QixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxXQUFrQyxjQUFjO1FBQzVELE9BQU8sSUFBSSxDQUFDLDBCQUEwQjthQUNoQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBdENELFVBQVU7Ozs7WUFQRiwwQkFBMEI7WUFEMUIscUJBQXFCO1lBR3JCLDhCQUE4QjtZQUM5QiwyQkFBMkI7WUFDM0IsNEJBQTRCOzs7Ozs7O0lBTXhCLHFEQUF1RTs7Ozs7SUFDaEYsZ0RBQTZEOzs7OztJQUM3RCx5REFBK0U7Ozs7O0lBQy9FLHNEQUF5RTs7Ozs7SUFDekUsdURBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3JpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFUaGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblRoZW1lKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeS5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeS5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5Lm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblNpbmdsZVRoZW1lKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Dc3NDbGFzc2VzKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=