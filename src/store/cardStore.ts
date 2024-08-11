
import { writable, type Writable } from "svelte/store";
import type{ Card} from '../types/Card.ts';

export const hand = writable<Card[]>([]); 
export const trash = writable<Card[]>([]); 
export const selectedCard = writable<Card | null>(null);
export const isCardSelected= writable(false)