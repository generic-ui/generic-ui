import { Injectable } from '@angular/core';
import { InMemoryAggregateStore } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "./in-memory.schema.store";
import * as i2 from "@generic-ui/hermes";
export class InMemorySchemaAggregateStore extends InMemoryAggregateStore {
    constructor(inMemorySchemaStore, aggregateStoreRegister) {
        super(inMemorySchemaStore, aggregateStoreRegister);
    }
}
InMemorySchemaAggregateStore.ɵfac = function InMemorySchemaAggregateStore_Factory(t) { return new (t || InMemorySchemaAggregateStore)(i0.ɵɵinject(i1.InMemorySchemaStore), i0.ɵɵinject(i2.AggregateStoreRegister)); };
InMemorySchemaAggregateStore.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InMemorySchemaAggregateStore, factory: InMemorySchemaAggregateStore.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InMemorySchemaAggregateStore, [{
        type: Injectable
    }], function () { return [{ type: i1.InMemorySchemaStore }, { type: i2.AggregateStoreRegister }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBMEIsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQVFwRixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBQWlEO0lBRWxHLFlBQVksbUJBQXdDLEVBQ2pELHNCQUE4QztRQUNoRCxLQUFLLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzt3R0FMVyw0QkFBNEI7a0ZBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLCBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlIGV4dGVuZHMgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxTY2hlbWFJZCwgU2NoZW1hQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoaW5NZW1vcnlTY2hlbWFTdG9yZTogSW5NZW1vcnlTY2hlbWFTdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5U2NoZW1hU3RvcmUsIGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpO1xuXHR9XG5cbn1cbiJdfQ==