/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../lib/structure/domain-api/structure.global-id';
export class SearchPlaceholderArchive {
    constructor() {
        this.idToPlaceholder = new Map();
        this.idToPlaceholder$ = new ReplaySubject();
    }
    /**
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    next(value, structureId = structureGlobalId) {
        this.idToPlaceholder.set(structureId.getId(), value);
        this.idToPlaceholder$.next(this.idToPlaceholder);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onValue(structureId = structureGlobalId) {
        return this.idToPlaceholder$
            .asObservable()
            .pipe(map((/**
         * @param {?} idToHighlight
         * @return {?}
         */
        (idToHighlight) => {
            return idToHighlight.get(structureId.getId()) || SearchPlaceholderArchive.PLACEHOLDER;
        })));
    }
}
SearchPlaceholderArchive.PLACEHOLDER = 'Search ...';
SearchPlaceholderArchive.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUk3RixNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBS2tCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFNUMscUJBQWdCLEdBQUcsSUFBSSxhQUFhLEVBQXVCLENBQUM7SUFpQjlFLENBQUM7Ozs7OztJQWZBLElBQUksQ0FBQyxLQUFhLEVBQUUsY0FBMkIsaUJBQWlCO1FBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbkQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3RCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxhQUFrQyxFQUFFLEVBQUU7WUFDMUMsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztRQUN2RixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7QUFuQnVCLG9DQUFXLEdBQUcsWUFBWSxDQUFDOztZQUhuRCxVQUFVOzs7Ozs7O0lBR1YscUNBQW1EOzs7OztJQUVuRCxtREFBNkQ7Ozs7O0lBRTdELG9EQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUExBQ0VIT0xERVIgPSAnU2VhcmNoIC4uLic7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvUGxhY2Vob2xkZXIgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb1BsYWNlaG9sZGVyJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIHN0cmluZz4+KCk7XG5cblx0bmV4dCh2YWx1ZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuaWRUb1BsYWNlaG9sZGVyLnNldChzdHJ1Y3R1cmVJZC5nZXRJZCgpLCB2YWx1ZSk7XG5cdFx0dGhpcy5pZFRvUGxhY2Vob2xkZXIkLm5leHQodGhpcy5pZFRvUGxhY2Vob2xkZXIpO1xuXHR9XG5cblx0b25WYWx1ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuaWRUb1BsYWNlaG9sZGVyJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChpZFRvSGlnaGxpZ2h0OiBNYXA8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaWRUb0hpZ2hsaWdodC5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkgfHwgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLlBMQUNFSE9MREVSO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19