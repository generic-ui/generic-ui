import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../formation/core/api/formation.event-repository';
import { StructureId } from '../../../core/api/structure.id';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { StructureRowDetailViewComponent } from './view/structure.row-detail-view.component';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './view/structure.row-detail-view.tokens';
import { Reactive } from '@generic-ui/hermes';
export class StructureRowDetailService extends Reactive {
    constructor(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
        super();
        this.injector = injector;
        this.structureId = structureId;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.formationEventService = formationEventService;
        this.drawerService = drawerService;
        this.enabled = false;
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
}
StructureRowDetailService.decorators = [
    { type: Injectable }
];
StructureRowDetailService.ctorParameters = () => [
    { type: Injector },
    { type: StructureId },
    { type: StructureRowDetailConfigArchive },
    { type: FormationEventRepository },
    { type: FabricDrawerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXJILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5QyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsUUFBUTtJQVF0RCxZQUE2QixRQUFrQixFQUMzQixXQUF3QixFQUN4QixnQ0FBaUUsRUFDakUscUJBQStDLEVBQy9DLGFBQWtDO1FBQ3JELEtBQUssRUFBRSxDQUFDO1FBTG9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFpQztRQUNqRSwwQkFBcUIsR0FBckIscUJBQXFCLENBQTBCO1FBQy9DLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQVZ0RCxZQUFPLEdBQVksS0FBSyxDQUFDO0lBWXpCLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBZTtRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLEVBQUUsRUFBRTthQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBRXhDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPO2FBQ1A7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTNCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUDtZQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUN2RCxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7aUJBQzNFO2FBQ0QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDaEMsU0FBUyxFQUFFLCtCQUErQjtnQkFDMUMsUUFBUSxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7O1lBekVELFVBQVU7OztZQWZzQixRQUFRO1lBS2hDLFdBQVc7WUFFWCwrQkFBK0I7WUFIL0Isd0JBQXdCO1lBRnhCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXRpb24vY29yZS9hcGkvZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dEZXRhaWxDb25maWcgfSBmcm9tICcuL3Jvdy1kZXRhaWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LnRva2Vucyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdGlvbi9jb3JlL2FwaS9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uZmlnOiBSb3dEZXRhaWxDb25maWc7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZHJhd2VyU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRpbml0KHJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudFJlZiA9IHJlZjtcblxuXHRcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBSb3dEZXRhaWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdFx0XHRpZiAoY29uZmlnLmVuYWJsZWQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9mZigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2UuY2xvc2UoKTtcblxuXHRcdFx0XHRpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuXG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCB1c2VWYWx1ZTogaXRlbSB9LFxuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZy50ZW1wbGF0ZSB9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3Blbih7XG5cdFx0XHRcdFx0YXBwZW5kVG9FbGVtZW50OiB0aGlzLmVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0Y29tcG9uZW50OiBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3RvclxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT24oKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9mZigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxufVxuIl19