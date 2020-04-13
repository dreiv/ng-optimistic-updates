import { Neo } from './data.model';
import { Observable, BehaviorSubject } from 'rxjs';

export class State {
  private prevState: Neo[];
  private neoStoreSubject: BehaviorSubject<Neo[]>;
  private errorSubject: BehaviorSubject<string>;

  neoStore$: Observable<Neo[]>;
  errors$: Observable<string>;

  protected constructor() {
    this.neoStoreSubject = new BehaviorSubject([]);
    this.errorSubject = new BehaviorSubject(null);
    this.neoStore$ = this.neoStoreSubject.asObservable();
    this.errors$ = this.errorSubject.asObservable();
  }

  private setPrevState(): void {
    this.prevState = this.neoStoreSubject.getValue();
  }

  setNeoStore(neoList: Neo[]): void {
    this.setPrevState();
    this.neoStoreSubject.next(neoList);
    this.dismissError();
  }

  updateNeo(neo: Neo): void {
    this.setPrevState();
    const newState = this.prevState.map((current) => {
      if (current.id === neo.id) {
        return { ...current, ...neo };
      }

      return current;
    });
    this.neoStoreSubject.next(newState);
    this.dismissError();
  }

  stateError(errMsg: string): void {
    this.errorSubject.next(errMsg);
    this.neoStoreSubject.next(this.prevState);
  }

  dismissError(): void {
    this.errorSubject.next(null);
  }
}
