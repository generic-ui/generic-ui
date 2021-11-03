import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./mode/list-view.mode.archive";
import * as i2 from "./mode/selector/list-view.selector.archive";
export class ListViewWarehouse {
    constructor(listViewModeArchive, listViewSelectorArchive) {
        this.listViewModeArchive = listViewModeArchive;
        this.listViewSelectorArchive = listViewSelectorArchive;
    }
    onMode(id) {
        return this.listViewModeArchive.on(id);
    }
    onSelector(id) {
        return this.listViewSelectorArchive.on(id);
    }
}
ListViewWarehouse.ɵfac = function ListViewWarehouse_Factory(t) { return new (t || ListViewWarehouse)(i0.ɵɵinject(i1.ListViewModeArchive), i0.ɵɵinject(i2.ListViewSelectorArchive)); };
ListViewWarehouse.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewWarehouse, factory: ListViewWarehouse.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewWarehouse, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewModeArchive }, { type: i2.ListViewSelectorArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbGlzdC12aWV3LndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFFN0IsWUFBNkIsbUJBQXdDLEVBQ2pELHVCQUFnRDtRQUR2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ2pELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsVUFBVSxDQUFDLEVBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2tGQVpXLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5hcmNoaXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlQXJjaGl2ZTogTGlzdFZpZXdNb2RlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1NlbGVjdG9yQXJjaGl2ZTogTGlzdFZpZXdTZWxlY3RvckFyY2hpdmUpIHtcblx0fVxuXG5cdG9uTW9kZShpZDogTGlzdFZpZXdJZCk6IEhlcm1lc09ic2VydmFibGU8TGlzdFZpZXdNb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdFZpZXdNb2RlQXJjaGl2ZS5vbihpZCk7XG5cdH1cblxuXHRvblNlbGVjdG9yKGlkOiBMaXN0Vmlld0lkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdFZpZXdTZWxlY3RvckFyY2hpdmUub24oaWQpO1xuXHR9XG5cbn1cbiJdfQ==