/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../ui-api/structure.global-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlL3NlYXJjaGluZy9wbGFjZWhvbGRlci9zdHJ1Y3R1cmUuc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHM0U7SUFBQTtRQUtrQixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRTVDLHFCQUFnQixHQUFHLElBQUksYUFBYSxFQUF1QixDQUFDO0lBaUI5RSxDQUFDOzs7Ozs7SUFmQSxnREFBSTs7Ozs7SUFBSixVQUFLLEtBQWEsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxtREFBTzs7OztJQUFQLFVBQVEsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbkQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxhQUFrQztZQUN0QyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksaUNBQWlDLENBQUMsV0FBVyxDQUFDO1FBQ2hHLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBbkJ1Qiw2Q0FBVyxHQUFHLFlBQVksQ0FBQzs7Z0JBSG5ELFVBQVU7O0lBd0JYLHdDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksaUNBQWlDOzs7Ozs7SUFFN0MsOENBQW1EOzs7OztJQUVuRCw0REFBNkQ7Ozs7O0lBRTdELDZEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBMQUNFSE9MREVSID0gJ1NlYXJjaCAuLi4nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb1BsYWNlaG9sZGVyID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkVG9QbGFjZWhvbGRlciQgPSBuZXcgUmVwbGF5U3ViamVjdDxNYXA8c3RyaW5nLCBzdHJpbmc+PigpO1xuXG5cdG5leHQodmFsdWU6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmlkVG9QbGFjZWhvbGRlci5zZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSwgdmFsdWUpO1xuXHRcdHRoaXMuaWRUb1BsYWNlaG9sZGVyJC5uZXh0KHRoaXMuaWRUb1BsYWNlaG9sZGVyKTtcblx0fVxuXG5cdG9uVmFsdWUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLmlkVG9QbGFjZWhvbGRlciRcblx0XHRcdFx0ICAgLmFzT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoaWRUb0hpZ2hsaWdodDogTWFwPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGlkVG9IaWdobGlnaHQuZ2V0KHN0cnVjdHVyZUlkLmdldElkKCkpIHx8IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZS5QTEFDRUhPTERFUjtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==