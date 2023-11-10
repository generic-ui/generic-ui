import { Injectable } from '@angular/core';
import { FabricPlacement } from '@generic-ui/fabric';
import { Reactive } from '@generic-ui/hermes';
import { SelectCustomModalComponent } from './modal/select-custom-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i2 from "../../../../../core/schema/src/api/schema.warehouse";
import * as i3 from "../../../../../feature-view/grid-view/src/schema/structure.theme.converter";
import * as i4 from "@generic-ui/fabric";
export class StructureSelectCustomService extends Reactive {
    injector;
    schemaReadModelRootId;
    schemaWarehouse;
    structureThemeConverter;
    inlineDialogService;
    constructor(injector, schemaReadModelRootId, schemaWarehouse, structureThemeConverter, inlineDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.inlineDialogService = inlineDialogService;
    }
    open(elementRef) {
        this.close();
        this.schemaWarehouse
            .findTheme(this.schemaReadModelRootId)
            .ifPresent((theme) => {
            this.inlineDialogService.open(elementRef, SelectCustomModalComponent, {
                injector: this.injector,
                placement: FabricPlacement.BOTTOM,
                offset: 0,
                theme: this.structureThemeConverter.convertTheme(theme),
                customClass: 'gui-inline-dialog-header-menu'
            });
        });
    }
    close() {
        this.inlineDialogService.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSelectCustomService, deps: [{ token: i0.Injector }, { token: i1.SchemaReadModelRootId }, { token: i2.SchemaWarehouse }, { token: i3.StructureThemeConverter }, { token: i4.FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSelectCustomService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureSelectCustomService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.SchemaReadModelRootId }, { type: i2.SchemaWarehouse }, { type: i3.StructureThemeConverter }, { type: i4.FabricInlineDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlbGVjdC1jdXN0b20uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtY3VzdG9tL3N0cnVjdHVyZS5zZWxlY3QtY3VzdG9tLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQTZCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7O0FBT25GLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFRO0lBRTVCO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFKcEIsWUFBNkIsUUFBa0IsRUFDM0IscUJBQTRDLEVBQzVDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFMb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7SUFFbEUsQ0FBQztJQUVELElBQUksQ0FBQyxVQUFzQjtRQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsZUFBZTthQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsRUFBRTtnQkFDckUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDO2dCQUNULEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDdkQsV0FBVyxFQUFFLCtCQUErQjthQUM1QyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7d0dBNUJXLDRCQUE0Qjs0R0FBNUIsNEJBQTRCOzs0RkFBNUIsNEJBQTRCO2tCQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSwgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2VsZWN0Q3VzdG9tTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL3NlbGVjdC1jdXN0b20tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVdhcmVob3VzZTogU2NoZW1hV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRoZW1lQ29udmVydGVyOiBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9wZW4oZWxlbWVudFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2UoKTtcblxuXHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlXG5cdFx0XHQuZmluZFRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LmlmUHJlc2VudCgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIFNlbGVjdEN1c3RvbU1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiBGYWJyaWNQbGFjZW1lbnQuQk9UVE9NLFxuXHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpLFxuXHRcdFx0XHRcdGN1c3RvbUNsYXNzOiAnZ3VpLWlubGluZS1kaWFsb2ctaGVhZGVyLW1lbnUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxufVxuIl19