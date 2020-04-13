/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { schemaGlobalId } from './schema.global-id';
import { SchemaThemeRepository } from '../read/theme/schema.theme.repository';
import { SchemaCssClassesRepository } from '../read/css-classes/schema.css-classes.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS91aS1hcGkvc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRy9GO0lBR0MseUJBQTZCLDBCQUFzRCxFQUMvRCxxQkFBNEM7UUFEbkMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUMvRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7O0lBRUQsdUNBQWE7Ozs7SUFBYixVQUFjLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQzdELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQzVELE9BQU8sSUFBSSxDQUFDLDBCQUEwQjthQUNoQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBSEYsMEJBQTBCO2dCQUQxQixxQkFBcUI7O0lBd0I5QixzQkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLGVBQWU7Ozs7OztJQUVmLHFEQUF1RTs7Ozs7SUFDaEYsZ0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuL3NjaGVtYS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uL3JlYWQvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZWFkL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hVGhlbWVSZXBvc2l0b3J5OiBTY2hlbWFUaGVtZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2luZ2xlVGhlbWUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNzc0NsYXNzZXMoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==