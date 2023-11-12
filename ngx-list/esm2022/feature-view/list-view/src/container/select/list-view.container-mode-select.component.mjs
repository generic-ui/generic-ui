import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { ListViewMode } from '../../../../../core/list-view/src/domain/mode/list-view-mode';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/list-view/src/api/global/list-view.read-model-root-id";
import * as i2 from "../../../../../core/list-view/src/api/list-view.warehouse";
import * as i3 from "../../../../../core/list-view/src/api/mode/list-view.mode.archive";
import * as i4 from "@generic-ui/fabric";
export class ListViewContainerModeSelectComponent extends SmartComponent {
    changeDetectorRef;
    listViewReadModelRootId;
    listViewWarehouse;
    listViewModeRepository;
    options = Object.keys(ListViewMode)
        .map((key) => ListViewMode[key])
        .filter((val) => !Number.isInteger(val))
        .map((val) => {
        return this.toGuiSelectOption(val);
    });
    listContainerMode;
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse, listViewModeRepository) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewWarehouse = listViewWarehouse;
        this.listViewModeRepository = listViewModeRepository;
    }
    ngOnInit() {
        this.subscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (mode) => {
            this.listContainerMode = this.toGuiSelectOption(mode);
        });
    }
    changeContainerMode(mode) {
        const selectedMode = this.toListViewMode(mode.value);
        this.listViewModeRepository.next(this.listViewReadModelRootId.toAggregateId(), selectedMode);
    }
    getSelectorName() {
        return 'gui-list-mode-select';
    }
    toGuiSelectOption(value) {
        return { value, name: value };
    }
    toListViewMode(mode) {
        switch (mode) {
            case 'List':
                return ListViewMode.LIST;
            case 'Card':
                return ListViewMode.CARD;
            default:
                return ListViewMode.LIST;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewContainerModeSelectComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.ListViewReadModelRootId }, { token: i2.ListViewWarehouse }, { token: i3.ListViewModeArchive }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: ListViewContainerModeSelectComponent, selector: "div[gui-list-mode-select]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i4.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewContainerModeSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-mode-select]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.ListViewReadModelRootId }, { type: i2.ListViewWarehouse }, { type: i3.ListViewModeArchive }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBc0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7Ozs7O0FBWTVGLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxjQUFjO0lBVzFDO0lBRVQ7SUFDQTtJQUNBO0lBYnBCLE9BQU8sR0FBMkIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDaEQsR0FBRyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUViLGlCQUFpQixDQUFrQjtJQUVuQyxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCx1QkFBZ0QsRUFDaEQsaUJBQW9DLEVBQ3BDLHNCQUEyQztRQUM5RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFMVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXFCO0lBRS9ELENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUMzRSxDQUFDLElBQWtCLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQXFCO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQTRCO1FBQ3JELE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyxjQUFjLENBQUMsSUFBWTtRQUVsQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUUxQjtnQkFDQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDMUI7SUFDRixDQUFDO3VHQXREVyxvQ0FBb0M7MkZBQXBDLG9DQUFvQyx3RkNqQmpELG9KQUlBOzsyRkRhYSxvQ0FBb0M7a0JBTmhELFNBQVM7K0JBQ0MsMkJBQTJCLGlCQUV0QixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9zcmMvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9nbG9iYWwvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LW1vZGUtc2VsZWN0XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBPYmplY3Qua2V5cyhMaXN0Vmlld01vZGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoa2V5OiBzdHJpbmcpID0+IExpc3RWaWV3TW9kZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKHZhbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0bGlzdENvbnRhaW5lck1vZGU6IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdXYXJlaG91c2U6IExpc3RWaWV3V2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5saXN0Vmlld1dhcmVob3VzZS5vbk1vZGUodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RDb250YWluZXJNb2RlID0gdGhpcy50b0d1aVNlbGVjdE9wdGlvbihtb2RlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2hhbmdlQ29udGFpbmVyTW9kZShtb2RlOiBHdWlTZWxlY3RPcHRpb24pOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZE1vZGUgPSB0aGlzLnRvTGlzdFZpZXdNb2RlKG1vZGUudmFsdWUpO1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5uZXh0KHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpLCBzZWxlY3RlZE1vZGUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3QtbW9kZS1zZWxlY3QnO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0d1aVNlbGVjdE9wdGlvbih2YWx1ZTogc3RyaW5nIHwgTGlzdFZpZXdNb2RlKTogR3VpU2VsZWN0T3B0aW9uIHtcblx0XHRyZXR1cm4geyB2YWx1ZSwgbmFtZTogdmFsdWUgfTtcblx0fVxuXG5cdHByaXZhdGUgdG9MaXN0Vmlld01vZGUobW9kZTogc3RyaW5nKTogTGlzdFZpZXdNb2RlIHtcblxuXHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0Y2FzZSAnTGlzdCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblxuXHRcdFx0Y2FzZSAnQ2FyZCc6XG5cdFx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuQ0FSRDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdH1cblx0fVxufVxuIiwiPGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlQ29udGFpbmVyTW9kZSgkZXZlbnQpXCJcblx0XHRcdFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuXHRcdFx0W3NlbGVjdGVkXT1cImxpc3RDb250YWluZXJNb2RlXCI+XG48L2d1aS1zZWxlY3Q+XG4iXX0=