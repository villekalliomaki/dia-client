import type { RefreshToken } from "../generated/graphql";
import { writable } from "svelte/store";

export const refreshToken = writable<RefreshToken>(null);
