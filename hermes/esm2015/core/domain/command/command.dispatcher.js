import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./command.stream";
export class CommandDispatcher {
    constructor(commandStream) {
        this.commandStream = commandStream;
    }
    dispatch(command) {
        this.commandStream.next(command);
    }
}
CommandDispatcher.ɵfac = function CommandDispatcher_Factory(t) { return new (t || CommandDispatcher)(i0.ɵɵinject(i1.CommandStream)); };
CommandDispatcher.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommandDispatcher, factory: CommandDispatcher.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommandDispatcher, [{
        type: Injectable
    }], function () { return [{ type: i1.CommandStream }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVEzQyxNQUFNLE9BQU8saUJBQWlCO0lBRTdCLFlBQTZCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3pELENBQUM7SUFFRCxRQUFRLENBQUMsT0FBNkI7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7a0ZBUFcsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZFN0cmVhbSB9IGZyb20gJy4vY29tbWFuZC5zdHJlYW0nO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kU3RyZWFtOiBDb21tYW5kU3RyZWFtKSB7XG5cdH1cblxuXHRkaXNwYXRjaChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZFN0cmVhbS5uZXh0KGNvbW1hbmQpO1xuXHR9XG59XG4iXX0=