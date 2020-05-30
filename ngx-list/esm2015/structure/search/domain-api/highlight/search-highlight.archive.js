/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../lib/structure/domain-api/structure.global-id';
export class SearchHighlightArchive {
    constructor() {
        this.idToHighlight = new Map();
        this.idToHighlight$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = structureGlobalId) {
        this.idToHighlight.set(structureId.getId(), value);
        this.idToHighlight$.next(this.idToHighlight);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = structureGlobalId) {
        return this.idToHighlight$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || SearchHighlightArchive.HIGHLIGHTING;
        })));
    }
}
SearchHighlightArchive.HIGHLIGHTING = true;
SearchHighlightArchive.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUs3RixNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBS2tCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLGFBQWEsRUFBd0IsQ0FBQztJQWlCN0UsQ0FBQzs7Ozs7O0lBZkEsSUFBSSxDQUFDLEtBQWMsRUFBRSxjQUEyQixpQkFBaUI7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbkQsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsYUFBbUMsRUFBRSxFQUFFO1lBQzNDLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7UUFDdEYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O0FBbkJ1QixtQ0FBWSxHQUFHLElBQUksQ0FBQzs7WUFINUMsVUFBVTs7Ozs7OztJQUdWLG9DQUE0Qzs7Ozs7SUFFNUMsK0NBQTREOzs7OztJQUU1RCxnREFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBISUdITElHSFRJTkcgPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb0hpZ2hsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb0hpZ2hsaWdodCQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBib29sZWFuPj4oKTtcblxuXHRuZXh0KHZhbHVlOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuaWRUb0hpZ2hsaWdodC5zZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSwgdmFsdWUpO1xuXHRcdHRoaXMuaWRUb0hpZ2hsaWdodCQubmV4dCh0aGlzLmlkVG9IaWdobGlnaHQpO1xuXHR9XG5cblx0b25WYWx1ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmlkVG9IaWdobGlnaHQkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9IaWdobGlnaHQ6IE1hcDxzdHJpbmcsIGJvb2xlYW4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb0hpZ2hsaWdodC5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkgfHwgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5ISUdITElHSFRJTkc7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=