import { Injectable } from '@angular/core';
import { ListViewMode } from '../../domain/mode/list-view-mode';
import { AggregateArchive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class ListViewModeArchive extends AggregateArchive {
    constructor() {
        super(ListViewModeArchive.default);
    }
}
ListViewModeArchive.default = ListViewMode.LIST;
ListViewModeArchive.ɵfac = function ListViewModeArchive_Factory(t) { return new (t || ListViewModeArchive)(); };
ListViewModeArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewModeArchive, factory: ListViewModeArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewModeArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3Lm1vZGUuYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUl0RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQThCO0lBSXRFO1FBQ0MsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O0FBSmUsMkJBQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO3NGQUZoQyxtQkFBbUI7eUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZUFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPExpc3RWaWV3TW9kZT4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBkZWZhdWx0ID0gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoTGlzdFZpZXdNb2RlQXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxuXG59XG4iXX0=