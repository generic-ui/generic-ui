import { Injectable, Injector } from '@angular/core';
import { SchemaReadModelRootId } from '../../../../../core/schema/api/global/schema.read-model-root-id';
import { ActiveFilterMenuComponent } from './active-filter-menu.component';
import { StructureId } from '../../../../../core/structure/core/api/global/structure.id';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/api/schema.warehouse";
import * as i2 from "../../../../../feature-view/grid-view/schema/structure.theme.converter";
import * as i3 from "@generic-ui/fabric";
export class ActiveFilterService extends Reactive {
    constructor(injector, schemaWarehouse, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    open(readModelId, structureId) {
        const injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: SchemaReadModelRootId, useValue: readModelId },
                { provide: StructureId, useValue: structureId }
            ]
        });
        this.schemaWarehouse
            .onceTheme(readModelId)
            .pipe(this.hermesTakeUntil())
            .subscribe((theme) => {
            this.fabricDialogService.open({
                injector: injector,
                component: ActiveFilterMenuComponent,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        });
    }
}
ActiveFilterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterService, deps: [{ token: i0.Injector }, { token: i1.SchemaWarehouse }, { token: i2.StructureThemeConverter }, { token: i3.FabricDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
ActiveFilterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.SchemaWarehouse }, { type: i2.StructureThemeConverter }, { type: i3.FabricDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2UvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXhHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBSTlDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxRQUFRO0lBRWhELFlBQTZCLFFBQWtCLEVBQzNCLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBd0M7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFKb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBRTVELENBQUM7SUFFRCxJQUFJLENBQUMsV0FBa0MsRUFBRSxXQUF3QjtRQUVoRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDekQsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7YUFDL0M7U0FDRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZTthQUNsQixTQUFTLENBQUMsV0FBVyxDQUFDO2FBQ3RCLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztpSEEvQlcsbUJBQW1CO3FIQUFuQixtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlclNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hV2FyZWhvdXNlOiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXI6IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihyZWFkTW9kZWxJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdXNlVmFsdWU6IHJlYWRNb2RlbElkIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogU3RydWN0dXJlSWQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVJZCB9XG5cdFx0XHRdXG5cdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0Lm9uY2VUaGVtZShyZWFkTW9kZWxJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oe1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHRjb21wb25lbnQ6IEFjdGl2ZUZpbHRlck1lbnVDb21wb25lbnQsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==