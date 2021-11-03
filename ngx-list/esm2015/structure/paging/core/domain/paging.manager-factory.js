import { Injectable } from '@angular/core';
import { PagingManager } from './paging.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../common/cdk/logger/logger";
export class PagingManagerFactory {
    constructor(logger) {
        this.logger = logger;
    }
    createDefault() {
        return PagingManager.default(this.logger);
    }
    createFromConfig(config) {
        return PagingManager.fromConfig(config, this.logger);
    }
}
PagingManagerFactory.ɵfac = function PagingManagerFactory_Factory(t) { return new (t || PagingManagerFactory)(i0.ɵɵinject(i1.Logger)); };
PagingManagerFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PagingManagerFactory, factory: PagingManagerFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingManagerFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.Logger }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9wYWdpbmcubWFuYWdlci1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakQsTUFBTSxPQUFPLG9CQUFvQjtJQUVoQyxZQUE2QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUMzQyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQTBCO1FBQzFDLE9BQU8sYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7O3dGQVhXLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXIgfSBmcm9tICcuL3BhZ2luZy5tYW5hZ2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXIpIHtcblx0fVxuXG5cdGNyZWF0ZURlZmF1bHQoKTogUGFnaW5nTWFuYWdlciB7XG5cdFx0cmV0dXJuIFBhZ2luZ01hbmFnZXIuZGVmYXVsdCh0aGlzLmxvZ2dlcik7XG5cdH1cblxuXHRjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnV2l0aElkKTogUGFnaW5nTWFuYWdlciB7XG5cdFx0cmV0dXJuIFBhZ2luZ01hbmFnZXIuZnJvbUNvbmZpZyhjb25maWcsIHRoaXMubG9nZ2VyKTtcblx0fVxuXG59XG4iXX0=