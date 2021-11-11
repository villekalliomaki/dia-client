import type { User } from "../generated/graphql";
import { writable } from "svelte/store";

export const user = writable<User>(null);
