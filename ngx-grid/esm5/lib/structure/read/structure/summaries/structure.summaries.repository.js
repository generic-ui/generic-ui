/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Reactive } from '../../../../../common/cdk/reactive';
import { SummariesManager } from '../../../domain/structure/summaries/summaries.manager';
var StructureSummariesRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesRepository, _super);
    function StructureSummariesRepository() {
        var _this = _super.call(this) || this;
        _this.enabled = new Map();
        _this.enabled$ = new ReplaySubject();
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesRepository.prototype.init = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.setEnabled(SummariesManager.DEFAULT_ENABLED, structureId);
    };
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesRepository.prototype.setEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.next(enabled, structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesRepository.prototype.onSummariesEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.enabled$
            .asObservable()
            .pipe(this.takeUntil(), map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    /**
     * @private
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesRepository.prototype.next = /**
     * @private
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    };
    StructureSummariesRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesRepository.ctorParameters = function () { return []; };
    return StructureSummariesRepository;
}(Reactive));
export { StructureSummariesRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesRepository.prototype.enabled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUc5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUd6RjtJQUNrRCx3REFBUTtJQU16RDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQU5PLGFBQU8sR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUVyQyxjQUFRLEdBQUcsSUFBSSxhQUFhLEVBQXdCLENBQUM7O0lBSTdELENBQUM7Ozs7O0lBRUQsMkNBQUk7Ozs7SUFBSixVQUFLLFdBQXdCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELGlEQUFVOzs7OztJQUFWLFVBQVcsT0FBZ0IsRUFBRSxXQUF3QjtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHlEQUFrQjs7OztJQUFsQixVQUFtQixXQUF3QjtRQUUxQyxPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBeUI7WUFDN0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sMkNBQUk7Ozs7OztJQUFaLFVBQWEsT0FBZ0IsRUFBRSxXQUF3QjtRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQW5DRCxVQUFVOzs7O0lBcUNYLG1DQUFDO0NBQUEsQUFyQ0QsQ0FDa0QsUUFBUSxHQW9DekQ7U0FwQ1ksNEJBQTRCOzs7Ozs7SUFFeEMsK0NBQTZDOzs7OztJQUU3QyxnREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3N1bW1hcmllcy5tYW5hZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIGVuYWJsZWQgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuXHRwcml2YXRlIGVuYWJsZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgYm9vbGVhbj4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRFbmFibGVkKFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVELCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChlbmFibGVkLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgdGhpcy50YWtlVW50aWwoKSxcblx0XHRcdFx0XHQgICBtYXAoKG1hcDogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgbmV4dChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQuc2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCksIGVuYWJsZWQpO1xuXHRcdHRoaXMuZW5hYmxlZCQubmV4dCh0aGlzLmVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==