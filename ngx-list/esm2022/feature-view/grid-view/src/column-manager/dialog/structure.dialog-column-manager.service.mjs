import { Injectable, Injector } from '@angular/core';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { StructureDialogColumnManagerComponent } from './structure.dialog-column-manager.component';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/src/api/schema.warehouse";
import * as i2 from "../../schema/structure.theme.converter";
import * as i3 from "@generic-ui/fabric";
export class StructureDialogColumnManagerService extends Reactive {
    injector;
    schemaWarehouse;
    structureThemeConverter;
    fabricDialogService;
    constructor(injector, schemaWarehouse, structureThemeConverter, fabricDialogService) {
        super();
        this.injector = injector;
        this.schemaWarehouse = schemaWarehouse;
        this.structureThemeConverter = structureThemeConverter;
        this.fabricDialogService = fabricDialogService;
    }
    open(compositionId, readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        const injector = Injector.create({ parent: parentInjector, providers: [{ provide: CompositionId, useValue: compositionId }] });
        this.schemaWarehouse
            .findTheme(readModelId)
            .ifPresent((theme) => {
            this.fabricDialogService.open({
                injector: injector,
                component: StructureDialogColumnManagerComponent,
                theme: this.structureThemeConverter.convertTheme(theme)
            });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureDialogColumnManagerService, deps: [{ token: i0.Injector }, { token: i1.SchemaWarehouse }, { token: i2.StructureThemeConverter }, { token: i3.FabricDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureDialogColumnManagerService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureDialogColumnManagerService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i1.SchemaWarehouse }, { type: i2.StructureThemeConverter }, { type: i3.FabricDialogService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb2x1bW4tbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM5RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUtwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBSTlDLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxRQUFRO0lBRW5DO0lBQ1Q7SUFDQTtJQUNBO0lBSHBCLFlBQTZCLFFBQWtCLEVBQzNCLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxtQkFBd0M7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFKb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBRTVELENBQUM7SUFFRCxJQUFJLENBQUMsYUFBNEIsRUFBRSxXQUFrQyxFQUFFLGNBQXlCO1FBRS9GLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDL0I7UUFFRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9ILElBQUksQ0FBQyxlQUFlO2FBQ2xCLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDdEIsU0FBUyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUscUNBQXFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3VHQTFCVyxtQ0FBbUM7MkdBQW5DLG1DQUFtQzs7MkZBQW5DLG1DQUFtQztrQkFEL0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcjogU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3IpIHtcblxuXHRcdGlmICghcGFyZW50SW5qZWN0b3IpIHtcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHBhcmVudDogcGFyZW50SW5qZWN0b3IsIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tcG9zaXRpb25JZCwgdXNlVmFsdWU6IGNvbXBvc2l0aW9uSWQgfV0gfSk7XG5cblx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZVxuXHRcdFx0LmZpbmRUaGVtZShyZWFkTW9kZWxJZClcblx0XHRcdC5pZlByZXNlbnQoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmZhYnJpY0RpYWxvZ1NlcnZpY2Uub3Blbih7XG5cdFx0XHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0XHRcdGNvbXBvbmVudDogU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0XHRcdFx0XHR0aGVtZTogdGhpcy5zdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlci5jb252ZXJ0VGhlbWUodGhlbWUpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19