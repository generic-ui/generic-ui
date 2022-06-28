import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberFormatterPipe {
    transform(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}
NumberFormatterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberFormatterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterPipe, name: "numberFormatter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NumberFormatterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'numberFormatter' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbW1vbi9jZGsvbnVtYmVyLWZvcm1hdHRlci9udW1iZXItZm9ybWF0dGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxtQkFBbUI7SUFFL0IsU0FBUyxDQUFDLE1BQWM7UUFDdkIsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dIQUpXLG1CQUFtQjs4R0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ251bWJlckZvcm1hdHRlcicgfSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXR0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0dHJhbnNmb3JtKG51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyAnKTtcblx0fVxuXG59XG4iXX0=