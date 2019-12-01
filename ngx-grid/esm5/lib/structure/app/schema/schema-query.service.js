/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';
import { SchemaRepository } from '../../domain/schema/query/schema-repository';
import { globalStructureId } from '../../domain/global-structure-id';
var SchemaQueryService = /** @class */ (function () {
    function SchemaQueryService(schemaRepository) {
        this.schemaRepository = schemaRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.select = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository.select(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectHeight = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        function (height) { return height !== undefined; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectContainerHeight = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getContainerHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        function (height) { return height !== undefined; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectOne = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.select(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectCssClasses = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getCssClasses();
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectColumnHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getColumnHeader();
        })));
    };
    SchemaQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaQueryService.ctorParameters = function () { return [
        { type: SchemaRepository }
    ]; };
    return SchemaQueryService;
}());
export { SchemaQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaQueryService.prototype.schemaRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3NjaGVtYS9zY2hlbWEtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU1yRTtJQUdDLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELG1DQUFNOzs7O0lBQU4sVUFBTyxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNsRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCx5Q0FBWTs7OztJQUFaLFVBQWEsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDeEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWM7WUFDbEIsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxLQUFLLFNBQVMsRUFBcEIsQ0FBb0IsRUFBQyxDQUNoRCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxrREFBcUI7Ozs7SUFBckIsVUFBc0IsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDakUsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWM7WUFDbEIsT0FBTyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLEtBQUssU0FBUyxFQUFwQixDQUFvQixFQUFDLENBQ2hELENBQUM7SUFDUixDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNyRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ3pCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzVELE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxNQUFjO1lBQ2xCLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsTUFBYztZQUNsQixPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Z0JBekRELFVBQVU7Ozs7Z0JBUkYsZ0JBQWdCOztJQW1FekIseUJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTFEWSxrQkFBa0I7Ozs7OztJQUVsQiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hLWNzcy1jbGFzcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVF1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFSZXBvc2l0b3J5OiBTY2hlbWFSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRzZWxlY3Qoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnkuc2VsZWN0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNlbGVjdEhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHNjaGVtYTogU2NoZW1hKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc2NoZW1hLmdldEhlaWdodCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoaGVpZ2h0OiBudW1iZXIpID0+IGhlaWdodCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0Q29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc2NoZW1hOiBTY2hlbWEpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBzY2hlbWEuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChoZWlnaHQ6IG51bWJlcikgPT4gaGVpZ2h0ICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRzZWxlY3RPbmUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0Q3NzQ2xhc3NlcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc2NoZW1hOiBTY2hlbWEpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBzY2hlbWEuZ2V0Q3NzQ2xhc3NlcygpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRzZWxlY3RDb2x1bW5IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNvbHVtbkhlYWRlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzY2hlbWE6IFNjaGVtYSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHNjaGVtYS5nZXRDb2x1bW5IZWFkZXIoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==