import { Type } from "../interfaces/pokemon";

export const capitalizeFirstLetter = (value: string) => {
  return value[0].toUpperCase() + value.slice(1);
}



export const colorAssign = (data: Type[]) => {
  const colorPrimary = typesPokemon[data[0].type.name];
  const colorSecond = data[1] ? typesPokemon[data[1].type.name] : undefined;
  return colorSecond ? `linear-gradient(0deg, ${colorPrimary} 0%, ${colorSecond}100%)` : colorPrimary;
}

const typesPokemon: any = {
  normal: 'rgb(188, 180, 167, 0.5)',
  fire: 'rgb(228, 139, 107, 0.5)',
  fighting: 'rgb(208, 122, 121, 0.5)',
  water: 'rgb(141, 165, 237, 0.5)',
  flying: 'rgb(145, 180, 210, 0.5)',
  grass: 'rgb(123, 185, 122, 0.5)',
  poison: 'rgb(178, 101, 179, 0.5)',
  electric: 'rgb(231, 174, 106, 0.5)',
  ground: 'rgb(184, 143, 113, 0.5)',
  psychic: 'rgb(221, 115, 181, 0.5)',
  rock: 'rgb(212, 202, 130, 0.5)',
  ice: 'rgb(138, 209, 191, 0.5)',
  bug: 'rgb(152, 166, 130, 0.5)',
  dragon: 'rgb(145, 137, 186, 0.5)',
  ghost: 'rgb(175, 164, 243, 0.5)',
  sinister: 'rgb(148, 120, 116, 0.5)',
  steel: 'rgb(145, 180, 210, 0.5)',
  fairy: 'rgb(230, 111, 175, 0.5)',
}