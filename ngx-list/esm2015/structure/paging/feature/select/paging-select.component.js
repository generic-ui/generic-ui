import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-paging-select", "", "paging", ""];
export class PagingSelectComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.pageSizeChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.paging) {
            if (this.paging) {
                this.selectPageSizes = this.getSelectPageSizes();
                this.selectPageSize = this.getSelectPageSize(this.paging.getPageSize());
            }
        }
    }
    changePageSize(pageSize) {
        this.pageSizeChanged.emit(+pageSize.value);
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
    getSelectorName() {
        return 'gui-paging-select';
    }
}
PagingSelectComponent.ɵfac = function PagingSelectComponent_Factory(t) { return new (t || PagingSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PagingSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagingSelectComponent, selectors: [["div", "gui-paging-select", "", "paging", ""]], inputs: { paging: "paging" }, outputs: { pageSizeChanged: "pageSizeChanged" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 6, consts: [[1, "gui-inline-block", "gui-mr-5"], [3, "options", "selected", "width", "optionChanged"]], template: function PagingSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "gui-select", 1);
        i0.ɵɵlistener("optionChanged", function PagingSelectComponent_Template_gui_select_optionChanged_3_listener($event) { return ctx.changePageSize($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, "pagingItemsPerPage"), "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("options", ctx.selectPageSizes)("selected", ctx.selectPageSize)("width", 25);
    } }, directives: [i1.FabricSelectComponent], pipes: [i2.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingSelectComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-paging-select][paging]',
                templateUrl: './paging-select.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { paging: [{
            type: Input
        }], pageSizeChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9zZWxlY3QvcGFnaW5nLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7QUFVaEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFZdkQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFQbkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXJDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBeUM7UUFFcEQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0Q7SUFDRixDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQXlCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyxrQkFBa0I7UUFDekIsTUFBTSxlQUFlLEdBQTJCLEVBQUUsRUFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFeEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUN0QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxRQUFnQjtRQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzswRkFoRFcscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNkbEMsK0JBQXdDO1FBQ3ZDLFlBQ0Q7O1FBQUEsaUJBQU87UUFFUCxxQ0FHZ0I7UUFISiw0SEFBaUIsMEJBQXNCLElBQUM7UUFJcEQsaUJBQWE7O1FBUFosZUFDRDtRQURDLDRFQUNEO1FBR0csZUFBMkI7UUFBM0IsNkNBQTJCLGdDQUFBLGFBQUE7O3VGRFNqQixxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs2REFJQSxNQUFNO2tCQURMLEtBQUs7WUFJTixlQUFlO2tCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZy1zZWxlY3RdW3BhZ2luZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1NlbGVjdENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0c2VsZWN0UGFnZVNpemVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+O1xuXG5cdHNlbGVjdFBhZ2VTaXplOiBHdWlTZWxlY3RPcHRpb247XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFBhZ2luZ1NlbGVjdENvbXBvbmVudD4pIHtcblxuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZykge1xuXHRcdFx0aWYgKHRoaXMucGFnaW5nKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0UGFnZVNpemVzID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZXMoKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RQYWdlU2l6ZSA9IHRoaXMuZ2V0U2VsZWN0UGFnZVNpemUodGhpcy5wYWdpbmcuZ2V0UGFnZVNpemUoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQoK3BhZ2VTaXplLnZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0U2VsZWN0UGFnZVNpemVzKCk6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4ge1xuXHRcdGNvbnN0IHNlbGVjdFBhZ2VTaXplczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdLFxuXHRcdFx0cGFnZVNpemVzID0gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemVzKCk7XG5cblx0XHRwYWdlU2l6ZXMuZm9yRWFjaCgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9uID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdFx0XHRzZWxlY3RQYWdlU2l6ZXMucHVzaChzZWxlY3RPcHRpb24pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHNlbGVjdFBhZ2VTaXplcztcblx0fVxuXG5cdHByaXZhdGUgZ2V0U2VsZWN0UGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IEd1aVNlbGVjdE9wdGlvbiB7XG5cdFx0cmV0dXJuIHsgbmFtZTogcGFnZVNpemUudG9TdHJpbmcoKSwgdmFsdWU6IHBhZ2VTaXplLnRvU3RyaW5nKCkgfTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmctc2VsZWN0Jztcblx0fVxuXG59XG4iLCI8c3BhbiBjbGFzcz1cImd1aS1pbmxpbmUtYmxvY2sgZ3VpLW1yLTVcIj5cblx0e3sgJ3BhZ2luZ0l0ZW1zUGVyUGFnZScgfCBndWlUcmFuc2xhdGUgfX1cbjwvc3Bhbj5cblxuPGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG5cdFx0XHRbb3B0aW9uc109XCJzZWxlY3RQYWdlU2l6ZXNcIlxuXHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdFBhZ2VTaXplXCJcblx0XHRcdFt3aWR0aF09XCIyNVwiPlxuPC9ndWktc2VsZWN0PlxuIl19