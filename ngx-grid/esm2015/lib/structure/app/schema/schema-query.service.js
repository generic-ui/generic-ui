/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';
import { SchemaRepository } from '../../domain/schema/query/schema-repository';
import { globalStructureId } from '../../domain/global-structure-id';
export class SchemaQueryService {
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
    select(structureId = globalStructureId) {
        return this.schemaRepository.select(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectHeight(structureId = globalStructureId) {
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
    selectContainerHeight(structureId = globalStructureId) {
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
    selectOne(structureId = globalStructureId) {
        return this.select(structureId)
            .pipe(take(1));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectCssClasses(structureId = globalStructureId) {
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
    selectColumnHeader(structureId = globalStructureId) {
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
SchemaQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaQueryService.ctorParameters = () => [
    { type: SchemaRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaQueryService.prototype.schemaRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3NjaGVtYS9zY2hlbWEtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTlCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNsRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUMsQ0FDaEQsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsY0FBMkIsaUJBQWlCO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBQyxDQUNoRCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDekIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxjQUEyQixpQkFBaUI7UUFDNUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLGNBQTJCLGlCQUFpQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQXpERCxVQUFVOzs7O1lBUkYsZ0JBQWdCOzs7Ozs7O0lBV1osOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3F1ZXJ5L3NjaGVtYS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hJztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLWNvbHVtbi1oZWFkZXInO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3F1ZXJ5L3NjaGVtYS1jc3MtY2xhc3MnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFRdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hUmVwb3NpdG9yeTogU2NoZW1hUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0c2VsZWN0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWE+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5LnNlbGVjdChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZWxlY3RIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzY2hlbWE6IFNjaGVtYSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYS5nZXRIZWlnaHQoKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGhlaWdodDogbnVtYmVyKSA9PiBoZWlnaHQgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHNlbGVjdENvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldENvbnRhaW5lckhlaWdodCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaGVpZ2h0OiBudW1iZXIpID0+IGhlaWdodCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0T25lKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWE+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIHRha2UoMSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHNlbGVjdENzc0NsYXNzZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldENzc0NsYXNzZXMoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0Q29sdW1uSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWFDb2x1bW5IZWFkZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc2NoZW1hOiBTY2hlbWEpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBzY2hlbWEuZ2V0Q29sdW1uSGVhZGVyKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=