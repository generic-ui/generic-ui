/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { Injectable } from '@angular/core';
import { hermesTake } from '@generic-ui/hermes';
export class SchemaDomainWarehouse extends SchemaWarehouse {
    /**
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     * @param {?} schemaHorizontalGridRepository
     * @param {?} schemaRowColoringRepository
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        super();
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
        this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        this.schemaRowColoringRepository = schemaRowColoringRepository;
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onTheme(schemaId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onceTheme(schemaId) {
        return this.onTheme(schemaId)
            .pipe(hermesTake(1));
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onHorizontalGrid(schemaId) {
        return this.schemaHorizontalGridRepository
            .on(schemaId.toAggregateId());
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onVerticalGrid(schemaId) {
        return this.schemaVerticalGridRepository
            .on(schemaId.toAggregateId());
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onRowColoring(schemaId) {
        return this.schemaRowColoringRepository
            .on(schemaId.toAggregateId());
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    onCssClasses(schemaId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    }
}
SchemaDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaDomainWarehouse.ctorParameters = () => [
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
    SchemaDomainWarehouse.prototype.schemaCssClassesRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaThemeRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaHorizontalGridRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaRowColoringRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaVerticalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUsvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQW9CLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSWxFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlOzs7Ozs7OztJQUV6RCxZQUE2QiwwQkFBc0QsRUFDL0QscUJBQTRDLEVBQzVDLDhCQUE4RCxFQUM5RCwyQkFBd0QsRUFDeEQsNEJBQTBEO1FBQzdFLEtBQUssRUFBRSxDQUFDO1FBTG9CLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDL0QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDeEQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUU5RSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxRQUErQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDdkIsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUErQjtRQUMvQyxPQUFPLElBQUksQ0FBQyw4QkFBOEI7YUFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQStCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QjthQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBK0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsMkJBQTJCO2FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxRQUErQjtRQUMzQyxPQUFPLElBQUksQ0FBQywwQkFBMEI7YUFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQXpDRCxVQUFVOzs7O1lBZEYsMEJBQTBCO1lBQzFCLHFCQUFxQjtZQUNyQiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLDRCQUE0Qjs7Ozs7OztJQWF4QiwyREFBdUU7Ozs7O0lBQ2hGLHNEQUE2RDs7Ozs7SUFDN0QsK0RBQStFOzs7OztJQUMvRSw0REFBeUU7Ozs7O0lBQ3pFLDZEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uL2FwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIGhlcm1lc1Rha2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFEb21haW5XYXJlaG91c2UgZXh0ZW5kcyBTY2hlbWFXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeTogU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25UaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdG9uY2VUaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLm9uVGhlbWUoc2NoZW1hSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSG9yaXpvbnRhbEdyaWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdG9uVmVydGljYWxHcmlkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25Sb3dDb2xvcmluZyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFSb3dDb2xvcmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdG9uQ3NzQ2xhc3NlcyhzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==