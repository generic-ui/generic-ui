import { HermesSubscriber } from './hermes.subscriber';
export class HermesSingleSubscriber extends HermesSubscriber {
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        const observer = this.getObserver();
        if (observer && observer.next) {
            observer.next(value);
            this.complete();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zaW5nbGUtc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNLE9BQU8sc0JBQTBCLFNBQVEsZ0JBQW1CO0lBRWpFLElBQUksQ0FBQyxLQUFRO1FBRVosSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsT0FBTztTQUNQO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTaW5nbGVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5nZXRPYnNlcnZlcigpO1xuXG5cdFx0aWYgKG9ic2VydmVyICYmIG9ic2VydmVyLm5leHQpIHtcblx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0dGhpcy5jb21wbGV0ZSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=