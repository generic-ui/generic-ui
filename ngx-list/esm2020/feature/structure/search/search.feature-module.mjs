import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { searchInitializer } from '../../../core/structure/search/api/search.api-module';
import { SearchIconComponent } from './icon/search-icon.component';
import { SearchComponent } from './search.component';
import { SearchPublisher } from '../../../core/structure/search/api/search.publisher';
import { SearchWarehouse } from '../../../core/structure/search/api/search.warehouse';
import { SearchEventRepository } from '../../../core/structure/search/api/search.event-repository';
import * as i0 from "@angular/core";
searchInitializer.init();
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
SearchFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SearchFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchFeatureModule, declarations: [SearchIconComponent,
        SearchComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule], exports: [SearchIconComponent,
        SearchComponent] });
SearchFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchFeatureModule, providers: [
        { provide: SearchPublisher, useFactory: provideSearchCommandInvoker },
        { provide: SearchWarehouse, useFactory: provideSearchWarehouse },
        { provide: SearchEventRepository, useFactory: provideSearchEventRepository }
    ], imports: [[
            CommonModule,
            FabricModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricModule,
                        ReactiveFormsModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOztBQUVuRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV6QixNQUFNLFVBQVUsMkJBQTJCO0lBQzFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQXNCRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2lIQUpXLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQWI5QixtQkFBbUI7UUFDbkIsZUFBZSxhQU5mLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CLGFBT25CLG1CQUFtQjtRQUNuQixlQUFlO2tIQVFKLG1CQUFtQixhQU5wQjtRQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7UUFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTtRQUNoRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7S0FDNUUsWUFqQlE7WUFDUixZQUFZO1lBQ1osWUFBWTtZQUNaLG1CQUFtQjtTQUNuQjs0RkFlVyxtQkFBbUI7a0JBcEIvQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsbUJBQW1CO3dCQUNuQixlQUFlO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUixtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7d0JBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7d0JBQ2hFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtxQkFDNUU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IHNlYXJjaEluaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2guYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3NlYXJjaC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2gucHVibGlzaGVyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5Jztcblxuc2VhcmNoSW5pdGlhbGl6ZXIuaW5pdCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVNlYXJjaENvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNlYXJjaFB1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU2VhcmNoV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNlYXJjaFdhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU2VhcmNoRXZlbnRSZXBvc2l0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNlYXJjaEV2ZW50UmVwb3NpdG9yeSk7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U2VhcmNoSWNvbkNvbXBvbmVudCxcblx0XHRTZWFyY2hDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFNlYXJjaEljb25Db21wb25lbnQsXG5cdFx0U2VhcmNoQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogU2VhcmNoUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlU2VhcmNoQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IFNlYXJjaFdhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZVNlYXJjaFdhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=