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
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
import { SearchingRepository } from './enabled/searching.repository';
export class SearchApiModule extends ApiModule {
}
SearchApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SearchDomainModule
                ],
                providers: [
                    SearchCommandInvoker,
                    SearchWarehouse,
                    SearchEventRepository,
                    SearchPhraseRepository,
                    SearchHighlightArchive,
                    SearchPlaceholderArchive,
                    SearchingRepository
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFzQnJFLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQW5CN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixxQkFBcUI7b0JBRXJCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtpQkFFbkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4vc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4vaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL2VuYWJsZWQvc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U2VhcmNoRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFNlYXJjaFdhcmVob3VzZSxcblx0XHRTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cblx0XHRTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LFxuXHRcdFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0U2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLFxuXHRcdFNlYXJjaGluZ1JlcG9zaXRvcnlcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19