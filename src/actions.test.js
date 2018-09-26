//first import the named exports which contain the unconnected components.These are in the action.js file.

import {
    RESTART_GAME, restartGame, MAKE_GUESS, makeGuess, generateAuralUpdate, GENERATE_AURAL_UPDATE } from './actions';
import { Provider } from 'react-redux';

//test for RESTART_GAME component
describe('restartGame', () => {
  it('Should return the action', () => {
    const correctAnswer = 10;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});
//test for MAKE_GUESS component
describe('makeGuess', () => {
  it('Should return the action', () =>{
    const guess = 10;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);

  });
});
//test for GENERATE_AURAL_UPDATE component
describe('generateAuralUpdate', () => {
  it('Should return the action', () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);

  });
});
