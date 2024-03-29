import { Message } from '../../domain/message/message';
export class DomainEvent extends Message {
    payload;
    constructor(aggregateId, payload, messageType) {
        super(aggregateId, messageType);
        this.payload = payload;
    }
    isSameType(event) {
        return this.constructor.name === event.constructor.name;
    }
    getPayload() {
        return this.payload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvYXBpL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHdkQsTUFBTSxPQUFnQixXQUFpRCxTQUFRLE9BQVU7SUFFdkUsT0FBTyxDQUFNO0lBRTlCLFlBQXNCLFdBQWMsRUFDN0IsT0FBWSxFQUNaLFdBQW1CO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFxQjtRQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21lc3NhZ2UvbWVzc2FnZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvbWFpbkV2ZW50PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCA9IEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIE1lc3NhZ2U8ST4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGF5bG9hZDogYW55O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgcGF5bG9hZDogYW55LFxuXHRcdFx0XHRcdFx0ICBtZXNzYWdlVHlwZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1lc3NhZ2VUeXBlKTtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0aXNTYW1lVHlwZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0Z2V0UGF5bG9hZCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnBheWxvYWQ7XG5cdH1cbn1cbiJdfQ==