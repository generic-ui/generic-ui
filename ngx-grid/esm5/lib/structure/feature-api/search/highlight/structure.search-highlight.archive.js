/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../structure.global-id';
var StructureSearchHighlightArchive = /** @class */ (function () {
    function StructureSearchHighlightArchive() {
        this.idToHighlight = new Map();
        this.idToHighlight$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    StructureSearchHighlightArchive.prototype.next = /**
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
    StructureSearchHighlightArchive.prototype.onValue = /**
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
            return idToHighlight.get(structureId.getId()) || StructureSearchHighlightArchive.HIGHLIGHTING;
        })));
    };
    StructureSearchHighlightArchive.HIGHLIGHTING = true;
    StructureSearchHighlightArchive.decorators = [
        { type: Injectable }
    ];
    return StructureSearchHighlightArchive;
}());
export { StructureSearchHighlightArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchHighlightArchive.HIGHLIGHTING;
    /**
     * @type {?}
     * @private
     */
    StructureSearchHighlightArchive.prototype.idToHighlight;
    /**
     * @type {?}
     * @private
     */
    StructureSearchHighlightArchive.prototype.idToHighlight$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zZWFyY2gvaGlnaGxpZ2h0L3N0cnVjdHVyZS5zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJOUQ7SUFBQTtRQUtrQixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRTNDLG1CQUFjLEdBQUcsSUFBSSxhQUFhLEVBQXdCLENBQUM7SUFpQjdFLENBQUM7Ozs7OztJQWZBLDhDQUFJOzs7OztJQUFKLFVBQUssS0FBYyxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxpREFBTzs7OztJQUFQLFVBQVEsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbkQsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsYUFBbUM7WUFDdkMsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFlBQVksQ0FBQztRQUMvRixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQW5CdUIsNENBQVksR0FBRyxJQUFJLENBQUM7O2dCQUg1QyxVQUFVOztJQXdCWCxzQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLCtCQUErQjs7Ozs7O0lBRTNDLDZDQUE0Qzs7Ozs7SUFFNUMsd0RBQTREOzs7OztJQUU1RCx5REFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBISUdITElHSFRJTkcgPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb0hpZ2hsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb0hpZ2hsaWdodCQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBib29sZWFuPj4oKTtcblxuXHRuZXh0KHZhbHVlOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuaWRUb0hpZ2hsaWdodC5zZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSwgdmFsdWUpO1xuXHRcdHRoaXMuaWRUb0hpZ2hsaWdodCQubmV4dCh0aGlzLmlkVG9IaWdobGlnaHQpO1xuXHR9XG5cblx0b25WYWx1ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmlkVG9IaWdobGlnaHQkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9IaWdobGlnaHQ6IE1hcDxzdHJpbmcsIGJvb2xlYW4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb0hpZ2hsaWdodC5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkgfHwgU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5ISUdITElHSFRJTkc7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=