import reducer from './reducers';
import { restartGame, makeGuess, generateAuralUpdate} from './actions';

//reducer first tests the expected state
describe('Reducer', () => {
it('Should pass the initial state when nothing is passed in', () => {
  const state = reducer(undefined, {type: '_UNKNOWN'});

  expect(state.guesses).toEqual([]);
  expect(state.feedback).toEqual('Make your guess!');
  expect(state.auralStatus).toEqual('');
  expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
  expect(state.correctAnswer).toBeLessThanOrEqual(100);
  });
it('Should return the current state on an unknown action',  () =>{
  let currentState = {};
  const state = reducer(currentState, {type: '_UNKNOWN'});
  expect(state).toBe(currentState);
});

describe('restartGame', () => {
  it('Should start a new game', () => {
    //mess up state to simulate exising restartGame
    let state = {
      guesses: [1, 2, 3, 4],
      feedback: 'Awesome',
      auralStatus: '',
      correctAnswer: 7
      };
    const correctAnswer = 10;
    state = reducer(state, restartGame(correctAnswer));
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toEqual(correctAnswer);
    });
});
describe('makeGuess', () => {
  it('Should make a guess', () => {
    let state = {
      guesses: [],
      feedback: '',
      correctAnswer: 100
    };
    state = reducer(state, makeGuess(25));
          expect(state.guesses).toEqual([25]);
          expect(state.feedback).toEqual("You're Ice Cold...");

    state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(80));
            expect(state.guesses).toEqual([25, 60, 80]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([25, 60, 80, 95]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
            expect(state.feedback).toEqual('You got it!');

  });
});

describe('makeGuess', () => {
it('Can generate aural updates', () => {
  let state = {
    guesses: [25, 3, 90],
    feedback: "You're Warm.",
    auralStatus: ""
  };
  state = reducer(state, generateAuralUpdate());
  expect(state.auralStatus).toEqual(
    "Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25");
    });
});
});
