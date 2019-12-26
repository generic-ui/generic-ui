/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Schema } from './read/schema';
import { SchemaColumnHeader } from './read/schema-column-header';
var SchemaConverter = /** @class */ (function () {
    function SchemaConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    SchemaConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var columnHeader = aggregate.getColumnHeader();
        return new Schema(aggregate.getWidth(), aggregate.getHeight(), aggregate.getContainerHeight(), aggregate.isVerticalGridEnabled(), aggregate.isHorizontalGridEnabled(), aggregate.getTheme(), this.convertColumnHeader(columnHeader), aggregate.getRowColoring());
    };
    /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    SchemaConverter.prototype.convertColumnHeader = /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    function (columnHeader) {
        return new SchemaColumnHeader(columnHeader.isHeaderOnTop(), columnHeader.isHeaderOnBottom());
    };
    SchemaConverter.decorators = [
        { type: Injectable }
    ];
    return SchemaConverter;
}());
export { SchemaConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL3NjaGVtYS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdqRTtJQUFBO0lBdUJBLENBQUM7Ozs7O0lBcEJBLGlDQUFPOzs7O0lBQVAsVUFBUSxTQUEwQjs7WUFFM0IsWUFBWSxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUU7UUFFaEQsT0FBTyxJQUFJLE1BQU0sQ0FDaEIsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUNwQixTQUFTLENBQUMsU0FBUyxFQUFFLEVBQ3JCLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUM5QixTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFDakMsU0FBUyxDQUFDLHVCQUF1QixFQUFFLEVBQ25DLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUN0QyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQzFCLENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyw2Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLFlBQWdDO1FBQzNELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDOztnQkFyQkQsVUFBVTs7SUF1Qlgsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL3NjaGVtYS1hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9yZWFkL3NjaGVtYSc7XG5pbXBvcnQgeyBDb2x1bW5IZWFkZXJFbnRpdHkgfSBmcm9tICcuL2NvbW1hbmQvY29sdW1uLWhlYWRlci9jb2x1bW4taGVhZGVyLmVudGl0eSc7XG5pbXBvcnQgeyBTY2hlbWFDb2x1bW5IZWFkZXIgfSBmcm9tICcuL3JlYWQvc2NoZW1hLWNvbHVtbi1oZWFkZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUpOiBTY2hlbWEge1xuXG5cdFx0Y29uc3QgY29sdW1uSGVhZGVyID0gYWdncmVnYXRlLmdldENvbHVtbkhlYWRlcigpO1xuXG5cdFx0cmV0dXJuIG5ldyBTY2hlbWEoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRIZWlnaHQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRDb250YWluZXJIZWlnaHQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc1ZlcnRpY2FsR3JpZEVuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZS5pc0hvcml6b250YWxHcmlkRW5hYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlLmdldFRoZW1lKCksXG5cdFx0XHR0aGlzLmNvbnZlcnRDb2x1bW5IZWFkZXIoY29sdW1uSGVhZGVyKSxcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRSb3dDb2xvcmluZygpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydENvbHVtbkhlYWRlcihjb2x1bW5IZWFkZXI6IENvbHVtbkhlYWRlckVudGl0eSk6IFNjaGVtYUNvbHVtbkhlYWRlciB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFDb2x1bW5IZWFkZXIoY29sdW1uSGVhZGVyLmlzSGVhZGVyT25Ub3AoKSwgY29sdW1uSGVhZGVyLmlzSGVhZGVyT25Cb3R0b20oKSk7XG5cdH1cblxufVxuIl19