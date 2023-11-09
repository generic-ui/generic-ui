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
}
StructureSelectCustomService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSelectCustomService, deps: [{ token: i0.Injector }, { token: i1.SchemaReadModelRootId }, { token: i2.SchemaWarehouse }, { token: i3.StructureThemeConverter }, { token: i4.FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
StructureSelectCustomService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSelectCustomService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSelectCustomService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.SchemaReadModelRootId }, { type: i2.SchemaWarehouse }, { type: i3.StructureThemeConverter }, { type: i4.FabricInlineDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlbGVjdC1jdXN0b20uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtY3VzdG9tL3N0cnVjdHVyZS5zZWxlY3QtY3VzdG9tLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQTZCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7O0FBT25GLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxRQUFRO0lBRXpELFlBQTZCLFFBQWtCLEVBQzNCLHFCQUE0QyxFQUM1QyxlQUFnQyxFQUNoQyx1QkFBZ0QsRUFDaEQsbUJBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBTG9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJCO0lBRWxFLENBQUM7SUFFRCxJQUFJLENBQUMsVUFBc0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLGVBQWU7YUFDbEIsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQzthQUNyQyxTQUFTLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLEVBQUU7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsU0FBUyxFQUFFLGVBQWUsQ0FBQyxNQUFNO2dCQUNqQyxNQUFNLEVBQUUsQ0FBQztnQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZELFdBQVcsRUFBRSwrQkFBK0I7YUFDNUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzswSEE1QlcsNEJBQTRCOzhIQUE1Qiw0QkFBNEI7NEZBQTVCLDRCQUE0QjtrQkFEeEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsIEZhYnJpY1BsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNlbGVjdEN1c3RvbU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9zZWxlY3QtY3VzdG9tLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VsZWN0Q3VzdG9tU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlKCk7XG5cblx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0LmZpbmRUaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5pZlByZXNlbnQoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50UmVmLCBTZWxlY3RDdXN0b21Nb2RhbENvbXBvbmVudCwge1xuXHRcdFx0XHRcdGluamVjdG9yOiB0aGlzLmluamVjdG9yLFxuXHRcdFx0XHRcdHBsYWNlbWVudDogRmFicmljUGxhY2VtZW50LkJPVFRPTSxcblx0XHRcdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHRcdFx0dGhlbWU6IHRoaXMuc3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIuY29udmVydFRoZW1lKHRoZW1lKSxcblx0XHRcdFx0XHRjdXN0b21DbGFzczogJ2d1aS1pbmxpbmUtZGlhbG9nLWhlYWRlci1tZW51J1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiJdfQ==