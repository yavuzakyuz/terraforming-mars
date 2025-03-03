import {expect} from 'chai';
import {SolarReflectors} from '../../../src/server/cards/colonies/SolarReflectors';
import {TestPlayer} from '../../TestPlayer';

describe('SolarReflectors', function() {
  it('Should play', function() {
    const card = new SolarReflectors();
    const player = TestPlayer.BLUE.newPlayer();
    const action = card.play(player);
    expect(action).is.undefined;
    expect(player.production.heat).to.eq(5);
  });
});
