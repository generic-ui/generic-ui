/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SearchDomainModule } from '../domain/search.domain-module';
import { SearchCommandInvoker } from './search.command-invoker';
import { SearchWarehouse } from './search.warehouse';
import { SearchEventRepository } from './search.event-repository';
import { SearchPhraseArchive } from '../domain/phrase/search-phrase.archive';
import { SearchHighlightArchive } from '../domain/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../domain/placeholder/search-placeholder.archive';
import { SearchingEnabledArchive } from '../domain/enabled/searching-enabled.archive';
import { SearchDomainWarehouse } from '../domain-read/search.domain-warehouse';
import { SearchDomainEventRepository } from '../domain-read/search.domain-event-repository';
import { SearchDomainCommandInvoker } from '../domain/search.domain-command-invoker';
export class SearchApiModule extends ApiModule {
    constructor() {
        super();
    }
}
SearchApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SearchDomainModule
                ],
                providers: [
                    {
                        provide: SearchCommandInvoker,
                        useClass: SearchDomainCommandInvoker
                    },
                    {
                        provide: SearchWarehouse,
                        useClass: SearchDomainWarehouse
                    },
                    {
                        provide: SearchEventRepository,
                        useClass: SearchDomainEventRepository
                    },
                    SearchPhraseArchive,
                    SearchHighlightArchive,
                    SearchPlaceholderArchive,
                    SearchingEnabledArchive
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SearchApiModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUErQnJGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUFFN0M7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7OztZQWhDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQy9CO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7cUJBQ3JDO29CQUVELG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtpQkFFdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4vc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaFBocmFzZUFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vcGhyYXNlL3NlYXJjaC1waHJhc2UuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaGluZ0VuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2VuYWJsZWQvc2VhcmNoaW5nLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hEb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zZWFyY2guZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hEb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zZWFyY2guZG9tYWluLWV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoRG9tYWluQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9kb21haW4vc2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U2VhcmNoRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFNlYXJjaERvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogU2VhcmNoRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogU2VhcmNoRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblxuXHRcdFNlYXJjaFBocmFzZUFyY2hpdmUsXG5cdFx0U2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUsXG5cdFx0U2VhcmNoaW5nRW5hYmxlZEFyY2hpdmVcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cbn1cbiJdfQ==