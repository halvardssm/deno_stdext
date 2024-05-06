import {
  type Argon2Algorithm,
  type Argon2Options,
  instantiate,
} from "./_wasm/lib/deno_stdext_crypto_hash_wasm_argon2.generated.mjs";

const instance = instantiate();

export type { Argon2Algorithm, Argon2Options };

export const hash = instance.hash;
export const verify = instance.verify;
