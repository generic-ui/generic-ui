/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    SafePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'guiSafe'
                },] }
    ];
    /** @nocollapse */
    SafePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SafePipe;
}());
export { SafePipe };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SafePipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3Nhbml0aXplL3NhZmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBNkQsTUFBTSwyQkFBMkIsQ0FBQztBQUVwSDtJQUtDLGtCQUFzQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQzs7Ozs7O0lBRWpELDRCQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVk7UUFDakMsUUFBUSxJQUFJLEVBQUU7WUFDYixLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RSxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxLQUFLLGFBQWEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFnQyxJQUFNLENBQUMsQ0FBQztTQUNqRTtJQUNGLENBQUM7O2dCQWhCRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLFNBQVM7aUJBQ2Y7Ozs7Z0JBSlEsWUFBWTs7SUFtQnJCLGVBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWRZLFFBQVE7Ozs7OztJQUVSLDZCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVN0eWxlLCBTYWZlVXJsLCBTYWZlU2NyaXB0LCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdndWlTYWZlJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuXHR0cmFuc2Zvcm0odmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogU2FmZUh0bWwgfCBTYWZlU3R5bGUgfCBTYWZlU2NyaXB0IHwgU2FmZVVybCB8IFNhZmVSZXNvdXJjZVVybCB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdodG1sJzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcblx0XHRcdGNhc2UgJ3N0eWxlJzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdzY3JpcHQnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFNjcmlwdCh2YWx1ZSk7XG5cdFx0XHRjYXNlICd1cmwnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZSk7XG5cdFx0XHRjYXNlICdyZXNvdXJjZVVybCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpO1xuXHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNhZmUgdHlwZSBzcGVjaWZpZWQ6ICR7dHlwZX1gKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==