import { BehaviorSubject } from 'rxjs';
// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

export const user$ = new BehaviorSubject({});
export const accountNumber$ = new BehaviorSubject({});
