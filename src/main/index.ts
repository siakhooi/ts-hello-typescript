const DEFAULT_WHO = 'TypeScript';
export function hello(who: string = DEFAULT_WHO): string {
  return `Hello ${who}`;
}
console.log(hello());
