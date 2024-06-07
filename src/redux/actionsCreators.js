import * as ACTIONS_TYPES from "./actionsTypes";

export const ajouterVille = (ville) => {
  return { type: ACTIONS_TYPES.AJOUTER_VILLE, payload: ville };
};
export const modifierPopulation = (code) => {
  return { type: ACTIONS_TYPES.MODIFIER_POPULATION, payload: code };
};
