import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../../core/structure/paging/api/paging.publisher";
import * as i3 from "@angular/common";
import * as i4 from "../../../../l10n/translation.pipe";
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
AlternativePagingPagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlternativePagingPagesComponent, deps: [{ token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.PagingPublisher }], target: i0.ɵɵFactoryTarget.Component });
AlternativePagingPagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: AlternativePagingPagesComponent, selector: "div[gui-paging-alternative-pages][paging]", inputs: { paging: "paging", sourceSize: "sourceSize" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\"\n\t\t\t class=\"relative\">\n\t\t\t<div (click)=\"goToPage(page)\"\n\t\t\t\t class=\"gui-paging-page gui-select-none gui-cursor-pointer gui-py-0 gui-px-6 gui-font-base\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "guiTranslate": i4.TranslationPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlternativePagingPagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-alternative-pages][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\"\n\t\t\t class=\"relative\">\n\t\t\t<div (click)=\"goToPage(page)\"\n\t\t\t\t class=\"gui-paging-page gui-select-none gui-cursor-pointer gui-py-0 gui-px-6 gui-font-base\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.PagingPublisher }]; }, propDecorators: { paging: [{
                type: Input
            }], sourceSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9hZHZhbmNlZC9wYWdlcy9hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7Ozs7QUFVaEYsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGFBQWE7SUFjakUsWUFBWSxLQUFpQixFQUNULFdBQXdCLEVBQ3hCLG9CQUFxQztRQUN4RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGTSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWlCO1FBVnpELGVBQVUsR0FBWSxDQUFDLENBQUM7UUFNeEIseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBTWpDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBbUQ7UUFDOUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUU3RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjthQUNEO1NBRUQ7SUFDRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWtCO1FBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQscUJBQXFCLENBQUMsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDOzs2SEEzRFcsK0JBQStCO2lIQUEvQiwrQkFBK0IscUxDZjVDLCtuQkFvQkE7NEZETGEsK0JBQStCO2tCQU4zQyxTQUFTOytCQUNDLDJDQUEyQyxtQkFFcEMsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt5SkFLckMsTUFBTTtzQkFETCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9tb2RlbC9wYWdpbmcubW9kZWwnO1xuaW1wb3J0IHsgUGFnaW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmctYWx0ZXJuYXRpdmUtcGFnZXNdW3BhZ2luZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nTW9kZWw7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZT86IG51bWJlciA9IDA7XG5cblx0Y3VycmVudFBhZ2U6IG51bWJlcjtcblxuXHRwYWdlczogQXJyYXk8bnVtYmVyPjtcblxuXHRudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyID0gMztcblxuXHRjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ1B1Ymxpc2hlcikge1xuXHRcdHN1cGVyKGVsUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50Pikge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nICYmIHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0Y29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnaW5nLmdldFBhZ2UoKTtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXHRcdFx0aWYgKHRoaXMucGFnZXMubGVuZ3RoIDw9IG51bWJlck9mUGFnZXMpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZQYWdlczsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRpc1NvdXJjZU5vdEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5nb1RvUGFnZShwYWdlTnVtYmVyLCBjdXJyZW50UGFnZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nLmNhbGN1bGF0ZVZpc2libGVQYWdlcyh0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzLCBwYWdlKTtcblx0fVxuXG5cdGFjdGl2ZVBhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPT09IHBhZ2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzJztcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTb3VyY2VOb3RFbXB0eSgpOyBlbHNlIG5vU291cmNlO1wiPlxuXG5cdDxkaXYgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIj5cblx0XHQ8ZGl2IFtjbGFzcy5ndWktcGFnaW5nLWFjdGl2ZS1wYWdlXT1cImFjdGl2ZVBhZ2UocGFnZSlcIlxuXHRcdFx0IFtjbGFzcy5ndWktcGFnaW5nLXZpc2libGUtcGFnZV09XCJjYWxjdWxhdGVWaXNpYmxlUGFnZXMocGFnZSlcIlxuXHRcdFx0IGNsYXNzPVwicmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgKGNsaWNrKT1cImdvVG9QYWdlKHBhZ2UpXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXBhZ2luZy1wYWdlIGd1aS1zZWxlY3Qtbm9uZSBndWktY3Vyc29yLXBvaW50ZXIgZ3VpLXB5LTAgZ3VpLXB4LTYgZ3VpLWZvbnQtYmFzZVwiPlxuXHRcdFx0XHR7e3BhZ2V9fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNub1NvdXJjZT5cblx0PHNwYW4gY2xhc3M9XCJndWktcGFnaW5nLXNvdXJjZS1zdGF0cyBndWktcGFnaW5nLW5vLWl0ZW1zXCI+XG5cdFx0e3sncGFnaW5nTm9JdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHQ8L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuIl19