import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/list-view.read-model-root-id";
import * as i2 from "../../../core/api/list-view.warehouse";
import * as i3 from "../../../core/api/mode/list-view.mode.archive";
import * as i4 from "@generic-ui/fabric";
const _c0 = ["gui-list-mode-select", ""];
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
        this.hermesSubscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (mode) => {
            this.listContainerMode = this.toGuiSelectOption(mode);
        });
    }
    changeContainerMode(mode) {
        const selectedMode = this.toListViewMode(mode.value);
        this.listViewModeRepository.next(this.listViewReadModelRootId.toAggregateId(), selectedMode);
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
    getSelectorName() {
        return 'gui-list-mode-select';
    }
}
ListViewContainerModeSelectComponent.ɵfac = function ListViewContainerModeSelectComponent_Factory(t) { return new (t || ListViewContainerModeSelectComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ListViewReadModelRootId), i0.ɵɵdirectiveInject(i2.ListViewWarehouse), i0.ɵɵdirectiveInject(i3.ListViewModeArchive)); };
ListViewContainerModeSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewContainerModeSelectComponent, selectors: [["div", "gui-list-mode-select", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 2, consts: [[3, "options", "selected", "optionChanged"]], template: function ListViewContainerModeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-select", 0);
        i0.ɵɵlistener("optionChanged", function ListViewContainerModeSelectComponent_Template_gui_select_optionChanged_0_listener($event) { return ctx.changeContainerMode($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("options", ctx.options)("selected", ctx.listContainerMode);
    } }, directives: [i4.FabricSelectComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewContainerModeSelectComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-list-mode-select]',
                templateUrl: './list-view.container-mode-select.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.ListViewReadModelRootId }, { type: i2.ListViewWarehouse }, { type: i3.ListViewModeArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jb250YWluZXIvc2VsZWN0L2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7QUFZeEUsTUFBTSxPQUFPLG9DQUFxQyxTQUFRLGNBQWM7SUFXdkUsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsdUJBQWdELEVBQ2hELGlCQUFvQyxFQUNwQyxzQkFBMkM7UUFDOUQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFxQjtRQWIvRCxZQUFPLEdBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFVYixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQzNFLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBcUI7UUFDeEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQTRCO1FBQ3JELE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyxjQUFjLENBQUMsSUFBWTtRQUVsQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTTtnQkFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUUxQjtnQkFDQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDMUI7SUFDRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O3dIQXREVyxvQ0FBb0M7dUZBQXBDLG9DQUFvQztRQ2pCakQscUNBRWtDO1FBRnRCLDJJQUFpQiwrQkFBMkIsSUFBQztRQUd6RCxpQkFBYTs7UUFGVixxQ0FBbUIsbUNBQUE7O3VGRGdCVCxvQ0FBb0M7Y0FOaEQsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxrREFBa0Q7Z0JBQy9ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aVNlbGVjdE9wdGlvbiB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWxpc3QtbW9kZS1zZWxlY3RdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lck1vZGVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKExpc3RWaWV3TW9kZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKChrZXk6IHN0cmluZykgPT4gTGlzdFZpZXdNb2RlW2tleV0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudG9HdWlTZWxlY3RPcHRpb24odmFsKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRsaXN0Q29udGFpbmVyTW9kZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1dhcmVob3VzZTogTGlzdFZpZXdXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmxpc3RWaWV3V2FyZWhvdXNlLm9uTW9kZSh0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdENvbnRhaW5lck1vZGUgPSB0aGlzLnRvR3VpU2VsZWN0T3B0aW9uKG1vZGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRjaGFuZ2VDb250YWluZXJNb2RlKG1vZGU6IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkTW9kZSA9IHRoaXMudG9MaXN0Vmlld01vZGUobW9kZS52YWx1ZSk7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5Lm5leHQodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCksIHNlbGVjdGVkTW9kZSk7XG5cdH1cblxuXHRwcml2YXRlIHRvR3VpU2VsZWN0T3B0aW9uKHZhbHVlOiBzdHJpbmcgfCBMaXN0Vmlld01vZGUpOiBHdWlTZWxlY3RPcHRpb24ge1xuXHRcdHJldHVybiB7IHZhbHVlLCBuYW1lOiB2YWx1ZSB9O1xuXHR9XG5cblx0cHJpdmF0ZSB0b0xpc3RWaWV3TW9kZShtb2RlOiBzdHJpbmcpOiBMaXN0Vmlld01vZGUge1xuXG5cdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRjYXNlICdMaXN0Jzpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXG5cdFx0XHRjYXNlICdDYXJkJzpcblx0XHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5DQVJEO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkxJU1Q7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWxpc3QtbW9kZS1zZWxlY3QnO1xuXHR9XG59XG4iLCI8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VDb250YWluZXJNb2RlKCRldmVudClcIlxuXHRcdFx0W29wdGlvbnNdPVwib3B0aW9uc1wiXG5cdFx0XHRbc2VsZWN0ZWRdPVwibGlzdENvbnRhaW5lck1vZGVcIj5cbjwvZ3VpLXNlbGVjdD5cbiJdfQ==