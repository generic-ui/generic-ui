import { Injectable, Injector } from '@angular/core';
import { FabricPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './config/structure.column-config.component';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/schema/api/global/schema.read-model-root-id";
import * as i2 from "../../../../core/schema/api/schema.warehouse";
import * as i3 from "../../schema/structure.theme.converter";
import * as i4 from "@generic-ui/fabric";
export class StructureColumnConfigService extends Reactive {
    constructor(injector, schemaReadModelRootId, schemaWarehouse, structureThemeConverter, inlineDialogService) {
        super();
        this.injector = injector;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.inlineDialogService = inlineDialogService;
    }
    open(elementRef, column) {
        this.close();
        const injector = Injector.create({
            providers: [{
                    provide: 'column',
                    useValue: column
                }],
            parent: this.injector
        });
        this.schemaWarehouse
            .onceTheme(this.schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((theme) => {
            this.inlineDialogService.open(elementRef, StructureColumnConfigComponent, {
                injector: injector,
                placement: FabricPlacement.BOTTOM,
                offset: -34,
                theme: this.structureThemeConverter.convertTheme(theme),
                customClass: 'gui-inline-dialog-header-menu'
            });
        });
    }
    close() {
        this.inlineDialogService.close();
    }
}
StructureColumnConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigService, deps: [{ token: i0.Injector }, { token: i1.SchemaReadModelRootId }, { token: i2.SchemaWarehouse }, { token: i3.StructureThemeConverter }, { token: i4.FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
StructureColumnConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.SchemaReadModelRootId }, { type: i2.SchemaWarehouse }, { type: i3.StructureThemeConverter }, { type: i4.FabricInlineDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBNkIsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFLNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7QUFJOUMsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQVE7SUFFekQsWUFBNkIsUUFBa0IsRUFDM0IscUJBQTRDLEVBQzVDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFMb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7SUFFbEUsQ0FBQztJQUVELElBQUksQ0FBQyxVQUFzQixFQUFFLE1BQStCO1FBQzNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2lCQUNoQixDQUFDO1lBQ0YsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlO2FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsOEJBQThCLEVBQUU7Z0JBQ3pFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN2RCxXQUFXLEVBQUUsK0JBQStCO2FBQzVDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7MEhBdENXLDRCQUE0Qjs4SEFBNUIsNEJBQTRCOzRGQUE1Qiw0QkFBNEI7a0JBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLCBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hV2FyZWhvdXNlOiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXI6IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGlubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0cHJvdmlkZTogJ2NvbHVtbicsIC8vIFRPRE9cblx0XHRcdFx0dXNlVmFsdWU6IGNvbHVtblxuXHRcdFx0fV0sXG5cdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlXG5cdFx0XHQub25jZVRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50UmVmLCBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsIHtcblx0XHRcdFx0XHRpbmplY3RvcjogaW5qZWN0b3IsXG5cdFx0XHRcdFx0cGxhY2VtZW50OiBGYWJyaWNQbGFjZW1lbnQuQk9UVE9NLFxuXHRcdFx0XHRcdG9mZnNldDogLTM0LFxuXHRcdFx0XHRcdHRoZW1lOiB0aGlzLnN0cnVjdHVyZVRoZW1lQ29udmVydGVyLmNvbnZlcnRUaGVtZSh0aGVtZSksXG5cdFx0XHRcdFx0Y3VzdG9tQ2xhc3M6ICdndWktaW5saW5lLWRpYWxvZy1oZWFkZXItbWVudSdcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG59XG4iXX0=