import { Observable } from 'rxjs';
export declare class ResizeDetector {
    private throttleTime;
    private elementResizeDetector;
    private unsubscribe$;
    constructor();
    observe(element: HTMLElement): Observable<HTMLElement>;
    destroy(element: HTMLElement): void;
}
