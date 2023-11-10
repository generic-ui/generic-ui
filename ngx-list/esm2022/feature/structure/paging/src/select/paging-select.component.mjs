import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/component/src/pure-component';
import { ifChanged } from '../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../l10n/src/translation.pipe";
export class PagingSelectComponent extends PureComponent {
    paging;
    pageSizeChanged = new EventEmitter();
    selectPageSizes;
    selectPageSize;
    constructor(elementRef) {
        super(elementRef);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagingSelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PagingSelectComponent, selector: "div[gui-paging-select][paging]", inputs: { paging: "paging" }, outputs: { pageSizeChanged: "pageSizeChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagingSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-select][paging]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<span class=\"gui-inline-block gui-mr-5\">\n\t{{ 'pagingItemsPerPage' | guiTranslate }}\n</span>\n\n<gui-select (optionChanged)=\"changePageSize($event)\"\n\t\t\t[options]=\"selectPageSizes\"\n\t\t\t[selected]=\"selectPageSize\"\n\t\t\t[width]=\"25\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paging: [{
                type: Input
            }], pageSizeChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvc2VsZWN0L3BhZ2luZy1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL3NlbGVjdC9wYWdpbmctc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRWhGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQVN6RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUd2RCxNQUFNLENBQWM7SUFHcEIsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFckMsZUFBZSxDQUF5QjtJQUV4QyxjQUFjLENBQWtCO0lBRWhDLFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBeUM7UUFFcEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQXlCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVPLGtCQUFrQjtRQUN6QixNQUFNLGVBQWUsR0FBMkIsRUFBRSxFQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQWdCO1FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztJQUNsRSxDQUFDO3dHQWhEVyxxQkFBcUI7NEZBQXJCLHFCQUFxQixpTUNmbEMsOFFBU0E7OzRGRE1hLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDQyxnQ0FBZ0MsbUJBRXpCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7aUdBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixlQUFlO3NCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9tb2RlbC9wYWdpbmcubW9kZWwnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2NoZWNrLmlucHV0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZy1zZWxlY3RdW3BhZ2luZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1NlbGVjdENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nTW9kZWw7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzZWxlY3RQYWdlU2l6ZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj47XG5cblx0c2VsZWN0UGFnZVNpemU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nU2VsZWN0Q29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucGFnaW5nLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RQYWdlU2l6ZXMgPSB0aGlzLmdldFNlbGVjdFBhZ2VTaXplcygpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdFBhZ2VTaXplID0gdGhpcy5nZXRTZWxlY3RQYWdlU2l6ZSh0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KCtwYWdlU2l6ZS52YWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLXNlbGVjdCc7XG5cdH1cblxuXHRwcml2YXRlIGdldFNlbGVjdFBhZ2VTaXplcygpOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+IHtcblx0XHRjb25zdCBzZWxlY3RQYWdlU2l6ZXM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBbXSxcblx0XHRcdHBhZ2VTaXplcyA9IHRoaXMucGFnaW5nLmdldFBhZ2VTaXplcygpO1xuXG5cdFx0cGFnZVNpemVzLmZvckVhY2goKHBhZ2VTaXplOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdE9wdGlvbiA9IHRoaXMuZ2V0U2VsZWN0UGFnZVNpemUocGFnZVNpemUpO1xuXHRcdFx0c2VsZWN0UGFnZVNpemVzLnB1c2goc2VsZWN0T3B0aW9uKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBzZWxlY3RQYWdlU2l6ZXM7XG5cdH1cblxuXHRwcml2YXRlIGdldFNlbGVjdFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBHdWlTZWxlY3RPcHRpb24ge1xuXHRcdHJldHVybiB7IG5hbWU6IHBhZ2VTaXplLnRvU3RyaW5nKCksIHZhbHVlOiBwYWdlU2l6ZS50b1N0cmluZygpIH07XG5cdH1cblxufVxuIiwiPHNwYW4gY2xhc3M9XCJndWktaW5saW5lLWJsb2NrIGd1aS1tci01XCI+XG5cdHt7ICdwYWdpbmdJdGVtc1BlclBhZ2UnIHwgZ3VpVHJhbnNsYXRlIH19XG48L3NwYW4+XG5cbjxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZVBhZ2VTaXplKCRldmVudClcIlxuXHRcdFx0W29wdGlvbnNdPVwic2VsZWN0UGFnZVNpemVzXCJcblx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RQYWdlU2l6ZVwiXG5cdFx0XHRbd2lkdGhdPVwiMjVcIj5cbjwvZ3VpLXNlbGVjdD5cbiJdfQ==