/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../schema/read/schema.read-model-root-id';
import { SchemaWarehouse } from '../../../../schema/ui-api/schema.warehouse';
import { Override } from '../../../../../common/cdk/decorators';
import { SchemaCssClassesRepository } from '../../../../schema/read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../schema/read/theme/schema.theme.repository';
export class LocalSchemaWarehouse extends SchemaWarehouse {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     */
    constructor(schemaReadModelRootId, schemaCssClassesRepository, schemaThemeRepository) {
        super(schemaCssClassesRepository, schemaThemeRepository);
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    /**
     * @return {?}
     */
    onSingleTheme() {
        return super.onSingleTheme(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onCssClasses() {
        return super.onCssClasses(this.schemaReadModelRootId);
    }
}
LocalSchemaWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaWarehouse.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: SchemaCssClassesRepository },
    { type: SchemaThemeRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onSingleTheme", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onCssClasses", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaWarehouse.prototype.schemaReadModelRootId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBSTlGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUFlOzs7Ozs7SUFFeEQsWUFBNkIscUJBQTRDLEVBQ3RFLDBCQUFzRCxFQUN0RCxxQkFBNEM7UUFDOUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFIN0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUl6RSxDQUFDOzs7O0lBR0QsYUFBYTtRQUNaLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsWUFBWTtRQUNYLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUFqQkQsVUFBVTs7OztZQVZGLHFCQUFxQjtZQU1yQiwwQkFBMEI7WUFDMUIscUJBQXFCOztBQWE3QjtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVO3lEQUUxQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNPLFVBQVU7d0RBRXpCOzs7Ozs7SUFkVyxxREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvdWktYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9yZWFkL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvcmVhZC90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU2NoZW1hV2FyZWhvdXNlIGV4dGVuZHMgU2NoZW1hV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksIHNjaGVtYVRoZW1lUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVUaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ3NzQ2xhc3NlcygpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ3NzQ2xhc3Nlcyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19