export interface Welcome {
  id?: number;
  name: string;
  value: number;
  pokemon?: number;
  pokemons?: Pokemon[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: Generation;
  slot: number;
}