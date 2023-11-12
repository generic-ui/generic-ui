import { Injectable, Injector } from '@angular/core';
import { StructureRowDetailViewComponent } from './view/structure.row-detail-view.component';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './view/structure.row-detail-view.tokens';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "./structure.row-detail.config-archive";
import * as i3 from "../../../../core/structure/formation/src/api/formation.event-repository";
import * as i4 from "@generic-ui/fabric";
export class StructureRowDetailService extends Reactive {
    injector;
    structureId;
    structureDetailViewConfigArchive;
    formationEventService;
    drawerService;
    enabled = false;
    config;
    elementRef;
    constructor(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
        super();
        this.injector = injector;
        this.structureId = structureId;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.formationEventService = formationEventService;
        this.drawerService = drawerService;
    }
    init(ref) {
        this.elementRef = ref;
        this.structureDetailViewConfigArchive
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((config) => {
            this.config = config;
            if (config.enabled === true) {
                this.turnOn();
            }
            else if (config.enabled === false) {
                this.turnOff();
            }
        });
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((items) => {
            if (!this.enabled) {
                return;
            }
            this.drawerService.close();
            if (items.length === 0) {
                return;
            }
            const item = items[0];
            const injector = Injector.create({
                parent: this.injector,
                providers: [
                    { provide: structureRowDetailViewItem, useValue: item },
                    { provide: structureRowDetailViewTemplate, useValue: this.config.template }
                ]
            });
            this.drawerService.open({
                appendToElement: this.elementRef,
                component: StructureRowDetailViewComponent,
                injector: injector
            });
        });
    }
    turnOn() {
        this.enabled = true;
    }
    turnOff() {
        this.enabled = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureRowDetailService, deps: [{ token: i0.Injector }, { token: i1.StructureId }, { token: i2.StructureRowDetailConfigArchive }, { token: i3.FormationEventRepository }, { token: i4.FabricDrawerService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureRowDetailService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureRowDetailService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i1.StructureId }, { type: i2.StructureRowDetailConfigArchive }, { type: i3.FormationEventRepository }, { type: i4.FabricDrawerService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcm93LWRldGFpbC9zdHJ1Y3R1cmUucm93LWRldGFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXJILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBSTlDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxRQUFRO0lBUXpCO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFWcEIsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV6QixNQUFNLENBQWtCO0lBRXhCLFVBQVUsQ0FBYTtJQUV2QixZQUE2QixRQUFrQixFQUMzQixXQUF3QixFQUN4QixnQ0FBaUUsRUFDakUscUJBQStDLEVBQy9DLGFBQWtDO1FBQ3JELEtBQUssRUFBRSxDQUFDO1FBTG9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFpQztRQUNqRSwwQkFBcUIsR0FBckIscUJBQXFCLENBQTBCO1FBQy9DLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUV0RCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQWU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxFQUFFLEVBQUU7YUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtZQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDZjtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtZQUV4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsT0FBTzthQUNQO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUzQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPO2FBQ1A7WUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUNyQixTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtvQkFDdkQsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2lCQUMzRTthQUNELENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ2hDLFNBQVMsRUFBRSwrQkFBK0I7Z0JBQzFDLFFBQVEsRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLE1BQU07UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU8sT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7dUdBeEVXLHlCQUF5QjsyR0FBekIseUJBQXlCOzsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgUm93RGV0YWlsQ29uZmlnIH0gZnJvbSAnLi9yb3ctZGV0YWlsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy50b2tlbnMnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uZmlnOiBSb3dEZXRhaWxDb25maWc7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZHJhd2VyU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRpbml0KHJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudFJlZiA9IHJlZjtcblxuXHRcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBSb3dEZXRhaWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdFx0XHRpZiAoY29uZmlnLmVuYWJsZWQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9mZigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2UuY2xvc2UoKTtcblxuXHRcdFx0XHRpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuXG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCB1c2VWYWx1ZTogaXRlbSB9LFxuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZy50ZW1wbGF0ZSB9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3Blbih7XG5cdFx0XHRcdFx0YXBwZW5kVG9FbGVtZW50OiB0aGlzLmVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0Y29tcG9uZW50OiBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3RvclxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT24oKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9mZigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxufVxuIl19