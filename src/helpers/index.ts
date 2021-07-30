import { Type } from "../interfaces/pokemon";

export const capitalizeFirstLetter = (value: string) => {
  return value[0].toUpperCase() + value.slice(1);
}

export const colorAssign = (data: Type[]) => {
  const colorPrimary = typesPokemon[data[0].type.name];
  const colorSecond = typesPokemon[data[1]?.type.name];
  return colorSecond ? `linear-gradient(0deg, ${colorPrimary}0.5) 0%, ${colorSecond}0.5) 100%)` : `${colorPrimary}0.5)`;
}

export const colorBorder = (value: string) => `${typesPokemon[value]}1)`;

const typesPokemon: any = {
  normal: 'rgb(188, 180, 167, ',
  fire: 'rgb(228, 139, 107, ',
  fighting: 'rgb(208, 122, 121, ',
  water: 'rgb(141, 165, 237, ',
  flying: 'rgb(145, 180, 210, ',
  grass: 'rgb(123, 185, 122, ',
  poison: 'rgb(178, 101, 179, ',
  electric: 'rgb(231, 174, 106, ',
  ground: 'rgb(184, 143, 113, ',
  psychic: 'rgb(221, 115, 181, ',
  rock: 'rgb(212, 202, 130, ',
  ice: 'rgb(138, 209, 191, ',
  bug: 'rgb(152, 166, 130, ',
  dragon: 'rgb(145, 137, 186, ',
  ghost: 'rgb(175, 164, 243, ',
  sinister: 'rgb(148, 120, 116, ',
  steel: 'rgb(145, 180, 210, ',
  fairy: 'rgb(230, 111, 175, ',
}