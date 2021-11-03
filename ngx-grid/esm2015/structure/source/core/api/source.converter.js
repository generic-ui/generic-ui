import { Injectable } from '@angular/core';
import { Source } from './read/source';
import * as i0 from "@angular/core";
export class SourceConverter {
    convert(aggregate) {
        return new Source(aggregate.isLoading());
    }
}
SourceConverter.ɵfac = function SourceConverter_Factory(t) { return new (t || SourceConverter)(); };
SourceConverter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SourceConverter, factory: SourceConverter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceConverter, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJdkMsTUFBTSxPQUFPLGVBQWU7SUFFM0IsT0FBTyxDQUFDLFNBQXdCO1FBQy9CLE9BQU8sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OEVBSlcsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vcmVhZC9zb3VyY2UnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL3NvdXJjZS5tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbnZlcnRlciB7XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFNvdXJjZU1hbmFnZXIpOiBTb3VyY2Uge1xuXHRcdHJldHVybiBuZXcgU291cmNlKGFnZ3JlZ2F0ZS5pc0xvYWRpbmcoKSk7XG5cdH1cblxufVxuIl19