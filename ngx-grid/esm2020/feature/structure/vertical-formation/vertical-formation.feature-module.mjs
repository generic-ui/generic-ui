import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { verticalFormationInitializer } from '../../../core/structure/vertical-formation/api/vertical-formation.api-module';
import { VerticalFormationPublisher } from '../../../core/structure/vertical-formation/api/vertical-formation.publisher';
import { VerticalFormationWarehouse } from '../../../core/structure/vertical-formation/api/vertical-formation.warehouse';
import * as i0 from "@angular/core";
verticalFormationInitializer.init();
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
VerticalFormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
VerticalFormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, imports: [CommonModule] });
VerticalFormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, providers: [
        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: VerticalFormationFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDNUgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7O0FBR3pILDRCQUE0QixDQUFDLElBQUksRUFBRSxDQUFDO0FBRXBDLE1BQU0sVUFBVSxzQ0FBc0M7SUFDckQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDaEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQWNELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxhQUFhO0lBRWhFLE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7MkhBSlcsOEJBQThCOzRIQUE5Qiw4QkFBOEIsWUFUekMsWUFBWTs0SEFTRCw4QkFBOEIsYUFML0I7UUFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsc0NBQXNDLEVBQUU7UUFDM0YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLGlDQUFpQyxFQUFFO0tBQ3RGLFlBUEEsWUFBWTsyRkFTRCw4QkFBOEI7a0JBWDFDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsc0NBQXNDLEVBQUU7d0JBQzNGLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRTtxQkFDdEY7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyB2ZXJ0aWNhbEZvcm1hdGlvbkluaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxudmVydGljYWxGb3JtYXRpb25Jbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlVmVydGljYWxGb3JtYXRpb25Db21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogVmVydGljYWxGb3JtYXRpb25QdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVWZXJ0aWNhbEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==