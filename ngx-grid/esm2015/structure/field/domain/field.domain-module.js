/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { FieldCollectionFactory } from './core/field-collection.factory';
import { DataFieldFactory } from './core/field/data/data-field.factory';
import { FieldIdGenerator } from './core/field/field-id.generator';
import { InitFieldsCommandHandler } from './init/init-fields.command-handler';
import { FieldFactory } from './core/field/field.factory';
export class FieldDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate')
        ];
    }
}
FieldDomainModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    FieldCollectionFactory,
                    FieldFactory,
                    FieldIdGenerator,
                    DataFieldFactory
                ]
            },] }
];
/** @nocollapse */
FieldDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVzFELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBRWxEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDO1NBQ3RGLENBQUM7SUFDSCxDQUFDOzs7WUFsQkQsUUFBUSxTQUFDO2dCQUNULFNBQVMsRUFBRTtvQkFDVixzQkFBc0I7b0JBQ3RCLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixnQkFBZ0I7aUJBQ2hCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2NvcmUvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IERhdGFGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2NvcmUvZmllbGQvZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4vY29yZS9maWVsZC9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2NvcmUvZmllbGQvZmllbGQuZmFjdG9yeSc7XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmllbGRDb2xsZWN0aW9uRmFjdG9yeSxcblx0XHRGaWVsZEZhY3RvcnksXG5cdFx0RmllbGRJZEdlbmVyYXRvcixcblx0XHREYXRhRmllbGRGYWN0b3J5XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGREb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKVxuXHRcdF07XG5cdH1cblxufVxuIl19