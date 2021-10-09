/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SearchWarehouse } from '../../../../search/core/api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
export class ActiveSearchComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} searchWarehouse
     */
    constructor(changeDetectorRef, elementRef, structureId, searchCommandDispatcher, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.searchWarehouse = searchWarehouse;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.searchWarehouse.onPhrase(this.structureId), (/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.phrase = phrase;
        }));
    }
    /**
     * @return {?}
     */
    clearSearch() {
        event.stopPropagation();
        this.searchCommandDispatcher.search('', this.structureId);
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-active-search';
    }
}
ActiveSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-active-search]',
                template: "<ng-container *ngIf=\"phrase\">\n\t<div>\n\t\tActive search by:\n\t</div>\n\n\t<div>\n\t\t<gui-chip>{{phrase}}</gui-chip>\n\t</div>\n\n\t<div>\n\t\t<button (click)=\"clearSearch()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tgui-button>\n\t\t\tClear search\n\t\t</button>\n\t</div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
ActiveSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SearchCommandInvoker },
    { type: SearchWarehouse }
];
if (false) {
    /** @type {?} */
    ActiveSearchComponent.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.searchWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBUTFGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjOzs7Ozs7OztJQUl4RCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix1QkFBNkMsRUFDN0MsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUVwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFDL0MsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzs7WUFuQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDhVQUE2QztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBWGlDLGlCQUFpQjtZQUFhLFVBQVU7WUFHakUsV0FBVztZQUNYLG9CQUFvQjtZQUhwQixlQUFlOzs7O0lBYXZCLHVDQUFlOzs7OztJQUVILGtEQUFxRDs7Ozs7SUFFOUQsNENBQXlDOzs7OztJQUN6Qyx3REFBOEQ7Ozs7O0lBQzlELGdEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktYWN0aXZlLXNlYXJjaF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVNlYXJjaENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRwaHJhc2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGhyYXNlID0gcGhyYXNlO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRjbGVhclNlYXJjaCgpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmREaXNwYXRjaGVyLnNlYXJjaCgnJywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktYWN0aXZlLXNlYXJjaCc7XG5cdH1cblxufVxuIl19