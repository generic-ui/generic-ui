/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.key';
import { StructureSetSummariesEnabledCommandHandler } from './set/structure.set-summaries-enabled.command-handler';
import { StructureSummariesEnabledSetEventHandler } from './enabled/structure.summaries-enabled-set.event-handler';
import { summariesProviders } from './summaries.providers';
export class SummariesDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(StructureSetSummariesEnabledCommandHandler, structureKey)
        ];
    }
    /**
     * @return {?}
     */
    static domainEventHandlers() {
        return [
            ...HermesModule.registerDomainEventHandler(StructureSummariesEnabledSetEventHandler)
        ];
    }
}
SummariesDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    ...summariesProviders
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SummariesDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ25ILE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25ILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBYTNELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBRXREO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBDQUEwQyxFQUFFLFlBQVksQ0FBQztTQUNoRyxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLHdDQUF3QyxDQUFDO1NBQ3BGLENBQUM7SUFDSCxDQUFDOzs7WUExQkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLGtCQUFrQjtpQkFDckI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQvc3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgc3VtbWFyaWVzUHJvdmlkZXJzIH0gZnJvbSAnLi9zdW1tYXJpZXMucHJvdmlkZXJzJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLnN1bW1hcmllc1Byb3ZpZGVyc1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSlcblx0XHRdO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19