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
SearchFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SearchFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, declarations: [SearchIconComponent,
        SearchComponent], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule], exports: [SearchIconComponent,
        SearchComponent] });
SearchFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, providers: [
        { provide: SearchPublisher, useFactory: provideSearchCommandInvoker },
        { provide: SearchWarehouse, useFactory: provideSearchWarehouse },
        { provide: SearchEventRepository, useFactory: provideSearchEventRepository }
    ], imports: [CommonModule,
        FabricModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SearchFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOztBQUVuRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV6QixNQUFNLFVBQVUsMkJBQTJCO0lBQzFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckQsQ0FBQztBQXNCRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dIQUpXLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQWI5QixtQkFBbUI7UUFDbkIsZUFBZSxhQU5mLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CLGFBT25CLG1CQUFtQjtRQUNuQixlQUFlO2lIQVFKLG1CQUFtQixhQU5wQjtRQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7UUFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTtRQUNoRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7S0FDNUUsWUFoQkEsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7MkZBZ0JSLG1CQUFtQjtrQkFwQi9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixtQkFBbUI7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDYixtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLG1CQUFtQjt3QkFDbkIsZUFBZTtxQkFDZjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTt3QkFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixFQUFFO3FCQUM1RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgc2VhcmNoSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvYXBpL3NlYXJjaC5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc2VhcmNoLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvYXBpL3NlYXJjaC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5zZWFyY2hJbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU2VhcmNoQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2VhcmNoUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTZWFyY2hXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2VhcmNoV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTZWFyY2hFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2VhcmNoRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTZWFyY2hJY29uQ29tcG9uZW50LFxuXHRcdFNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U2VhcmNoSWNvbkNvbXBvbmVudCxcblx0XHRTZWFyY2hDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBTZWFyY2hQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTZWFyY2hDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogU2VhcmNoV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlU2VhcmNoV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTZWFyY2hFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVTZWFyY2hFdmVudFJlcG9zaXRvcnkgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==