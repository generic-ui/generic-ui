import { Injectable, Injector } from '@angular/core';
import { FabricPlacement } from '@generic-ui/fabric';
import { StructureColumnConfigComponent } from './config/structure.column-config.component';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i2 from "../../../../../core/schema/src/api/schema.warehouse";
import * as i3 from "../../schema/structure.theme.converter";
import * as i4 from "@generic-ui/fabric";
export class StructureColumnConfigService extends Reactive {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigService, deps: [{ token: i0.Injector }, { token: i1.SchemaReadModelRootId }, { token: i2.SchemaWarehouse }, { token: i3.StructureThemeConverter }, { token: i4.FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i1.SchemaReadModelRootId }, { type: i2.SchemaWarehouse }, { type: i3.StructureThemeConverter }, { type: i4.FabricInlineDialogService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQTZCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBSzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBSTlDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFRO0lBRTVCO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFKcEIsWUFBNkIsUUFBa0IsRUFDM0IscUJBQTRDLEVBQzVDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFMb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7SUFFbEUsQ0FBQztJQUVELElBQUksQ0FBQyxVQUFzQixFQUFFLE1BQStCO1FBQzNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2lCQUNoQixDQUFDO1lBQ0YsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlO2FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsOEJBQThCLEVBQUU7Z0JBQ3pFLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN2RCxXQUFXLEVBQUUsK0JBQStCO2FBQzVDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzt1R0F0Q1csNEJBQTRCOzJHQUE1Qiw0QkFBNEI7OzJGQUE1Qiw0QkFBNEI7a0JBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLCBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRwcm92aWRlOiAnY29sdW1uJywgLy8gVE9ET1xuXHRcdFx0XHR1c2VWYWx1ZTogY29sdW1uXG5cdFx0XHR9XSxcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3RvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Vcblx0XHRcdC5vbmNlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdFx0XHRwbGFjZW1lbnQ6IEZhYnJpY1BsYWNlbWVudC5CT1RUT00sXG5cdFx0XHRcdFx0b2Zmc2V0OiAtMzQsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKSxcblx0XHRcdFx0XHRjdXN0b21DbGFzczogJ2d1aS1pbmxpbmUtZGlhbG9nLWhlYWRlci1tZW51J1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiJdfQ==