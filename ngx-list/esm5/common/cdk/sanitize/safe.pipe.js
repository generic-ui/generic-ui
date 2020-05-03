/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3Nhbml0aXplL3NhZmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBNkQsTUFBTSwyQkFBMkIsQ0FBQztBQUVwSDtJQUtDLGtCQUFzQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzdDLENBQUM7Ozs7OztJQUVELDRCQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVk7UUFDakMsUUFBUSxJQUFJLEVBQUU7WUFDYixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELEtBQUssT0FBTztnQkFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsS0FBSyxRQUFRO2dCQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELEtBQUssYUFBYTtnQkFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdEO2dCQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWdDLElBQU0sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0YsQ0FBQzs7Z0JBdkJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsU0FBUztpQkFDZjs7OztnQkFKUSxZQUFZOztJQTBCckIsZUFBQztDQUFBLEFBeEJELElBd0JDO1NBckJZLFFBQVE7Ozs7OztJQUVSLDZCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwsIFNhZmVSZXNvdXJjZVVybCwgU2FmZVNjcmlwdCwgU2FmZVN0eWxlLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2d1aVNhZmUnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdH1cblxuXHR0cmFuc2Zvcm0odmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogU2FmZUh0bWwgfCBTYWZlU3R5bGUgfCBTYWZlU2NyaXB0IHwgU2FmZVVybCB8IFNhZmVSZXNvdXJjZVVybCB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdodG1sJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcblx0XHRcdGNhc2UgJ3N0eWxlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdzY3JpcHQnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFNjcmlwdCh2YWx1ZSk7XG5cdFx0XHRjYXNlICd1cmwnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh2YWx1ZSk7XG5cdFx0XHRjYXNlICdyZXNvdXJjZVVybCc6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNhZmUgdHlwZSBzcGVjaWZpZWQ6ICR7dHlwZX1gKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==