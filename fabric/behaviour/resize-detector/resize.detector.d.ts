mport { Observable } from 'rxjs';
export declare class ResizeDetector {
    private platformId;
    private throttleTime;
    private elementResizeDetector;
    private unsubscribe$;
    constructor(platformId: any);
    observe(element: HTMLElement): Observable<HTMLElement>;
    destroy(element: HTMLElement): void;
}
