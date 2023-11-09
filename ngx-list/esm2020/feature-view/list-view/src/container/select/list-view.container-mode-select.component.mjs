import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { ListViewMode } from '../../../../../core/list-view/src/domain/mode/list-view-mode';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/list-view/src/api/global/list-view.read-model-root-id";
import * as i2 from "../../../../../core/list-view/src/api/list-view.warehouse";
import * as i3 from "../../../../../core/list-view/src/api/mode/list-view.mode.archive";
import * as i4 from "@generic-ui/fabric";
export class ListViewContainerModeSelectComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse, listViewModeRepository) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewWarehouse = listViewWarehouse;
        this.listViewModeRepository = listViewModeRepository;
        this.options = Object.keys(ListViewMode)
            .map((key) => ListViewMode[key])
            .filter((val) => !Number.isInteger(val))
            .map((val) => {
            return this.toGuiSelectOption(val);
        });
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
}
ListViewContainerModeSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ListViewContainerModeSelectComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.ListViewReadModelRootId }, { token: i2.ListViewWarehouse }, { token: i3.ListViewModeArchive }], target: i0.ɵɵFactoryTarget.Component });
ListViewContainerModeSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ListViewContainerModeSelectComponent, selector: "div[gui-list-mode-select]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i4.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ListViewContainerModeSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-mode-select]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t[options]=\"options\"\n\t\t\t[selected]=\"listContainerMode\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.ListViewReadModelRootId }, { type: i2.ListViewWarehouse }, { type: i3.ListViewModeArchive }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL2NvbnRhaW5lci9zZWxlY3QvbGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBc0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7Ozs7O0FBWTVGLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxjQUFjO0lBV3ZFLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLHVCQUFnRCxFQUNoRCxpQkFBb0MsRUFDcEMsc0JBQTJDO1FBQzlELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7UUFiL0QsWUFBTyxHQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNoRCxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBVWIsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQzNFLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBcUI7UUFDeEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBNEI7UUFDckQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLGNBQWMsQ0FBQyxJQUFZO1FBRWxDLFFBQVEsSUFBSSxFQUFFO1lBQ2IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUUxQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRTFCO2dCQUNDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUMxQjtJQUNGLENBQUM7O2tJQXREVyxvQ0FBb0M7c0hBQXBDLG9DQUFvQyx3RkNqQmpELG9KQUlBOzRGRGFhLG9DQUFvQztrQkFOaEQsU0FBUzsrQkFDQywyQkFBMkIsaUJBRXRCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvbGlzdC12aWV3L3NyYy9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9zcmMvYXBpL2dsb2JhbC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3V2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2FwaS9saXN0LXZpZXcud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3QtbW9kZS1zZWxlY3RdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKExpc3RWaWV3TW9kZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKChrZXk6IHN0cmluZykgPT4gTGlzdFZpZXdNb2RlW2tleV0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudG9HdWlTZWxlY3RPcHRpb24odmFsKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRsaXN0Q29udGFpbmVyTW9kZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1dhcmVob3VzZTogTGlzdFZpZXdXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmxpc3RWaWV3V2FyZWhvdXNlLm9uTW9kZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdENvbnRhaW5lck1vZGUgPSB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKG1vZGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRjaGFuZ2VDb250YWluZXJNb2RlKG1vZGU6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkTW9kZSA9IHRoaXMudG9MaXN0Vmlld01vZGUobW9kZS52YWx1ZSk7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5Lm5leHQodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCksIHNlbGVjdGVkTW9kZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1tb2RlLXNlbGVjdCc7XG5cdH1cblxuXHRwcml2YXRlIHRvR3VpU2VsZWN0T3B0aW9uKHZhbHVlOiBzdHJpbmcgfCBMaXN0Vmlld01vZGUpOiBHdWlTZWxlY3RPcHRpb24ge1xuXHRcdHJldHVybiB7IHZhbHVlLCBuYW1lOiB2YWx1ZSB9O1xuXHR9XG5cblx0cHJpdmF0ZSB0b0xpc3RWaWV3TW9kZShtb2RlOiBzdHJpbmcpOiBMaXN0Vmlld01vZGUge1xuXG5cdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRjYXNlICdMaXN0Jzpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXG5cdFx0XHRjYXNlICdDYXJkJzpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5DQVJEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0fVxuXHR9XG59XG4iLCI8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VDb250YWluZXJNb2RlKCRldmVudClcIlxuXHRcdFx0W29wdGlvbnNdPVwib3B0aW9uc1wiXG5cdFx0XHRbc2VsZWN0ZWRdPVwibGlzdENvbnRhaW5lck1vZGVcIj5cbjwvZ3VpLXNlbGVjdD5cbiJdfQ==