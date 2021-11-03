import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { ListViewAggregate } from './list-view.aggregate';
import * as i0 from "@angular/core";
export class ListViewAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(id) {
        return new ListViewAggregate(id);
    }
}
ListViewAggregateFactory.ɵfac = function ListViewAggregateFactory_Factory(t) { return new (t || ListViewAggregateFactory)(); };
ListViewAggregateFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewAggregateFactory, factory: ListViewAggregateFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewAggregateFactory, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFJMUQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUErQztJQUU1RjtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFjO1FBQ3BCLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnR0FSVyx3QkFBd0I7OEVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxMaXN0Vmlld0lkLCBMaXN0Vmlld0FnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoaWQ6IExpc3RWaWV3SWQpOiBMaXN0Vmlld0FnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld0FnZ3JlZ2F0ZShpZCk7XG5cdH1cbn1cbiJdfQ==