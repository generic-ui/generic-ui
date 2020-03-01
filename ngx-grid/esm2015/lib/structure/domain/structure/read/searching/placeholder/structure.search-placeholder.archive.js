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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvcGxhY2Vob2xkZXIvc3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFVLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXBFLE1BQU0sT0FBTyxpQ0FBaUM7SUFEOUM7UUFLa0Isb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUU1QyxxQkFBZ0IsR0FBRyxJQUFJLGFBQWEsRUFBdUIsQ0FBQztJQWlCOUUsQ0FBQzs7Ozs7O0lBZkEsSUFBSSxDQUFDLEtBQWEsRUFBRSxjQUEyQixpQkFBaUI7UUFDL0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLGNBQTJCLGlCQUFpQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLGFBQWtDLEVBQUUsRUFBRTtZQUMxQyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksaUNBQWlDLENBQUMsV0FBVyxDQUFDO1FBQ2hHLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOztBQW5CdUIsNkNBQVcsR0FBRyxZQUFZLENBQUM7O1lBSG5ELFVBQVU7Ozs7Ozs7SUFHViw4Q0FBbUQ7Ozs7O0lBRW5ELDREQUE2RDs7Ozs7SUFFN0QsNkRBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUExBQ0VIT0xERVIgPSAnU2VhcmNoIC4uLic7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZFRvUGxhY2Vob2xkZXIgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWRUb1BsYWNlaG9sZGVyJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE1hcDxzdHJpbmcsIHN0cmluZz4+KCk7XG5cblx0bmV4dCh2YWx1ZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuaWRUb1BsYWNlaG9sZGVyLnNldChzdHJ1Y3R1cmVJZC5nZXRJZCgpLCB2YWx1ZSk7XG5cdFx0dGhpcy5pZFRvUGxhY2Vob2xkZXIkLm5leHQodGhpcy5pZFRvUGxhY2Vob2xkZXIpO1xuXHR9XG5cblx0b25WYWx1ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuaWRUb1BsYWNlaG9sZGVyJFxuXHRcdFx0XHQgICAuYXNPYnNlcnZhYmxlKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChpZFRvSGlnaGxpZ2h0OiBNYXA8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG5cdFx0XHRcdFx0ICAgXHRyZXR1cm4gaWRUb0hpZ2hsaWdodC5nZXQoc3RydWN0dXJlSWQuZ2V0SWQoKSkgfHwgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLlBMQUNFSE9MREVSO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19