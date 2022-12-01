import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { initializeVerticalFormation } from '../../../../core/structure/vertical-formation/src/api/vertical-formation.api-module';
import { VerticalFormationPublisher } from '../../../../core/structure/vertical-formation/src/api/vertical-formation.publisher';
import { VerticalFormationWarehouse } from '../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse';
import * as i0 from "@angular/core";
initializeVerticalFormation();
export function provideVerticalFormationCommandInvoker() {
    return CoreContainer.resolve(VerticalFormationPublisher);
}
export function provideVerticalFormationWarehouse() {
    return CoreContainer.resolve(VerticalFormationWarehouse);
}
export class VerticalFormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
VerticalFormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: VerticalFormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
VerticalFormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: VerticalFormationFeatureModule, imports: [CommonModule] });
VerticalFormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: VerticalFormationFeatureModule, providers: [
        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: VerticalFormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
                        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL3ZlcnRpY2FsLWZvcm1hdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9GQUFvRixDQUFDOztBQUdoSSwyQkFBMkIsRUFBRSxDQUFDO0FBRTlCLE1BQU0sVUFBVSxzQ0FBc0M7SUFDckQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDaEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQWNELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxhQUFhO0lBRWhFLE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7MkhBSlcsOEJBQThCOzRIQUE5Qiw4QkFBOEIsWUFUekMsWUFBWTs0SEFTRCw4QkFBOEIsYUFML0I7UUFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsc0NBQXNDLEVBQUU7UUFDM0YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLGlDQUFpQyxFQUFFO0tBQ3RGLFlBUEEsWUFBWTsyRkFTRCw4QkFBOEI7a0JBWDFDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsc0NBQXNDLEVBQUU7d0JBQzNGLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRTtxQkFDdEY7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcblxuXG5pbml0aWFsaXplVmVydGljYWxGb3JtYXRpb24oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVWZXJ0aWNhbEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFZlcnRpY2FsRm9ybWF0aW9uUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVZlcnRpY2FsRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19