import { __decorate } from "tslib";
import { AggregateArchive } from '@generic-ui/hermes';
import { ColumnHighlightManager } from './column-highlight.manager';
import { Injectable } from '@angular/core';
import { Override } from '../../../../common/cdk/decorators';
import * as i0 from "@angular/core";
export class ColumnHighlightArchive extends AggregateArchive {
    constructor() {
        super(new ColumnHighlightManager());
    }
    toggle(key, value) {
        this.get(key)
            .ifPresent((manager) => {
            manager.toggle(value);
            this.next(key, manager);
        });
    }
    equals(a, b) {
        return false;
    }
    createDefaultValue(defaultValue) {
        return new ColumnHighlightManager();
    }
}
ColumnHighlightArchive.ɵfac = function ColumnHighlightArchive_Factory(t) { return new (t || ColumnHighlightArchive)(); };
ColumnHighlightArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ColumnHighlightArchive, factory: ColumnHighlightArchive.ɵfac });
__decorate([
    Override
], ColumnHighlightArchive.prototype, "equals", null);
__decorate([
    Override
], ColumnHighlightArchive.prototype, "createDefaultValue", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnHighlightArchive, [{
        type: Injectable
    }], function () { return []; }, { equals: [], createDefaultValue: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFLN0QsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUF3QztJQUVuRjtRQUNDLEtBQUssQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQWtCLEVBQUUsS0FBZTtRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNYLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR1MsTUFBTSxDQUFDLENBQXlCLEVBQUUsQ0FBeUI7UUFDcEUsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBR1Msa0JBQWtCLENBQUMsWUFBb0M7UUFDaEUsT0FBTyxJQUFJLHNCQUFzQixFQUFFLENBQUM7SUFDckMsQ0FBQzs7NEZBdEJXLHNCQUFzQjs0RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjtBQWVsQztJQURDLFFBQVE7b0RBR1I7QUFHRDtJQURDLFFBQVE7Z0VBR1I7dUZBdEJXLHNCQUFzQjtjQURsQyxVQUFVO3NDQWdCQSxNQUFNLE1BS04sa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb2x1bW5IaWdobGlnaHRNYW5hZ2VyIH0gZnJvbSAnLi9jb2x1bW4taGlnaGxpZ2h0Lm1hbmFnZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkhpZ2hsaWdodEFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPENvbHVtbkhpZ2hsaWdodE1hbmFnZXI+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihuZXcgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcigpKTtcblx0fVxuXG5cdHRvZ2dsZShrZXk6IENvbXBvc2l0aW9uSWQsIHZhbHVlOiBDb2x1bW5JZCkge1xuXHRcdHRoaXMuZ2V0KGtleSlcblx0XHRcdC5pZlByZXNlbnQoKG1hbmFnZXIpID0+IHtcblx0XHRcdFx0bWFuYWdlci50b2dnbGUodmFsdWUpO1xuXHRcdFx0XHR0aGlzLm5leHQoa2V5LCBtYW5hZ2VyKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHByb3RlY3RlZCBlcXVhbHMoYTogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlciwgYjogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZTogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcik6IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIge1xuXHRcdHJldHVybiBuZXcgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcigpO1xuXHR9XG5cbn1cbiJdfQ==