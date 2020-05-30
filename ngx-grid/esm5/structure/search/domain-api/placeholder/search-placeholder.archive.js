/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../lib/structure/domain-api/structure.global-id';
var SearchPlaceholderArchive = /** @class */ (function () {
    function SearchPlaceholderArchive() {
        this.idToPlaceholder = new Map();
        this.idToPlaceholder$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    SearchPlaceholderArchive.prototype.next = /**
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
    SearchPlaceholderArchive.prototype.onValue = /**
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
            return idToHighlight.get(structureId.getId()) || SearchPlaceholderArchive.PLACEHOLDER;
        })));
    };
    SearchPlaceholderArchive.PLACEHOLDER = 'Search ...';
    SearchPlaceholderArchive.decorators = [
        { type: Injectable }
    ];
    return SearchPlaceholderArchive;
}());
export { SearchPlaceholderArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPlaceholderArchive.PLACEHOLDER;
    /**
     * @type {?}
     * @private
     */
    SearchPlaceholderArchive.prototype.idToPlaceholder;
    /**
     * @type {?}
     * @private
     */
    SearchPlaceholderArchive.prototype.idToPlaceholder$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUc3RjtJQUFBO1FBS2tCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFNUMscUJBQWdCLEdBQUcsSUFBSSxhQUFhLEVBQXVCLENBQUM7SUFpQjlFLENBQUM7Ozs7OztJQWZBLHVDQUFJOzs7OztJQUFKLFVBQUssS0FBYSxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELDBDQUFPOzs7O0lBQVAsVUFBUSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNuRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLGFBQWtDO1lBQ3RDLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7UUFDdkYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFuQnVCLG9DQUFXLEdBQUcsWUFBWSxDQUFDOztnQkFIbkQsVUFBVTs7SUF3QlgsK0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSx3QkFBd0I7Ozs7OztJQUVwQyxxQ0FBbUQ7Ozs7O0lBRW5ELG1EQUE2RDs7Ozs7SUFFN0Qsb0RBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBQTEFDRUhPTERFUiA9ICdTZWFyY2ggLi4uJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkVG9QbGFjZWhvbGRlciA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvUGxhY2Vob2xkZXIkID0gbmV3IFJlcGxheVN1YmplY3Q8TWFwPHN0cmluZywgc3RyaW5nPj4oKTtcblxuXHRuZXh0KHZhbHVlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5pZFRvUGxhY2Vob2xkZXIuc2V0KHN0cnVjdHVyZUlkLmdldElkKCksIHZhbHVlKTtcblx0XHR0aGlzLmlkVG9QbGFjZWhvbGRlciQubmV4dCh0aGlzLmlkVG9QbGFjZWhvbGRlcik7XG5cdH1cblxuXHRvblZhbHVlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5pZFRvUGxhY2Vob2xkZXIkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9IaWdobGlnaHQ6IE1hcDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvSGlnaGxpZ2h0LmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSB8fCBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUuUExBQ0VIT0xERVI7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=