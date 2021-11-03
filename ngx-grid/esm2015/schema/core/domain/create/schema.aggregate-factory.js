import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from '../schema.aggregate';
import * as i0 from "@angular/core";
export class SchemaAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(aggregateId) {
        return new SchemaAggregate(aggregateId);
    }
}
SchemaAggregateFactory.ɵfac = function SchemaAggregateFactory_Factory(t) { return new (t || SchemaAggregateFactory)(); };
SchemaAggregateFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchemaAggregateFactory, factory: SchemaAggregateFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaAggregateFactory, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvY29yZS9kb21haW4vY3JlYXRlL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUEyQztJQUV0RjtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFxQjtRQUMzQixPQUFPLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzRGQVJXLHNCQUFzQjs0RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8U2NoZW1hSWQsIFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUFnZ3JlZ2F0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cbn1cbiJdfQ==