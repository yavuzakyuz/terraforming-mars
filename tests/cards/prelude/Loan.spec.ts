import {expect} from 'chai';
import {Loan} from '../../../src/server/cards/prelude/Loan';
import {Player} from '../../../src/server/Player';
import {Resources} from '../../../src/common/Resources';
import {TestPlayer} from '../../TestPlayer';

describe('Loan', function() {
  let card: Loan;
  let player: Player;

  beforeEach(function() {
    card = new Loan();
    player = TestPlayer.BLUE.newPlayer();
  });

  it('Can not play', function() {
    player.production.add(Resources.MEGACREDITS, -4);
    expect(card.canPlay(player)).is.not.true;
  });

  it('Should play', function() {
    expect(card.canPlay(player)).is.true;
    card.play(player);

    expect(player.megaCredits).to.eq(30);
    expect(player.production.megacredits).to.eq(-2);
  });
});
