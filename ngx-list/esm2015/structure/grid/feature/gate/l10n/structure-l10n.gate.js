/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { TranslationFacade } from '../../../../../l10n/core/api/translation.facade';
export class StructureL10nGate extends Gate {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        super();
        this.translationService = translationService;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('localization', changes)) {
            if (this.localization.translationResolver) {
                this.translationService.setResolver(this.localization.translationResolver);
            }
            if (this.localization.translation) {
                this.translationService.changeTranslation(this.localization.translation);
            }
        }
    }
}
StructureL10nGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[localization]'
            },] }
];
/** @nocollapse */
StructureL10nGate.ctorParameters = () => [
    { type: TranslationFacade }
];
StructureL10nGate.propDecorators = {
    localization: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureL10nGate.prototype.localization;
    /**
     * @type {?}
     * @private
     */
    StructureL10nGate.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL2wxMG4vc3RydWN0dXJlLWwxMG4uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBTXBGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxJQUFJOzs7O0lBSzFDLFlBQTZCLGtCQUFxQztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBRWxFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXFDO1FBRWhELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOzs7WUF2QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7YUFDdkM7Ozs7WUFMUSxpQkFBaUI7OzsyQkFReEIsS0FBSzs7OztJQUFOLHlDQUM4Qjs7Ozs7SUFFbEIsK0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IEd1aUxvY2FsaXphdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS9ncmlkL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtsb2NhbGl6YXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVMMTBuR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTG9jYWxpemF0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlTDEwbkdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2xvY2FsaXphdGlvbicsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcikge1xuXHRcdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXRSZXNvbHZlcih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmNoYW5nZVRyYW5zbGF0aW9uKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19