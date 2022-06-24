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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvbW1vbi9zdHJlYW0vY29yZS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE1BQU0sT0FBTyxzQkFBMEIsU0FBUSxnQkFBbUI7SUFFeEQsSUFBSSxDQUFDLEtBQVE7UUFFckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsT0FBTztTQUNQO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTaW5nbGVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0b3ZlcnJpZGUgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5nZXRPYnNlcnZlcigpO1xuXG5cdFx0aWYgKG9ic2VydmVyICYmIG9ic2VydmVyLm5leHQpIHtcblx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0dGhpcy5jb21wbGV0ZSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=