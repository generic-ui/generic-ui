/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricMessageService } from './fabric-message.service';
var FabricMessageComponent = /** @class */ (function () {
    function FabricMessageComponent(messageService, changeDetectorRef) {
        this.messageService = messageService;
        this.changeDetectorRef = changeDetectorRef;
    }
    /**
     * @return {?}
     */
    FabricMessageComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricMessageComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.messageService.close();
    };
    FabricMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-message',
                    template: "\n\t\t<div class=\" gui-message\">\n\t\t\t{{text}}\n\t\t\t<button (click)=\"close()\">X</button>\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".gui-message{left:50%;position:fixed;top:50%}"]
                }] }
    ];
    /** @nocollapse */
    FabricMessageComponent.ctorParameters = function () { return [
        { type: FabricMessageService },
        { type: ChangeDetectorRef }
    ]; };
    return FabricMessageComponent;
}());
export { FabricMessageComponent };
if (false) {
    /** @type {?} */
    FabricMessageComponent.prototype.text;
    /**
     * @type {?}
     * @private
     */
    FabricMessageComponent.prototype.messageService;
    /**
     * @type {?}
     * @private
     */
    FabricMessageComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvbWVzc2FnZS9mYWJyaWMtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFpQkMsZ0NBQTZCLGNBQW9DLEVBQzdDLGlCQUFvQztRQUQzQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFDN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7O0lBRUQsOENBQWE7OztJQUFiO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxzQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQTNCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxrSEFLVDtvQkFJRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7OztnQkFmUSxvQkFBb0I7Z0JBREssaUJBQWlCOztJQStCbkQsNkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQWRZLHNCQUFzQjs7O0lBQ2xDLHNDQUFhOzs7OztJQUVELGdEQUFxRDs7Ozs7SUFDOUQsbURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vZmFicmljLW1lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1tZXNzYWdlJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiIGd1aS1tZXNzYWdlXCI+XG5cdFx0XHR7e3RleHR9fVxuXHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPlg8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLW1lc3NhZ2Uubmd4LnNjc3MnXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY01lc3NhZ2VDb21wb25lbnQge1xuXHR0ZXh0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZXNzYWdlU2VydmljZTogRmFicmljTWVzc2FnZVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5tZXNzYWdlU2VydmljZS5jbG9zZSgpO1xuXHR9XG59XG4iXX0=