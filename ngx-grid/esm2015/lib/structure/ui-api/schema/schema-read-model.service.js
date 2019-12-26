/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';
import { SchemaRepository } from '../../domain/schema/read/schema-repository';
import { globalStructureId } from '../../domain/global-structure-id';
export class SchemaReadModelService {
    /**
     * @param {?} schemaRepository
     */
    constructor(schemaRepository) {
        this.schemaRepository = schemaRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSchema(structureId = globalStructureId) {
        return this.schemaRepository.select(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSingleSchema(structureId = globalStructureId) {
        return this.onSchema(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onHeight(structureId = globalStructureId) {
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        (height) => height !== undefined)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onContainerHeight(structureId = globalStructureId) {
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getContainerHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        (height) => height !== undefined)));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onCssClasses(structureId = globalStructureId) {
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getCssClasses();
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onColumnHeader(structureId = globalStructureId) {
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getColumnHeader();
        })));
    }
}
SchemaReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaReadModelService.ctorParameters = () => [
    { type: SchemaRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelService.prototype.schemaRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPckUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixpQkFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzNCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFDLENBQ2hELENBQUM7SUFDUixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLGNBQTJCLGlCQUFpQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUMsQ0FDaEQsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLGNBQTJCLGlCQUFpQjtRQUN4RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQXpERCxVQUFVOzs7O1lBUkYsZ0JBQWdCOzs7Ozs7O0lBV1osa0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYSc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNvbHVtbi1oZWFkZXInO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNzcy1jbGFzcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hUmVwb3NpdG9yeTogU2NoZW1hUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TY2hlbWEoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnkuc2VsZWN0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uU2luZ2xlU2NoZW1hKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWE+IHtcblx0XHRyZXR1cm4gdGhpcy5vblNjaGVtYShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25IZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzY2hlbWE6IFNjaGVtYSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYS5nZXRIZWlnaHQoKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGhlaWdodDogbnVtYmVyKSA9PiBoZWlnaHQgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc2NoZW1hOiBTY2hlbWEpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBzY2hlbWEuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChoZWlnaHQ6IG51bWJlcikgPT4gaGVpZ2h0ICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNzc0NsYXNzZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldENzc0NsYXNzZXMoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db2x1bW5IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNvbHVtbkhlYWRlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzY2hlbWE6IFNjaGVtYSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==