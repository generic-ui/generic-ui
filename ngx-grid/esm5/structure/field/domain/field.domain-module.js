/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { FieldCollectionFactory } from './core/field-collection.factory';
import { DataFieldFactory } from './core/field/data/data-field.factory';
import { FieldIdGenerator } from './core/field/field-id.generator';
import { InitFieldsCommandHandler } from './init/init-fields.command-handler';
import { FieldFactory } from './core/field/field.factory';
var FieldDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(FieldDomainModule, _super);
    function FieldDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    FieldDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate'));
    };
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
    FieldDomainModule.ctorParameters = function () { return []; };
    return FieldDomainModule;
}(DomainModule));
export { FieldDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUcxRDtJQVF1Qyw2Q0FBWTtJQUVsRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLGlDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUMsRUFDckY7SUFDSCxDQUFDOztnQkFsQkQsUUFBUSxTQUFDO29CQUNULFNBQVMsRUFBRTt3QkFDVixzQkFBc0I7d0JBQ3RCLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixnQkFBZ0I7cUJBQ2hCO2lCQUNEOzs7O0lBYUQsd0JBQUM7Q0FBQSxBQXBCRCxDQVF1QyxZQUFZLEdBWWxEO1NBWlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9jb3JlL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBEYXRhRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuL2NvcmUvZmllbGQvZmllbGQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9jb3JlL2ZpZWxkL2ZpZWxkLmZhY3RvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdEZpZWxkQ29sbGVjdGlvbkZhY3RvcnksXG5cdFx0RmllbGRGYWN0b3J5LFxuXHRcdEZpZWxkSWRHZW5lcmF0b3IsXG5cdFx0RGF0YUZpZWxkRmFjdG9yeVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJylcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==