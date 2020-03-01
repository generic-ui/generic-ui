/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { globalStructureId } from '../../../../global-structure-id';
var StructureSearchPlaceholderArchive = /** @class */ (function () {
    function StructureSearchPlaceholderArchive() {
        this.idToPlaceholder = new Map();
        this.idToPlaceholder$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    StructureSearchPlaceholderArchive.prototype.next = /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    function (value, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.idToPlaceholder.set(structureId.getId(), value);
        this.idToPlaceholder$.next(this.idToPlaceholder);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSearchPlaceholderArchive.prototype.onValue = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.idToPlaceholder$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        function (idToHighlight) {
            return idToHighlight.get(structureId.getId()) || StructureSearchPlaceholderArchive.PLACEHOLDER;
        })));
    };
    StructureSearchPlaceholderArchive.PLACEHOLDER = 'Search ...';
    StructureSearchPlaceholderArchive.decorators = [
        { type: Injectable }
    ];
    return StructureSearchPlaceholderArchive;
}());
export { StructureSearchPlaceholderArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPlaceholderArchive.PLACEHOLDER;
    /**
     * @type {?}
     * @private
     */
    StructureSearchPlaceholderArchive.prototype.idToPlaceholder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchPlaceholderArchive.prototype.idToPlaceholder$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvcGxhY2Vob2xkZXIvc3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFVLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3BFO0lBQUE7UUFLa0Isb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUU1QyxxQkFBZ0IsR0FBRyxJQUFJLGFBQWEsRUFBdUIsQ0FBQztJQWlCOUUsQ0FBQzs7Ozs7O0lBZkEsZ0RBQUk7Ozs7O0lBQUosVUFBSyxLQUFhLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDL0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsbURBQU87Ozs7SUFBUCxVQUFRLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN0QixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsYUFBa0M7WUFDdEMsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLGlDQUFpQyxDQUFDLFdBQVcsQ0FBQztRQUNoRyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQW5CdUIsNkNBQVcsR0FBRyxZQUFZLENBQUM7O2dCQUhuRCxVQUFVOztJQXdCWCx3Q0FBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLGlDQUFpQzs7Ozs7O0lBRTdDLDhDQUFtRDs7Ozs7SUFFbkQsNERBQTZEOzs7OztJQUU3RCw2REFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWwtc3RydWN0dXJlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBQTEFDRUhPTERFUiA9ICdTZWFyY2ggLi4uJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkVG9QbGFjZWhvbGRlciA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvUGxhY2Vob2xkZXIkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgc3RyaW5nPj4oKTtcblxuXHRuZXh0KHZhbHVlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5pZFRvUGxhY2Vob2xkZXIuc2V0KHN0cnVjdHVyZUlkLmdldElkKCksIHZhbHVlKTtcblx0XHR0aGlzLmlkVG9QbGFjZWhvbGRlciQubmV4dCh0aGlzLmlkVG9QbGFjZWhvbGRlcik7XG5cdH1cblxuXHRvblZhbHVlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5pZFRvUGxhY2Vob2xkZXIkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9IaWdobGlnaHQ6IE1hcDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblx0XHRcdFx0XHQgICBcdHJldHVybiBpZFRvSGlnaGxpZ2h0LmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSB8fCBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUuUExBQ0VIT0xERVI7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=