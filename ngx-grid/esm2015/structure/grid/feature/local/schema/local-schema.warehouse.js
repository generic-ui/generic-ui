/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { Override } from '../../../../../common/cdk/decorators';
import { SchemaCssClassesRepository } from '../../../../../schema/core/domain-read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/core/domain-read/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../../../../../schema/core/domain-read/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../../../../../schema/core/domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../../../../../schema/core/domain-read/vertical-grid/schema.vertical-grid.repository';
import { SchemaDomainWarehouse } from '../../../../../schema/core/domain-read/schema.domain-warehouse';
export class LocalSchemaWarehouse extends SchemaDomainWarehouse {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     * @param {?} schemaHorizontalGridRepository
     * @param {?} schemaRowColoringRepository
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaReadModelRootId, schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        super(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository);
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    /**
     * @return {?}
     */
    onTheme() {
        return super.onTheme(this.schemaReadModelRootId);
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
    onHorizontalGrid() {
        return super.onHorizontalGrid(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onVerticalGrid() {
        return super.onVerticalGrid(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onRowColoring() {
        return super.onRowColoring(this.schemaReadModelRootId);
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
    { type: SchemaThemeRepository },
    { type: SchemaHorizontalGridRepository },
    { type: SchemaRowColoringRepository },
    { type: SchemaVerticalGridRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onTheme", null);
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
], LocalSchemaWarehouse.prototype, "onHorizontalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onVerticalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaWarehouse.prototype, "onRowColoring", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUdqRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDOUgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDN0csT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDMUksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDakksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFFcEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFJdkcsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHFCQUFxQjs7Ozs7Ozs7O0lBRTlELFlBQTZCLHFCQUE0QyxFQUN0RSwwQkFBc0QsRUFDdEQscUJBQTRDLEVBQzVDLDhCQUE4RCxFQUM5RCwyQkFBd0QsRUFDeEQsNEJBQTBEO1FBQzVELEtBQUssQ0FBQywwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSw4QkFBOEIsRUFDdEYsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQVBoQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBUXpFLENBQUM7Ozs7SUFHRCxPQUFPO1FBQ04sT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCxnQkFBZ0I7UUFDZixPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBR0QsY0FBYztRQUNiLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBR0QsYUFBYTtRQUNaLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsWUFBWTtRQUNYLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUF6Q0QsVUFBVTs7OztZQWRGLHFCQUFxQjtZQUtyQiwwQkFBMEI7WUFDMUIscUJBQXFCO1lBQ3JCLDhCQUE4QjtZQUM5QiwyQkFBMkI7WUFDM0IsNEJBQTRCOztBQW1CcEM7SUFEQyxRQUFROzs7NENBQ0UsVUFBVTttREFFcEI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVO3lEQUUxQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNXLFVBQVU7NERBRTdCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTswREFFM0I7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVO3lEQUUxQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNPLFVBQVU7d0RBRXpCOzs7Ozs7SUF0Q1cscURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvY3NzLWNsYXNzZXMvc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvdGhlbWUvc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC92ZXJ0aWNhbC1ncmlkL3NjaGVtYS52ZXJ0aWNhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLmRvbWFpbi13YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYVdhcmVob3VzZSBleHRlbmRzIFNjaGVtYURvbWFpbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0c2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFUaGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeTogU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksIHNjaGVtYVRoZW1lUmVwb3NpdG9yeSwgc2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0c2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LCBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRoZW1lKCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gc3VwZXIub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVUaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uSG9yaXpvbnRhbEdyaWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVmVydGljYWxHcmlkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dDb2xvcmluZygpOiBPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ3NzQ2xhc3NlcygpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ3NzQ2xhc3Nlcyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19