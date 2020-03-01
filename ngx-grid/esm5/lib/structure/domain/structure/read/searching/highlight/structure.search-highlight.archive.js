/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { globalStructureId } from '../../../../global-structure-id';
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
        if (structureId === void 0) { structureId = globalStructureId; }
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
        if (structureId === void 0) { structureId = globalStructureId; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL2hpZ2hsaWdodC9zdHJ1Y3R1cmUuc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXBFO0lBQUE7UUFLa0Isa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUUzQyxtQkFBYyxHQUFHLElBQUksYUFBYSxFQUF3QixDQUFDO0lBaUI3RSxDQUFDOzs7Ozs7SUFmQSw4Q0FBSTs7Ozs7SUFBSixVQUFLLEtBQWMsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsaURBQU87Ozs7SUFBUCxVQUFRLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLGFBQW1DO1lBQ3ZDLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxZQUFZLENBQUM7UUFDL0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFuQnVCLDRDQUFZLEdBQUcsSUFBSSxDQUFDOztnQkFINUMsVUFBVTs7SUF3Qlgsc0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSwrQkFBK0I7Ozs7OztJQUUzQyw2Q0FBNEM7Ozs7O0lBRTVDLHdEQUE0RDs7Ozs7SUFFNUQseURBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBISUdITElHSFRJTkcgPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb0hpZ2hsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb0hpZ2hsaWdodCQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBib29sZWFuPj4oKTtcblxuXHRuZXh0KHZhbHVlOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuaWRUb0hpZ2hsaWdodC5zZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSwgdmFsdWUpO1xuXHRcdHRoaXMuaWRUb0hpZ2hsaWdodCQubmV4dCh0aGlzLmlkVG9IaWdobGlnaHQpO1xuXHR9XG5cblx0b25WYWx1ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmlkVG9IaWdobGlnaHQkXG5cdFx0XHRcdCAgIC5hc09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGlkVG9IaWdobGlnaHQ6IE1hcDxzdHJpbmcsIGJvb2xlYW4+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb0hpZ2hsaWdodC5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkgfHwgU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5ISUdITElHSFRJTkc7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=