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
        return this.schemaRepository.on(structureId);
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
            .on(structureId)
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
            .on(structureId)
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
            .on(structureId)
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
    onSingleTheme(structureId = globalStructureId) {
        return this.schemaRepository
            .on(structureId)
            .pipe(take(1), map((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            return schema.getTheme();
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onColumnHeader(structureId = globalStructureId) {
        return this.schemaRepository
            .on(structureId)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRckUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixpQkFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzNCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUMsQ0FDaEQsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBMkIsaUJBQWlCO1FBQzdELE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFDLENBQ2hELENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxjQUEyQixpQkFBaUI7UUFDeEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLGNBQTJCLGlCQUFpQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBcEVELFVBQVU7Ozs7WUFURixnQkFBZ0I7Ozs7Ozs7SUFZWixrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hJztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYVJlcG9zaXRvcnk6IFNjaGVtYVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2NoZW1hKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWE+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uU2luZ2xlU2NoZW1hKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWE+IHtcblx0XHRyZXR1cm4gdGhpcy5vblNjaGVtYShzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25IZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldEhlaWdodCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaGVpZ2h0OiBudW1iZXIpID0+IGhlaWdodCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaGVpZ2h0OiBudW1iZXIpID0+IGhlaWdodCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Dc3NDbGFzc2VzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldENzc0NsYXNzZXMoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25TaW5nbGVUaGVtZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKSxcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldFRoZW1lKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29sdW1uSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWFDb2x1bW5IZWFkZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzY2hlbWE6IFNjaGVtYSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==