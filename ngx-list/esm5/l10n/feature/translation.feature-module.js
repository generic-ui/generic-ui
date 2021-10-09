/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { TranslationApiModule } from '../core/api/translation.api-module';
import { TranslationPipe } from './translation.pipe';
import { TranslationFacade } from '../core/api/translation.facade';
import { TranslationDomainFacade } from '../core/domain/translation.domain-facade';
var TranslationFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(TranslationFeatureModule, _super);
    function TranslationFeatureModule(apiModule) {
        var _this = _super.call(this) || this;
        if (apiModule === null) {
            throw new Error('TranslationApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    TranslationFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [{ provide: TranslationFacade, useClass: TranslationDomainFacade }];
    };
    TranslationFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TranslationApiModule
                    ],
                    declarations: [
                        TranslationPipe
                    ],
                    exports: [
                        TranslationPipe
                    ],
                    entryComponents: []
                },] }
    ];
    /** @nocollapse */
    TranslationFeatureModule.ctorParameters = function () { return [
        { type: TranslationApiModule, decorators: [{ type: Optional }] }
    ]; };
    return TranslationFeatureModule;
}(FeatureModule));
export { TranslationFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImwxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR25GO0lBYzhDLG9EQUFhO0lBTTFELGtDQUF3QixTQUErQjtRQUF2RCxZQUNDLGlCQUFPLFNBSVA7UUFIQSxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3JEOztJQUNGLENBQUM7Ozs7SUFUTSxxQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBbEJELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWixvQkFBb0I7cUJBQ3BCO29CQUNELFlBQVksRUFBRTt3QkFDYixlQUFlO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUixlQUFlO3FCQUNmO29CQUNELGVBQWUsRUFBRSxFQUFFO2lCQUNuQjs7OztnQkFuQlEsb0JBQW9CLHVCQTBCZixRQUFROztJQU90QiwrQkFBQztDQUFBLEFBM0JELENBYzhDLGFBQWEsR0FhMUQ7U0FiWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVHJhbnNsYXRpb25BcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS90cmFuc2xhdGlvbi5hcGktbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRpb24ucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkRvbWFpbkZhY2FkZSB9IGZyb20gJy4uL2NvcmUvZG9tYWluL3RyYW5zbGF0aW9uLmRvbWFpbi1mYWNhZGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRUcmFuc2xhdGlvbkFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRUcmFuc2xhdGlvblBpcGVcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFRyYW5zbGF0aW9uUGlwZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW3sgcHJvdmlkZTogVHJhbnNsYXRpb25GYWNhZGUsIHVzZUNsYXNzOiBUcmFuc2xhdGlvbkRvbWFpbkZhY2FkZSB9XTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGFwaU1vZHVsZTogVHJhbnNsYXRpb25BcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChhcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJhbnNsYXRpb25BcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==