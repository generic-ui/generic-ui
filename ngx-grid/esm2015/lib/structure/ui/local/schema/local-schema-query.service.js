/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaQueryService } from '../../../app/schema/schema-query.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaRepository } from '../../../domain/schema/query/schema-repository';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
export class LocalSchemaQueryService extends SchemaQueryService {
    /**
     * @param {?} structureId
     * @param {?} schemaRepository
     */
    constructor(structureId, schemaRepository) {
        super(schemaRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    select() {
        return super.select(this.structureId);
    }
    /**
     * @return {?}
     */
    selectHeight() {
        return super.selectHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    selectContainerHeight() {
        return super.selectContainerHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    selectOne() {
        return super.selectOne(this.structureId);
    }
    /**
     * @return {?}
     */
    selectCssClasses() {
        return super.selectCssClasses(this.structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectColumnHeader(structureId = globalStructureId) {
        return super.selectColumnHeader(this.structureId);
    }
}
LocalSchemaQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaQueryService.ctorParameters = () => [
    { type: StructureId },
    { type: SchemaRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaQueryService.prototype, "select", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaQueryService.prototype, "selectHeight", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaQueryService.prototype, "selectContainerHeight", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaQueryService.prototype, "selectOne", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaQueryService.prototype, "selectCssClasses", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StructureId]),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaQueryService.prototype, "selectColumnHeader", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc2NoZW1hL2xvY2FsLXNjaGVtYS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFNeEUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjs7Ozs7SUFFOUQsWUFBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBQ3BDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRkwsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHNUMsQ0FBQzs7OztJQUdELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFHRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0QscUJBQXFCO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBR0QsU0FBUztRQUNSLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUdELGdCQUFnQjtRQUNmLE9BQU8sS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUdELGtCQUFrQixDQUFDLGNBQTJCLGlCQUFpQjtRQUM5RCxPQUFPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBcENELFVBQVU7Ozs7WUFWRixXQUFXO1lBQ1gsZ0JBQWdCOztBQWtCeEI7SUFEQyxRQUFROzs7NENBQ0MsVUFBVTtxREFFbkI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTyxVQUFVOzJEQUV6QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNnQixVQUFVO29FQUVsQztBQUdEO0lBREMsUUFBUTs7OzRDQUNJLFVBQVU7d0RBRXRCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1csVUFBVTsrREFFN0I7QUFHRDtJQURDLFFBQVE7OzZDQUN1QixXQUFXOzRDQUF1QixVQUFVO2lFQUUzRTs7Ozs7O0lBakNXLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjaGVtYVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zY2hlbWEvc2NoZW1hLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3F1ZXJ5L3NjaGVtYS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFRdWVyeVNlcnZpY2UgZXh0ZW5kcyBTY2hlbWFRdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFSZXBvc2l0b3J5OiBTY2hlbWFSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc2NoZW1hUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0KCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdENvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RDb250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0T25lKCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdE9uZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RDc3NDbGFzc2VzKCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0Q3NzQ2xhc3Nlcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RDb2x1bW5IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNvbHVtbkhlYWRlcj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RDb2x1bW5IZWFkZXIodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19