import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/search/src/api/search.event-repository";
import * as i3 from "../../../../../core/structure/search/src/api/search.publisher";
export class SearchingGate extends Gate {
    structureId;
    searchEventRepository;
    searchCommandInvoker;
    searching;
    searchPhraseChanged = new EventEmitter();
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super();
        this.structureId = structureId;
        this.searchEventRepository = searchEventRepository;
        this.searchCommandInvoker = searchCommandInvoker;
    }
    ngOnChanges(changes) {
        if (this.isDefined('searching', changes)) {
            let searching;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.searchCommandInvoker.setSearchingConfig(searching, this.structureId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.searchEventRepository.onSearchPhrase(this.structureId.toReadModelRootId()), this.searchPhraseChanged);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchingGate, deps: [{ token: i1.StructureId }, { token: i2.SearchEventRepository }, { token: i3.SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SearchingGate, inputs: { searching: "searching" }, outputs: { searchPhraseChanged: "searchPhraseChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchingGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SearchEventRepository }, { type: i3.SearchPublisher }]; }, propDecorators: { searching: [{
                type: Input
            }], searchPhraseChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoaW5nLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvZ2F0ZS9zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBUTdELE1BQU0sT0FBZ0IsYUFBYyxTQUFRLElBQUk7SUFRTjtJQUNmO0lBQ0E7SUFQMUIsU0FBUyxDQUF5QjtJQUdsQyxtQkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUvRCxZQUF5QyxXQUF3QixFQUN2QyxxQkFBNEMsRUFDNUMsb0JBQXFDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBSGdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtJQUUvRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWlDO1FBRTVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFFekMsSUFBSSxTQUF1QixDQUFDO1lBRTVCLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsU0FBUyxHQUFHO29CQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDdkIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUU7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFDL0UsSUFBSSxDQUFDLG1CQUFtQixDQUN4QixDQUFDO0lBQ0gsQ0FBQzt3R0F0Q29CLGFBQWE7NEZBQWIsYUFBYTs7NEZBQWIsYUFBYTtrQkFEbEMsU0FBUztvS0FJVCxTQUFTO3NCQURSLEtBQUs7Z0JBSU4sbUJBQW1CO3NCQURsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL2NvbmZpZy9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlYXJjaGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogYm9vbGVhbiB8IFNlYXJjaENvbmZpZztcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hQdWJsaXNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNlYXJjaGluZ0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3NlYXJjaGluZycsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBzZWFyY2hpbmc6IFNlYXJjaENvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNlYXJjaGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnNlYXJjaGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VhcmNoaW5nID0gdGhpcy5zZWFyY2hpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIuc2V0U2VhcmNoaW5nQ29uZmlnKHNlYXJjaGluZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNlYXJjaEV2ZW50UmVwb3NpdG9yeS5vblNlYXJjaFBocmFzZSh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpLFxuXHRcdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=