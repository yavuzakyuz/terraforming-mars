import {expect} from 'chai';
import {AerialMappers} from '../../../src/server/cards/venusNext/AerialMappers';
import {CometForVenus} from '../../../src/server/cards/venusNext/CometForVenus';
import {Game} from '../../../src/server/Game';
import {TestPlayer} from '../../TestPlayer';
import {OrOptions} from '../../../src/server/inputs/OrOptions';
import {SelectPlayer} from '../../../src/server/inputs/SelectPlayer';
import {cast} from '../../TestingUtils';

describe('CometForVenus', function() {
  it('Should play', function() {
    const card = new CometForVenus();
    const card2 = new AerialMappers();
    const player = TestPlayer.BLUE.newPlayer();
    const player2 = TestPlayer.RED.newPlayer();
    const game = Game.newInstance('gameid', [player, player2], player);

    player2.megaCredits = 10;
    player2.playedCards.push(card2);

    const action = cast(card.play(player), OrOptions);

    expect(action.options).has.lengthOf(2);

    const subActionSelectPlayer= cast(action.options[0], SelectPlayer);

    expect(subActionSelectPlayer.players).has.lengthOf(1);
    expect(subActionSelectPlayer.players[0]).to.eq(player2);
    subActionSelectPlayer.cb(player2);
    expect(game.getVenusScaleLevel()).to.eq(2);
    expect(player2.megaCredits).to.eq(6);
  });
});
