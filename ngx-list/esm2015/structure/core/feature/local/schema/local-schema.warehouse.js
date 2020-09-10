/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaWarehouse } from '../../../../../schema/domain-api/schema.warehouse';
import { Override } from '../../../../../common/cdk/decorators';
import { SchemaCssClassesRepository } from '../../../../../schema/domain-api/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/domain-api/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../../../../../schema/domain-api/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../../../../../schema/domain-api/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../../../../../schema/domain-api/vertical-grid/schema.vertical-grid.repository';
export class LocalSchemaWarehouse extends SchemaWarehouse {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzNILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBSzlILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUFlOzs7Ozs7Ozs7SUFFeEQsWUFBNkIscUJBQTRDLEVBQ3RFLDBCQUFzRCxFQUN0RCxxQkFBNEMsRUFDNUMsOEJBQThELEVBQzlELDJCQUF3RCxFQUN4RCw0QkFBMEQ7UUFDNUQsS0FBSyxDQUFDLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLDhCQUE4QixFQUN0RiwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBUGhDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFRekUsQ0FBQzs7OztJQUdELE9BQU87UUFDTixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELGdCQUFnQjtRQUNmLE9BQU8sS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFHRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQXpDRCxVQUFVOzs7O1lBZEYscUJBQXFCO1lBTXJCLDBCQUEwQjtZQUMxQixxQkFBcUI7WUFDckIsOEJBQThCO1lBQzlCLDJCQUEyQjtZQUMzQiw0QkFBNEI7O0FBa0JwQztJQURDLFFBQVE7Ozs0Q0FDRSxVQUFVO21EQUVwQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNXLFVBQVU7NERBRTdCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTswREFFM0I7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUSxVQUFVO3lEQUUxQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNRLFVBQVU7eURBRTFCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ08sVUFBVTt3REFFekI7Ozs7OztJQXRDVyxxREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9ob3Jpem9udGFsLWdyaWQvc2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU2NoZW1hV2FyZWhvdXNlIGV4dGVuZHMgU2NoZW1hV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5OiBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSwgc2NoZW1hVGhlbWVSZXBvc2l0b3J5LCBzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnksXG5cdFx0XHRzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksIHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiBzdXBlci5vblRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkhvcml6b250YWxHcmlkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhvcml6b250YWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsR3JpZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUm93Q29sb3JpbmcoKTogT2JzZXJ2YWJsZTxTY2hlbWFSb3dDb2xvcmluZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVRoZW1lKCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TaW5nbGVUaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Dc3NDbGFzc2VzKCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Dc3NDbGFzc2VzKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=