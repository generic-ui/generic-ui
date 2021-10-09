/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
export class ListViewWarehouse {
    /**
     * @param {?} listViewModeArchive
     * @param {?} listViewSelectorArchive
     */
    constructor(listViewModeArchive, listViewSelectorArchive) {
        this.listViewModeArchive = listViewModeArchive;
        this.listViewSelectorArchive = listViewSelectorArchive;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    onMode(id) {
        return this.listViewModeArchive.on(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    onSelector(id) {
        return this.listViewSelectorArchive.on(id);
    }
}
ListViewWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewWarehouse.ctorParameters = () => [
    { type: ListViewModeArchive },
    { type: ListViewSelectorArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewWarehouse.prototype.listViewModeArchive;
    /**
     * @type {?}
     * @private
     */
    ListViewWarehouse.prototype.listViewSelectorArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbGlzdC12aWV3LndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUlyRixNQUFNLE9BQU8saUJBQWlCOzs7OztJQUU3QixZQUE2QixtQkFBd0MsRUFDakQsdUJBQWdEO1FBRHZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDakQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxFQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFjO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTEYsbUJBQW1CO1lBRW5CLHVCQUF1Qjs7Ozs7OztJQU1uQixnREFBeUQ7Ozs7O0lBQ2xFLG9EQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvckFyY2hpdmUgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1dhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld01vZGVBcmNoaXZlOiBMaXN0Vmlld01vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3U2VsZWN0b3JBcmNoaXZlOiBMaXN0Vmlld1NlbGVjdG9yQXJjaGl2ZSkge1xuXHR9XG5cblx0b25Nb2RlKGlkOiBMaXN0Vmlld0lkKTogSGVybWVzT2JzZXJ2YWJsZTxMaXN0Vmlld01vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5saXN0Vmlld01vZGVBcmNoaXZlLm9uKGlkKTtcblx0fVxuXG5cdG9uU2VsZWN0b3IoaWQ6IExpc3RWaWV3SWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5saXN0Vmlld1NlbGVjdG9yQXJjaGl2ZS5vbihpZCk7XG5cdH1cblxufVxuIl19