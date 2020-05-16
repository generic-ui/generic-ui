/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricSelectModule } from '@generic-ui/fabric';
import { ContainerComponent } from './container.component';
import { ContainerSourceComponent } from './source/container-source.component';
import { ContainerLayoutComponent } from './layout/container-layout.component';
import { ContainerListItemComponent } from './source/list-item/container-list-item.component';
import { PagingFeatureModule } from '../../paging/feature/paging.feature-module';
import { EmptySourceFeatureModule } from '../../empty-source/feature/empty-source.feature-module';
import { ListContainerCardComponent } from './card/list.container-card.component';
import { ListCardItemComponent } from './card/card-item/list.card-item.component';
import { ListContainerModeSelectComponent } from './container/select/list.container-mode-select.component';
import { ListViewApiModule } from '../domain-api/list-view.api-module';
var ListViewFeatureModule = /** @class */ (function () {
    function ListViewFeatureModule(paging) {
        this.paging = paging;
    }
    ListViewFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ListViewApiModule,
                        FabricSelectModule,
                        PagingFeatureModule,
                        EmptySourceFeatureModule
                    ],
                    declarations: [
                        ContainerComponent,
                        ContainerListItemComponent,
                        ContainerLayoutComponent,
                        ContainerSourceComponent,
                        ListContainerCardComponent,
                        ListCardItemComponent,
                        ListContainerModeSelectComponent
                    ],
                    exports: [
                        ContainerComponent
                    ],
                    providers: []
                },] }
    ];
    /** @nocollapse */
    ListViewFeatureModule.ctorParameters = function () { return [
        { type: PagingFeatureModule }
    ]; };
    return ListViewFeatureModule;
}());
export { ListViewFeatureModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewFeatureModule.prototype.paging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHdkU7SUEwQkMsK0JBQTZCLE1BQTJCO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQXFCO0lBQUcsQ0FBQzs7Z0JBMUI1RCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUVqQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2Isa0JBQWtCO3dCQUNsQiwwQkFBMEI7d0JBQzFCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUV4QiwwQkFBMEI7d0JBQzFCLHFCQUFxQjt3QkFDckIsZ0NBQWdDO3FCQUNoQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isa0JBQWtCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDYjs7OztnQkEvQlEsbUJBQW1COztJQW1DNUIsNEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQUhZLHFCQUFxQjs7Ozs7O0lBRXJCLHVDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvY29udGFpbmVyLXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvY29udGFpbmVyLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9saXN0LWl0ZW0vY29udGFpbmVyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uL2VtcHR5LXNvdXJjZS9mZWF0dXJlL2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Q29udGFpbmVyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9saXN0LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q2FyZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC1pdGVtL2xpc3QuY2FyZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3NlbGVjdC9saXN0LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBcGlNb2R1bGUgfSBmcm9tICcuLi9kb21haW4tYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExpc3RWaWV3QXBpTW9kdWxlLFxuXG5cdFx0RmFicmljU2VsZWN0TW9kdWxlLFxuXHRcdFBhZ2luZ0ZlYXR1cmVNb2R1bGUsXG5cdFx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbnRhaW5lckNvbXBvbmVudCxcblx0XHRDb250YWluZXJMaXN0SXRlbUNvbXBvbmVudCxcblx0XHRDb250YWluZXJMYXlvdXRDb21wb25lbnQsXG5cdFx0Q29udGFpbmVyU291cmNlQ29tcG9uZW50LFxuXG5cdFx0TGlzdENvbnRhaW5lckNhcmRDb21wb25lbnQsXG5cdFx0TGlzdENhcmRJdGVtQ29tcG9uZW50LFxuXHRcdExpc3RDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb250YWluZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nOiBQYWdpbmdGZWF0dXJlTW9kdWxlKSB7fVxufVxuIl19