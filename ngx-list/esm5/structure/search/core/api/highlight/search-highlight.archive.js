/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../core/api/structure.global-id';
var SearchHighlightArchive = /** @class */ (function () {
    function SearchHighlightArchive() {
        this.idToHighlight = new Map();
        this.idToHighlight$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    SearchHighlightArchive.prototype.next = /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    function (value, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.idToHighlight.set(structureId.getId(), value);
        this.idToHighlight$.next(this.idToHighlight);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SearchHighlightArchive.prototype.onValue = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.idToHighlight$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        function (idToHighlight) {
            return idToHighlight.get(structureId.getId()) || SearchHighlightArchive.HIGHLIGHTING;
        })));
    };
    SearchHighlightArchive.HIGHLIGHTING = true;
    SearchHighlightArchive.decorators = [
        { type: Injectable }
    ];
    return SearchHighlightArchive;
}());
export { SearchHighlightArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchHighlightArchive.HIGHLIGHTING;
    /**
     * @type {?}
     * @private
     */
    SearchHighlightArchive.prototype.idToHighlight;
    /**
     * @type {?}
     * @private
     */
    SearchHighlightArchive.prototype.idToHighlight$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJN0U7SUFBQTtRQUtrQixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRTNDLG1CQUFjLEdBQUcsSUFBSSxhQUFhLEVBQXdCLENBQUM7SUFpQjdFLENBQUM7Ozs7OztJQWZBLHFDQUFJOzs7OztJQUFKLFVBQUssS0FBYyxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCx3Q0FBTzs7OztJQUFQLFVBQVEsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbkQsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsYUFBbUM7WUFDdkMsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFlBQVksQ0FBQztRQUN0RixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQW5CdUIsbUNBQVksR0FBRyxJQUFJLENBQUM7O2dCQUg1QyxVQUFVOztJQXdCWCw2QkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLHNCQUFzQjs7Ozs7O0lBRWxDLG9DQUE0Qzs7Ozs7SUFFNUMsK0NBQTREOzs7OztJQUU1RCxnREFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhJR0hMSUdIVElORyA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvSGlnaGxpZ2h0ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvSGlnaGxpZ2h0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIGJvb2xlYW4+PigpO1xuXG5cdG5leHQodmFsdWU6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5pZFRvSGlnaGxpZ2h0LnNldChzdHJ1Y3R1cmVJZC5nZXRJZCgpLCB2YWx1ZSk7XG5cdFx0dGhpcy5pZFRvSGlnaGxpZ2h0JC5uZXh0KHRoaXMuaWRUb0hpZ2hsaWdodCk7XG5cdH1cblxuXHRvblZhbHVlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuaWRUb0hpZ2hsaWdodCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb0hpZ2hsaWdodDogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvSGlnaGxpZ2h0LmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSB8fCBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLkhJR0hMSUdIVElORztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==