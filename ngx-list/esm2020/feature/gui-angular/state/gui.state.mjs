import { Injectable } from '@angular/core';
import { hermesDistinctUntilChanged, hermesMap, HermesReplaySubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class GuiState {
    constructor() {
        this.state = {};
        this.state$ = new HermesReplaySubject();
        this.destroy$ = new HermesReplaySubject();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setValue(state) {
        this.state = Object.assign({}, this.state, state);
        this.state$.next(this.state);
    }
    getValue(key) {
        if (key !== undefined) {
            return this.state[key];
        }
        else {
            return this.state;
        }
    }
    select(key) {
        let preparedState$ = this.state$;
        if (key !== undefined) {
            preparedState$ = this.state$.pipe(hermesMap((state) => {
                return state[key];
            }));
        }
        return preparedState$.pipe(hermesDistinctUntilChanged());
    }
    connect(arg, value$) {
        if (typeof arg === 'string') {
            value$
                .pipe(hermesTakeUntil(this.destroy$))
                .subscribe((value) => {
                this.setPartialState(arg, value);
            });
        }
        else {
            arg
                .pipe(hermesTakeUntil(this.destroy$))
                .subscribe((state) => {
                this.setValue(state);
            });
        }
    }
    setPartialState(key, value) {
        const newState = {};
        newState[key] = value;
        this.state = Object.assign({}, this.state, newState);
        this.state$.next(this.state);
    }
}
GuiState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GuiState.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiState });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiState, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQW9CLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUduSSxNQUFNLE9BQU8sUUFBUTtJQURyQjtRQUdTLFVBQUssR0FBZSxFQUFFLENBQUM7UUFFZCxXQUFNLEdBQUcsSUFBSSxtQkFBbUIsRUFBYyxDQUFDO1FBRS9DLGFBQVEsR0FBRyxJQUFJLG1CQUFtQixFQUFRLENBQUM7S0ErRTVEO0lBN0VBLFdBQVc7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUlELFFBQVEsQ0FBQyxLQUFxQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFJRCxRQUFRLENBR1AsR0FBTztRQUtQLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLEtBQXFCLENBQUM7U0FDbEM7SUFDRixDQUFDO0lBSUQsTUFBTSxDQUFvQixHQUFPO1FBRWhDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFakMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3RCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUNGLENBQUM7U0FDRjtRQUVELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FDekIsMEJBQTBCLEVBQUUsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUFJRCxPQUFPLENBQUMsR0FBa0MsRUFBRSxNQUFxQztRQUVoRixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNO2lCQUNKLElBQUksQ0FDSixlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM5QjtpQkFDQSxTQUFTLENBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLEdBQTJCO2lCQUMxQixJQUFJLENBQ0osZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDOUI7aUJBQ0EsU0FBUyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNGLENBQUM7SUFFTyxlQUFlLENBQUMsR0FBWSxFQUFFLEtBQWlCO1FBQ3RELE1BQU0sUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7c0dBcEZXLFFBQVE7MEdBQVIsUUFBUTs0RkFBUixRQUFRO2tCQURwQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNSZXBsYXlTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3VpU3RhdGU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGU6IFBhcnRpYWw8VD4gPSB7fTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlJCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PFBhcnRpYWw8VD4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PHZvaWQ+KCk7XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5kZXN0cm95JC5uZXh0KCk7XG5cdFx0dGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0c2V0VmFsdWUoc3RhdGU6IFQpOiB2b2lkO1xuXHRzZXRWYWx1ZShzdGF0ZTogUGFydGlhbDxUPik6IHZvaWQ7XG5cdHNldFZhbHVlKHN0YXRlOiBUIHwgUGFydGlhbDxUPik6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBzdGF0ZSk7XG5cdFx0dGhpcy5zdGF0ZSQubmV4dCh0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGdldFZhbHVlKCk6IFQ7XG5cdGdldFZhbHVlPEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEspOiBUW0tdO1xuXHRnZXRWYWx1ZTxcblx0XHRLIGV4dGVuZHMga2V5b2YgVFxuXHQ+KFxuXHRcdGtleT86IEtcblx0KTpcblx0XHR8IFRcblx0XHR8IFRbS10ge1xuXG5cdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIFQ7XG5cdFx0fVxuXHR9XG5cblx0c2VsZWN0KCk6IEhlcm1lc09ic2VydmFibGU8VD47XG5cdHNlbGVjdDxLIGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUW0tdPjtcblx0c2VsZWN0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk/OiBLKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB8IEhlcm1lc09ic2VydmFibGU8VFtLXT4ge1xuXG5cdFx0bGV0IHByZXBhcmVkU3RhdGUkID0gdGhpcy5zdGF0ZSQ7XG5cblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHByZXBhcmVkU3RhdGUkID0gdGhpcy5zdGF0ZSQucGlwZShcblx0XHRcdFx0aGVybWVzTWFwKChzdGF0ZTogVCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZVtrZXldO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJlcGFyZWRTdGF0ZSQucGlwZShcblx0XHRcdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHQpO1xuXHR9XG5cblx0Y29ubmVjdChzdGF0ZSQ6IEhlcm1lc09ic2VydmFibGU8VD4pOiB2b2lkO1xuXHRjb25uZWN0KGtleToga2V5b2YgVCwgdmFsdWUkOiBIZXJtZXNPYnNlcnZhYmxlPFRba2V5b2YgVF0+KTogdm9pZDtcblx0Y29ubmVjdChhcmc6IGtleW9mIFQgfCBIZXJtZXNPYnNlcnZhYmxlPFQ+LCB2YWx1ZSQ/OiBIZXJtZXNPYnNlcnZhYmxlPFRba2V5b2YgVF0+KTogdm9pZCB7XG5cblx0XHRpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHZhbHVlJFxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy5kZXN0cm95JClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogVFtrZXlvZiBUXSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2V0UGFydGlhbFN0YXRlKGFyZywgdmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0KGFyZyBhcyBIZXJtZXNPYnNlcnZhYmxlPFQ+KVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy5kZXN0cm95JClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogVCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoc3RhdGUpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFBhcnRpYWxTdGF0ZShrZXk6IGtleW9mIFQsIHZhbHVlOiBUW2tleW9mIFRdKTogdm9pZCB7XG5cdFx0Y29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8VD4gPSB7fTtcblx0XHRuZXdTdGF0ZVtrZXldID0gdmFsdWU7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcblx0XHR0aGlzLnN0YXRlJC5uZXh0KHRoaXMuc3RhdGUpO1xuXHR9XG59XG4iXX0=