/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
export class SchemaWarehouse {
    /**
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     */
    constructor(schemaCssClassesRepository, schemaThemeRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
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
    { type: SchemaThemeRepository }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSXpGLE1BQU0sT0FBTyxlQUFlOzs7OztJQUUzQixZQUE2QiwwQkFBc0QsRUFDL0QscUJBQTRDO1FBRG5DLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDL0QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxXQUFrQyxjQUFjO1FBQzdELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFdBQWtDLGNBQWM7UUFDNUQsT0FBTyxJQUFJLENBQUMsMEJBQTBCO2FBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUFsQkQsVUFBVTs7OztZQUhGLDBCQUEwQjtZQUQxQixxQkFBcUI7Ozs7Ozs7SUFPakIscURBQXVFOzs7OztJQUNoRixnREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBzY2hlbWFHbG9iYWxJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hVGhlbWVSZXBvc2l0b3J5OiBTY2hlbWFUaGVtZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2luZ2xlVGhlbWUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICB0YWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNzc0NsYXNzZXMoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==