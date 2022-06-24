import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { fieldInitializer } from '../../../core/structure/field/api/field.api-module';
import { FieldPublisher } from '../../../core/structure/field/api/field.publisher';
import { FieldWarehouse } from '../../../core/structure/field/api/field.warehouse';
import * as i0 from "@angular/core";
fieldInitializer.init();
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
FieldFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FieldFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FieldFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FieldFeatureModule, imports: [CommonModule] });
FieldFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FieldFeatureModule, providers: [
        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FieldFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpZWxkL2ZpZWxkLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFbkYsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFeEIsTUFBTSxVQUFVLDBCQUEwQjtJQUN6QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUI7SUFDcEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFjRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTtJQUVwRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dIQUpXLGtCQUFrQjtpSEFBbEIsa0JBQWtCLFlBVDdCLFlBQVk7aUhBU0Qsa0JBQWtCLGFBTG5CO1FBQ1YsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSwwQkFBMEIsRUFBRTtRQUNuRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFO0tBQzlELFlBUlE7WUFDUixZQUFZO1NBQ1o7NEZBUVcsa0JBQWtCO2tCQVg5QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSwwQkFBMEIsRUFBRTt3QkFDbkUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRTtxQkFDOUQ7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgZmllbGRJbml0aWFsaXplciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL2FwaS9maWVsZC5hcGktbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvYXBpL2ZpZWxkLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBGaWVsZFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL2FwaS9maWVsZC53YXJlaG91c2UnO1xuXG5maWVsZEluaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWVsZENvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZpZWxkUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWVsZFdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGaWVsZFdhcmVob3VzZSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBGaWVsZFB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZUZpZWxkQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IEZpZWxkV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlRmllbGRXYXJlaG91c2UgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19