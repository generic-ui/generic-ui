import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../common/cdk/component/pure-component';
import { ifChanged } from '../../../common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../l10n/translation.pipe";
export class PagingSelectComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.pageSizeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        ifChanged(changes.paging, () => {
            if (this.paging) {
                this.selectPageSizes = this.getSelectPageSizes();
                this.selectPageSize = this.getSelectPageSize(this.paging.getPageSize());
            }
        });
    }
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(+pageSize.value);
    }
    getSelectorName() {
        return 'gui-paging-select';
    }
    getSelectPageSizes() {
        const selectPageSizes = [], pageSizes = this.paging.getPageSizes();
        pageSizes.forEach((pageSize) => {
            const selectOption = this.getSelectPageSize(pageSize);
            selectPageSizes.push(selectOption);
        });
        return selectPageSizes;
    }
    getSelectPageSize(pageSize) {
        return { name: pageSize.toString(), value: pageSize.toString() };
    }
}
PagingSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingSelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PagingSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PagingSelectComponent, selector: "div[gui-paging-select][paging]", inputs: { paging: "paging" }, outputs: { pageSizeChanged: "pageSizeChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n", components: [{ type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], pipes: { "guiTranslate": i2.TranslationPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PagingSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-select][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }], pageSizeChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFTdEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFZdkQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFQbkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXJDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBeUM7UUFFcEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQXlCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVPLGtCQUFrQjtRQUN6QixNQUFNLGVBQWUsR0FBMkIsRUFBRSxFQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQWdCO1FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzttSEFoRFcscUJBQXFCO3VHQUFyQixxQkFBcUIsaU1DZmxDLDhRQVNBOzRGRE1hLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDQyxnQ0FBZ0MsbUJBRXpCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7aUdBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixlQUFlO3NCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvYXBpL21vZGVsL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLXNlbGVjdF1bcGFnaW5nXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmdNb2RlbDtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHNlbGVjdFBhZ2VTaXplczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPjtcblxuXHRzZWxlY3RQYWdlU2l6ZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdTZWxlY3RDb21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5wYWdpbmcsICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBhZ2luZykge1xuXHRcdFx0XHR0aGlzLnNlbGVjdFBhZ2VTaXplcyA9IHRoaXMuZ2V0U2VsZWN0UGFnZVNpemVzKCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0UGFnZVNpemUgPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplKHRoaXMucGFnaW5nLmdldFBhZ2VTaXplKCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQoK3BhZ2VTaXplLnZhbHVlKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmctc2VsZWN0Jztcblx0fVxuXG5cdHByaXZhdGUgZ2V0U2VsZWN0UGFnZVNpemVzKCk6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdGNvbnN0IHNlbGVjdFBhZ2VTaXplczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdLFxuXHRcdFx0cGFnZVNpemVzID0gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemVzKCk7XG5cblx0XHRwYWdlU2l6ZXMuZm9yRWFjaCgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9uID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdFx0XHRzZWxlY3RQYWdlU2l6ZXMucHVzaChzZWxlY3RPcHRpb24pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHNlbGVjdFBhZ2VTaXplcztcblx0fVxuXG5cdHByaXZhdGUgZ2V0U2VsZWN0UGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IEd1aVNlbGVjdE9wdGlvbiB7XG5cdFx0cmV0dXJuIHsgbmFtZTogcGFnZVNpemUudG9TdHJpbmcoKSwgdmFsdWU6IHBhZ2VTaXplLnRvU3RyaW5nKCkgfTtcblx0fVxuXG59XG4iLCI8c3BhbiBjbGFzcz1cImd1aS1pbmxpbmUtYmxvY2sgZ3VpLW1yLTVcIj5cblx0e3sgJ3BhZ2luZ0l0ZW1zUGVyUGFnZScgfCBndWlUcmFuc2xhdGUgfX1cbjwvc3Bhbj5cblxuPGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG5cdFx0XHRbb3B0aW9uc109XCJzZWxlY3RQYWdlU2l6ZXNcIlxuXHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdFBhZ2VTaXplXCJcblx0XHRcdFt3aWR0aF09XCIyNVwiPlxuPC9ndWktc2VsZWN0PlxuIl19