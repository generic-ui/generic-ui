/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
export class ListViewL10nGate extends Gate {
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
ListViewL10nGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[localization]'
            },] }
];
/** @nocollapse */
ListViewL10nGate.ctorParameters = () => [
    { type: TranslationService }
];
ListViewL10nGate.propDecorators = {
    localization: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListViewL10nGate.prototype.localization;
    /**
     * @type {?}
     * @private
     */
    ListViewL10nGate.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRld2F5L2wxMG4vbGlzdC12aWV3LWwxMG4uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBT3RGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxJQUFJOzs7O0lBS3pDLFlBQTZCLGtCQUFzQztRQUNsRSxLQUFLLEVBQUUsQ0FBQztRQURvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRW5FLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQW9DO1FBRS9DLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFFNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOzs7WUF4QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7YUFDdkM7Ozs7WUFOUSxrQkFBa0I7OzsyQkFTekIsS0FBSzs7OztJQUFOLHdDQUNrQzs7Ozs7SUFFdEIsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgR3VpTGlzdExvY2FsaXphdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS9saXN0L2NvcmUvYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbbG9jYWxpemF0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdMMTBuR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTGlzdExvY2FsaXphdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld0wxMG5HYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdsb2NhbGl6YXRpb24nLCBjaGFuZ2VzKSkge1xuXG5cdFx0XHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcikge1xuXHRcdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXRSZXNvbHZlcih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmNoYW5nZVRyYW5zbGF0aW9uKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19