import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { initializeField } from '../../../../core/structure/field/src/api/field.api-module';
import { FieldPublisher } from '../../../../core/structure/field/src/api/field.publisher';
import { FieldWarehouse } from '../../../../core/structure/field/src/api/field.warehouse';
import * as i0 from "@angular/core";
initializeField();
export function provideFieldCommandInvoker() {
    return CoreContainer.resolve(FieldPublisher);
}
export function provideFieldWarehouse() {
    return CoreContainer.resolve(FieldWarehouse);
}
export class FieldFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FieldFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FieldFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FieldFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FieldFeatureModule, imports: [CommonModule] });
FieldFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FieldFeatureModule, providers: [
        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FieldFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
                        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9maWVsZC5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOztBQUUxRixlQUFlLEVBQUUsQ0FBQztBQUVsQixNQUFNLFVBQVUsMEJBQTBCO0lBQ3pDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQjtJQUNwQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQWNELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxhQUFhO0lBRXBELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7K0dBSlcsa0JBQWtCO2dIQUFsQixrQkFBa0IsWUFUN0IsWUFBWTtnSEFTRCxrQkFBa0IsYUFMbkI7UUFDVixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixFQUFFO1FBQ25FLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUU7S0FDOUQsWUFQQSxZQUFZOzJGQVNELGtCQUFrQjtrQkFYOUIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsMEJBQTBCLEVBQUU7d0JBQ25FLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUU7cUJBQzlEO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IGluaXRpYWxpemVGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9hcGkvZmllbGQuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9hcGkvZmllbGQucHVibGlzaGVyJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2FwaS9maWVsZC53YXJlaG91c2UnO1xuXG5pbml0aWFsaXplRmllbGQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWVsZENvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZpZWxkUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWVsZFdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGaWVsZFdhcmVob3VzZSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBGaWVsZFB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZUZpZWxkQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IEZpZWxkV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlRmllbGRXYXJlaG91c2UgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19