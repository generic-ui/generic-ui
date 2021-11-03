import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberFormatterPipe {
    transform(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}
NumberFormatterPipe.ɵfac = function NumberFormatterPipe_Factory(t) { return new (t || NumberFormatterPipe)(); };
NumberFormatterPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "numberFormatter", type: NumberFormatterPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberFormatterPipe, [{
        type: Pipe,
        args: [{ name: 'numberFormatter' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21tb24vY2RrL251bWJlci1mb3JtYXR0ZXIvbnVtYmVyLWZvcm1hdHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sbUJBQW1CO0lBRS9CLFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDOztzRkFKVyxtQkFBbUI7MkZBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnbnVtYmVyRm9ybWF0dGVyJyB9KVxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHR0cmFuc2Zvcm0obnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xuXHR9XG5cbn1cbiJdfQ==