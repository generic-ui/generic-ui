import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { StructureId } from '../../../../core/api/structure.id';
export class AlternativePagingPagesComponent extends PureComponent {
    constructor(elRef, structureId, pagingCommandService) {
        super(elRef);
        this.structureId = structureId;
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    ngOnChanges(changes) {
        this.calculate();
    }
    calculate() {
        if (this.paging && this.sourceSize) {
            const numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (let i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    }
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    goToPage(pageNumber) {
        const currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage, this.structureId);
    }
    calculateVisiblePages(page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    }
    activePage(page) {
        return this.currentPage === page;
    }
    getSelectorName() {
        return 'gui-paging-alternative-pages';
    }
}
AlternativePagingPagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-paging-alternative-pages][paging]',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\"\n\t\t\t class=\"relative\">\n\t\t\t<div (click)=\"goToPage(page)\"\n\t\t\t\t class=\"gui-paging-page gui-select-none gui-cursor-pointer gui-py-0 gui-px-6 gui-font-base\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
AlternativePagingPagesComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: StructureId },
    { type: PagingCommandInvoker }
];
AlternativePagingPagesComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFTaEUsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGFBQWE7SUFjakUsWUFBWSxLQUFpQixFQUNULFdBQXdCLEVBQ3hCLG9CQUEwQztRQUM3RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGTSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVjlELGVBQVUsR0FBWSxDQUFDLENBQUM7UUFNeEIseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBTWpDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBbUQ7UUFDOUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUU3RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjthQUNEO1NBRUQ7SUFDRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWtCO1FBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQscUJBQXFCLENBQUMsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDOzs7WUFqRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELHlvQkFBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBZDRDLFVBQVU7WUFNOUMsV0FBVztZQUhYLG9CQUFvQjs7O3FCQWMzQixLQUFLO3lCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzXVtwYWdpbmddJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZ01vZGVsO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU/OiBudW1iZXIgPSAwO1xuXG5cdGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cblx0cGFnZXM6IEFycmF5PG51bWJlcj47XG5cblx0bnVtYmVyT2ZWaXNpYmxlUGFnZXM6IG51bWJlciA9IDM7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50Pikge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nICYmIHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0Y29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnaW5nLmdldFBhZ2UoKTtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXHRcdFx0aWYgKHRoaXMucGFnZXMubGVuZ3RoIDw9IG51bWJlck9mUGFnZXMpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZQYWdlczsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRpc1NvdXJjZU5vdEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5nb1RvUGFnZShwYWdlTnVtYmVyLCBjdXJyZW50UGFnZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nLmNhbGN1bGF0ZVZpc2libGVQYWdlcyh0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzLCBwYWdlKTtcblx0fVxuXG5cdGFjdGl2ZVBhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPT09IHBhZ2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzJztcblx0fVxuXG59XG4iXX0=