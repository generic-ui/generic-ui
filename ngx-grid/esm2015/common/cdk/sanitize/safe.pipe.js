/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export class SafePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'guiSafe'
            },] }
];
/** @nocollapse */
SafePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SafePipe.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3Nhbml0aXplL3NhZmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBNkQsTUFBTSwyQkFBMkIsQ0FBQztBQUtwSCxNQUFNLE9BQU8sUUFBUTs7OztJQUVwQixZQUFzQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQzs7Ozs7O0lBRWpELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBWTtRQUNqQyxRQUFRLElBQUksRUFBRTtZQUNiLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BFLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLEtBQUssYUFBYSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDRixDQUFDOzs7WUFoQkQsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxTQUFTO2FBQ2Y7Ozs7WUFKUSxZQUFZOzs7Ozs7O0lBT1IsNkJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlU3R5bGUsIFNhZmVVcmwsIFNhZmVTY3JpcHQsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2d1aVNhZmUnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG5cdHRyYW5zZm9ybSh2YWx1ZTogYW55LCB0eXBlOiBzdHJpbmcpOiBTYWZlSHRtbCB8IFNhZmVTdHlsZSB8IFNhZmVTY3JpcHQgfCBTYWZlVXJsIHwgU2FmZVJlc291cmNlVXJsIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ2h0bWwnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuXHRcdFx0Y2FzZSAnc3R5bGUnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbHVlKTtcblx0XHRcdGNhc2UgJ3NjcmlwdCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlKTtcblx0XHRcdGNhc2UgJ3VybCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlKTtcblx0XHRcdGNhc2UgJ3Jlc291cmNlVXJsJzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZSk7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2FmZSB0eXBlIHNwZWNpZmllZDogJHt0eXBlfWApO1xuXHRcdH1cblx0fVxufVxuIl19