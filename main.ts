export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(`DENO_ENV: ${Deno.env.get("DENO_ENV")}`);
  console.log("Add 2 + 3 =", add(2, 3));
}
