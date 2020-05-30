/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../lib/structure/domain-api/structure.global-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUk3RjtJQUFBO1FBS2tCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLGFBQWEsRUFBd0IsQ0FBQztJQWlCN0UsQ0FBQzs7Ozs7O0lBZkEscUNBQUk7Ozs7O0lBQUosVUFBSyxLQUFjLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNuRCxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxhQUFtQztZQUN2QyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsWUFBWSxDQUFDO1FBQ3RGLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBbkJ1QixtQ0FBWSxHQUFHLElBQUksQ0FBQzs7Z0JBSDVDLFVBQVU7O0lBd0JYLDZCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2Qlksc0JBQXNCOzs7Ozs7SUFFbEMsb0NBQTRDOzs7OztJQUU1QywrQ0FBNEQ7Ozs7O0lBRTVELGdEQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhJR0hMSUdIVElORyA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvSGlnaGxpZ2h0ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvSGlnaGxpZ2h0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIGJvb2xlYW4+PigpO1xuXG5cdG5leHQodmFsdWU6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5pZFRvSGlnaGxpZ2h0LnNldChzdHJ1Y3R1cmVJZC5nZXRJZCgpLCB2YWx1ZSk7XG5cdFx0dGhpcy5pZFRvSGlnaGxpZ2h0JC5uZXh0KHRoaXMuaWRUb0hpZ2hsaWdodCk7XG5cdH1cblxuXHRvblZhbHVlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuaWRUb0hpZ2hsaWdodCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb0hpZ2hsaWdodDogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvSGlnaGxpZ2h0LmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSB8fCBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLkhJR0hMSUdIVElORztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==