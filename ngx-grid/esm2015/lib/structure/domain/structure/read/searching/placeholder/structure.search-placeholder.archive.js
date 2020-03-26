/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { globalStructureId } from '../../../../global-structure-id';
export class StructureSearchPlaceholderArchive {
    constructor() {
        this.idToPlaceholder = new Map();
        this.idToPlaceholder$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = globalStructureId) {
        this.idToPlaceholder.set(structureId.getId(), value);
        this.idToPlaceholder$.next(this.idToPlaceholder);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = globalStructureId) {
        return this.idToPlaceholder$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || StructureSearchPlaceholderArchive.PLACEHOLDER;
        })));
    }
}
StructureSearchPlaceholderArchive.PLACEHOLDER = 'Search ...';
StructureSearchPlaceholderArchive.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvcGxhY2Vob2xkZXIvc3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXBFLE1BQU0sT0FBTyxpQ0FBaUM7SUFEOUM7UUFLa0Isb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUU1QyxxQkFBZ0IsR0FBRyxJQUFJLGFBQWEsRUFBdUIsQ0FBQztJQWlCOUUsQ0FBQzs7Ozs7O0lBZkEsSUFBSSxDQUFDLEtBQWEsRUFBRSxjQUEyQixpQkFBaUI7UUFDL0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLGNBQTJCLGlCQUFpQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLGFBQWtDLEVBQUUsRUFBRTtZQUMxQyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksaUNBQWlDLENBQUMsV0FBVyxDQUFDO1FBQ2hHLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztBQW5CdUIsNkNBQVcsR0FBRyxZQUFZLENBQUM7O1lBSG5ELFVBQVU7Ozs7Ozs7SUFHViw4Q0FBbUQ7Ozs7O0lBRW5ELDREQUE2RDs7Ozs7SUFFN0QsNkRBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBMQUNFSE9MREVSID0gJ1NlYXJjaCAuLi4nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb1BsYWNlaG9sZGVyID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkVG9QbGFjZWhvbGRlciQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBzdHJpbmc+PigpO1xuXG5cdG5leHQodmFsdWU6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmlkVG9QbGFjZWhvbGRlci5zZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSwgdmFsdWUpO1xuXHRcdHRoaXMuaWRUb1BsYWNlaG9sZGVyJC5uZXh0KHRoaXMuaWRUb1BsYWNlaG9sZGVyKTtcblx0fVxuXG5cdG9uVmFsdWUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLmlkVG9QbGFjZWhvbGRlciRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb0hpZ2hsaWdodDogTWFwPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGlkVG9IaWdobGlnaHQuZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpIHx8IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZS5QTEFDRUhPTERFUjtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==