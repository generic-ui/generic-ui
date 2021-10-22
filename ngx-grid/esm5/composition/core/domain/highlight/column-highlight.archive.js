/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateArchive } from '@generic-ui/hermes';
import { ColumnHighlightManager } from './column-highlight.manager';
import { Injectable } from '@angular/core';
import { Override } from '../../../../common/cdk/decorators';
var ColumnHighlightArchive = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnHighlightArchive, _super);
    function ColumnHighlightArchive() {
        return _super.call(this, new ColumnHighlightManager()) || this;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ColumnHighlightArchive.prototype.toggle = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        var _this = this;
        this.get(key)
            .ifPresent((/**
         * @param {?} manager
         * @return {?}
         */
        function (manager) {
            manager.toggle(value);
            _this.next(key, manager);
        }));
    };
    /**
     * @protected
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    ColumnHighlightArchive.prototype.equals = /**
     * @protected
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return false;
    };
    /**
     * @protected
     * @param {?} defaultValue
     * @return {?}
     */
    ColumnHighlightArchive.prototype.createDefaultValue = /**
     * @protected
     * @param {?} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        return new ColumnHighlightManager();
    };
    ColumnHighlightArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ColumnHighlightArchive.ctorParameters = function () { return []; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [ColumnHighlightManager, ColumnHighlightManager]),
        tslib_1.__metadata("design:returntype", Boolean)
    ], ColumnHighlightArchive.prototype, "equals", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [ColumnHighlightManager]),
        tslib_1.__metadata("design:returntype", ColumnHighlightManager)
    ], ColumnHighlightArchive.prototype, "createDefaultValue", null);
    return ColumnHighlightArchive;
}(AggregateArchive));
export { ColumnHighlightArchive };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJN0Q7SUFDNEMsa0RBQXdDO0lBRW5GO2VBQ0Msa0JBQU0sSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHVDQUFNOzs7OztJQUFOLFVBQU8sR0FBa0IsRUFBRSxLQUFlO1FBQTFDLGlCQU1DO1FBTEEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDWCxTQUFTOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBR1MsdUNBQU07Ozs7OztJQUFoQixVQUFpQixDQUF5QixFQUFFLENBQXlCO1FBQ3BFLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBR1MsbURBQWtCOzs7OztJQUE1QixVQUE2QixZQUFvQztRQUNoRSxPQUFPLElBQUksc0JBQXNCLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkF2QkQsVUFBVTs7OztJQWdCVjtRQURDLFFBQVE7O2lEQUNXLHNCQUFzQixFQUFLLHNCQUFzQjs7d0RBRXBFO0lBR0Q7UUFEQyxRQUFROztpREFDa0Msc0JBQXNCO2dEQUFHLHNCQUFzQjtvRUFFekY7SUFFRiw2QkFBQztDQUFBLEFBekJELENBQzRDLGdCQUFnQixHQXdCM0Q7U0F4Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb2x1bW5IaWdobGlnaHRNYW5hZ2VyIH0gZnJvbSAnLi9jb2x1bW4taGlnaGxpZ2h0Lm1hbmFnZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkhpZ2hsaWdodEFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPENvbHVtbkhpZ2hsaWdodE1hbmFnZXI+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihuZXcgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcigpKTtcblx0fVxuXG5cdHRvZ2dsZShrZXk6IENvbXBvc2l0aW9uSWQsIHZhbHVlOiBDb2x1bW5JZCkge1xuXHRcdHRoaXMuZ2V0KGtleSlcblx0XHRcdC5pZlByZXNlbnQoKG1hbmFnZXIpID0+IHtcblx0XHRcdFx0bWFuYWdlci50b2dnbGUodmFsdWUpO1xuXHRcdFx0XHR0aGlzLm5leHQoa2V5LCBtYW5hZ2VyKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHByb3RlY3RlZCBlcXVhbHMoYTogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlciwgYjogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZTogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcik6IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIge1xuXHRcdHJldHVybiBuZXcgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcigpO1xuXHR9XG5cbn1cbiJdfQ==