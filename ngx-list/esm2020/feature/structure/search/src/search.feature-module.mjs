import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { initializeSearch } from '../../../../core/structure/search/src/api/search.api-module';
import { SearchIconComponent } from './icon/search-icon.component';
import { SearchComponent } from './search.component';
import { SearchPublisher } from '../../../../core/structure/search/src/api/search.publisher';
import { SearchWarehouse } from '../../../../core/structure/search/src/api/search.warehouse';
import { SearchEventRepository } from '../../../../core/structure/search/src/api/search.event-repository';
import { GuiTemplateModule } from '../../../gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
initializeSearch();
export function provideSearchCommandInvoker() {
    return CoreContainer.resolve(SearchPublisher);
}
export function provideSearchWarehouse() {
    return CoreContainer.resolve(SearchWarehouse);
}
export function provideSearchEventRepository() {
    return CoreContainer.resolve(SearchEventRepository);
}
export class SearchFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SearchFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SearchFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SearchFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: SearchFeatureModule, declarations: [SearchIconComponent,
        SearchComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        GuiTemplateModule], exports: [SearchIconComponent,
        SearchComponent] });
SearchFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SearchFeatureModule, providers: [
        { provide: SearchPublisher, useFactory: provideSearchCommandInvoker },
        { provide: SearchWarehouse, useFactory: provideSearchWarehouse },
        { provide: SearchEventRepository, useFactory: provideSearchEventRepository }
    ], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule,
        GuiTemplateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SearchFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule,
                        GuiTemplateModule
                    ],
                    declarations: [
                        SearchIconComponent,
                        SearchComponent
                    ],
                    exports: [
                        SearchIconComponent,
                        SearchComponent
                    ],
                    providers: [
                        { provide: SearchPublisher, useFactory: provideSearchCommandInvoker },
                        { provide: SearchWarehouse, useFactory: provideSearchWarehouse },
                        { provide: SearchEventRepository, useFactory: provideSearchEventRepository }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL3NlYXJjaC5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFdEYsZ0JBQWdCLEVBQUUsQ0FBQztBQUVuQixNQUFNLFVBQVUsMkJBQTJCO0lBQzFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQXVCRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2lIQUpXLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQWI5QixtQkFBbUI7UUFDbkIsZUFBZSxhQVBmLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGlCQUFpQixhQU9qQixtQkFBbUI7UUFDbkIsZUFBZTtrSEFRSixtQkFBbUIsYUFOcEI7UUFDVixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO1FBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7UUFDaEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixFQUFFO0tBQzVFLFlBakJBLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGlCQUFpQjs0RkFnQk4sbUJBQW1CO2tCQXJCL0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsbUJBQW1CO3dCQUNuQixlQUFlO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUixtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7d0JBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7d0JBQ2hFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtxQkFDNUU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemVTZWFyY2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2guYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3NlYXJjaC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvc2VhcmNoLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEd1aVRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZ3VpLnRlbXBsYXRlLm1vZHVsZSc7XG5cbmluaXRpYWxpemVTZWFyY2goKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTZWFyY2hDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTZWFyY2hQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVNlYXJjaFdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTZWFyY2hXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVNlYXJjaEV2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTZWFyY2hFdmVudFJlcG9zaXRvcnkpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEd1aVRlbXBsYXRlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFNlYXJjaEljb25Db21wb25lbnQsXG5cdFx0U2VhcmNoQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTZWFyY2hJY29uQ29tcG9uZW50LFxuXHRcdFNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNlYXJjaFB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVNlYXJjaENvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBTZWFyY2hXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTZWFyY2hXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZVNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19