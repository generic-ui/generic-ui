/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../ui-api/structure.global-id';
export class StructureSearchHighlightArchive {
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
            return idToHighlight.get(structureId.getId()) || StructureSearchHighlightArchive.HIGHLIGHTING;
        })));
    }
}
StructureSearchHighlightArchive.HIGHLIGHTING = true;
StructureSearchHighlightArchive.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvaGlnaGxpZ2h0L3N0cnVjdHVyZS5zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFLM0UsTUFBTSxPQUFPLCtCQUErQjtJQUQ1QztRQUtrQixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRTNDLG1CQUFjLEdBQUcsSUFBSSxhQUFhLEVBQXdCLENBQUM7SUFpQjdFLENBQUM7Ozs7OztJQWZBLElBQUksQ0FBQyxLQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsY0FBMkIsaUJBQWlCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLGFBQW1DLEVBQUUsRUFBRTtZQUMzQyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksK0JBQStCLENBQUMsWUFBWSxDQUFDO1FBQy9GLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztBQW5CdUIsNENBQVksR0FBRyxJQUFJLENBQUM7O1lBSDVDLFVBQVU7Ozs7Ozs7SUFHViw2Q0FBNEM7Ozs7O0lBRTVDLHdEQUE0RDs7Ozs7SUFFNUQseURBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhJR0hMSUdIVElORyA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvSGlnaGxpZ2h0ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvSGlnaGxpZ2h0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIGJvb2xlYW4+PigpO1xuXG5cdG5leHQodmFsdWU6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5pZFRvSGlnaGxpZ2h0LnNldChzdHJ1Y3R1cmVJZC5nZXRJZCgpLCB2YWx1ZSk7XG5cdFx0dGhpcy5pZFRvSGlnaGxpZ2h0JC5uZXh0KHRoaXMuaWRUb0hpZ2hsaWdodCk7XG5cdH1cblxuXHRvblZhbHVlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuaWRUb0hpZ2hsaWdodCRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb0hpZ2hsaWdodDogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBpZFRvSGlnaGxpZ2h0LmdldChzdHJ1Y3R1cmVJZC5nZXRJZCgpKSB8fCBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLkhJR0hMSUdIVElORztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==