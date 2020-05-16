/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../structure.global-id';
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
        if (structureId === void 0) { structureId = structureGlobalId; }
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
        if (structureId === void 0) { structureId = structureGlobalId; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc2VhcmNoL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc5RDtJQUFBO1FBS2tCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFNUMscUJBQWdCLEdBQUcsSUFBSSxhQUFhLEVBQXVCLENBQUM7SUFpQjlFLENBQUM7Ozs7OztJQWZBLGdEQUFJOzs7OztJQUFKLFVBQUssS0FBYSxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELG1EQUFPOzs7O0lBQVAsVUFBUSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNuRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLGFBQWtDO1lBQ3RDLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxpQ0FBaUMsQ0FBQyxXQUFXLENBQUM7UUFDaEcsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFuQnVCLDZDQUFXLEdBQUcsWUFBWSxDQUFDOztnQkFIbkQsVUFBVTs7SUF3Qlgsd0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxpQ0FBaUM7Ozs7OztJQUU3Qyw4Q0FBbUQ7Ozs7O0lBRW5ELDREQUE2RDs7Ozs7SUFFN0QsNkRBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBQTEFDRUhPTERFUiA9ICdTZWFyY2ggLi4uJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkVG9QbGFjZWhvbGRlciA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvUGxhY2Vob2xkZXIkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgc3RyaW5nPj4oKTtcblxuXHRuZXh0KHZhbHVlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5pZFRvUGxhY2Vob2xkZXIuc2V0KHN0cnVjdHVyZUlkLmdldElkKCksIHZhbHVlKTtcblx0XHR0aGlzLmlkVG9QbGFjZWhvbGRlciQubmV4dCh0aGlzLmlkVG9QbGFjZWhvbGRlcik7XG5cdH1cblxuXHRvblZhbHVlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5pZFRvUGxhY2Vob2xkZXIkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9IaWdobGlnaHQ6IE1hcDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvSGlnaGxpZ2h0LmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSB8fCBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUuUExBQ0VIT0xERVI7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=